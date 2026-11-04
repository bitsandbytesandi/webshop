import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface CartItem {
  product: {
    name: string;
    description?: string;
    image?: string;
    images?: string[];
    price: number;
  };
  quantity: number;
}

interface CheckoutRequest {
  items: CartItem[];
}

export async function POST(req: NextRequest) {
  try {
    // 1. Origin URL bepalen voor success/cancel redirects
    const origin =
      req.headers.get("origin") ||
      req.headers.get("x-forwarded-host") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    // 2. Body parsen en valideren
    const body: CheckoutRequest = await req.json();
    const { items } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Geen producten in de winkelmand" },
        { status: 400 }
      );
    }

    // 3. Line items voor Stripe aanmaken
    const line_items = items.map((item) => {
      // Zorg dat de prijs correct naar centen wordt omgerekend
      const unitAmount = Math.round(item.product.price * 100);

      // Bepaal de juiste afbeelding(en) array voor Stripe
      let productImages: string[] = [];
      if (item.product.images && item.product.images.length > 0) {
        productImages = item.product.images;
      } else if (item.product.image) {
        productImages = [item.product.image];
      }

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: item.product.name,
            description: item.product.description || undefined,
            images: productImages,
          },
          unit_amount: unitAmount,
        },
        quantity: item.quantity,
      };
    });

    // 4. Stripe Checkout Session aanmaken
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "bancontact", "ideal"],
      line_items,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      shipping_address_collection: {
        allowed_countries: ["BE", "NL", "FR", "DE"],
      },
      billing_address_collection: "required",
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error("STRIPE_CHECKOUT_ERROR:", error);

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Betaalprovider fout: ${error.message}` },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Interne serverfout bij het aanmaken van de checkout" },
      { status: 500 }
    );
  }
}
