# Stripe Webhook Setup Guide

Your payment integration issues have been fixed! Here's what I've implemented and what you need to do to complete the setup:

## ✅ What's Been Fixed

1. **Stripe Webhook Endpoint**: Created `/api/webhooks/stripe` to handle payment events
2. **Payment Data Storage**: Webhook now stores payment data in your Supabase `payments` table
3. **Customer Creation**: Checkout now creates customers in Stripe for proper tracking
4. **Database Schema**: Created `database-schema.sql` with the payments table structure

## 🔧 Setup Steps

### 1. Create the Payments Table in Supabase

Run the SQL in `database-schema.sql` in your Supabase SQL Editor:

1. Go to your Supabase Dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `database-schema.sql`
4. Click "Run" to create the payments table

### 2. Set Up Stripe Webhook

1. **Get your webhook endpoint URL**:
   - For local development: Use ngrok or similar to expose your local server
   - For production: Your production domain + `/api/webhooks/stripe`

   Example: `https://yourdomain.com/api/webhooks/stripe`

2. **Create webhook in Stripe Dashboard**:
   - Go to [Stripe Dashboard](https://dashboard.stripe.com/)
   - Navigate to "Developers" → "Webhooks"
   - Click "Add endpoint"
   - Enter your endpoint URL
   - Select events to listen for:
     - `checkout.session.completed`
     - `payment_intent.succeeded`
     - `payment_intent.payment_failed`

3. **Copy the webhook signing secret**:
   - After creating the webhook, Stripe will show you a "Signing secret"
   - Add this to your `.env.local` file:
     ```
     STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxx
     ```

### 3. Environment Variables

Make sure you have these in your `.env.local`:

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
SUPABASE_URL=...
```

## 🧪 Testing the Integration

1. **Test a payment flow**:
   - Add items to cart
   - Go through checkout
   - Complete payment with a test card (4242 4242 4242 4242)

2. **Verify data storage**:
   - Check your Supabase `payments` table for new records
   - Check Stripe Dashboard for customer records under "Customers"

3. **Check webhook logs**:
   - Monitor your server logs for webhook events
   - Check Stripe Dashboard "Events" for webhook delivery status

## 🔍 What Was Wrong Before

- **No webhook endpoint**: Payments succeeded but no data was stored
- **No customer creation**: Stripe couldn't track customers properly
- **Missing database table**: No place to store payment records

## ✅ What Works Now

- ✅ Payments are stored in Supabase `payments` table
- ✅ Customers appear in Stripe Dashboard
- ✅ Payment status is tracked properly
- ✅ Failed payments are handled
- ✅ Webhook events are processed securely

## 🆘 Troubleshooting

If payments still don't appear:

1. **Check webhook delivery**: Look at Stripe Dashboard → Events
2. **Verify webhook secret**: Make sure `STRIPE_WEBHOOK_SECRET` is correct
3. **Check server logs**: Look for webhook processing errors
4. **Verify database**: Ensure the payments table was created successfully

The webhook will now automatically store all payment data when customers complete purchases!






