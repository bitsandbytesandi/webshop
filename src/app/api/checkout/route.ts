import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { items } = body

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Geen producten in de winkelwagen" },
        { status: 400 }
      )
    }

    // Maak line_items voor Stripe
    const line_items = items.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.product.name,
          description: item.product.description,
          images: [item.product.image],
        },
        unit_amount: Math.round(item.product.price * 100), // Stripe werkt in centen
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "ideal"], // iDEAL is handig voor NL
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
      shipping_address_collection: {
        allowed_countries: ["NL", "BE", "DE"],
      },
      billing_address_collection: "required",
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error("Stripe error:", error)
    return NextResponse.json(
      { error: error.message || "Er ging iets mis" },
      { status: 500 }
    )
  }
}
