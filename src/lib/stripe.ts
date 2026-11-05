import Stripe from 'stripe';

// Proxy so existing `stripe.xxx` calls still work
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});
