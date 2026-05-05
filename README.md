# Foydn Fresh Next.js Grocery MVP

Fresh rebuild of an ecommerce grocery website like `foydn.in`, built with Next.js App Router. The MVP focuses on mobile-first grocery discovery, guest cart, OTP-at-checkout, SEO basics, admin shells, and a complete Prisma data model for PostgreSQL.

## What Is Implemented

- Storefront: homepage, shop, category, product detail, search, cart, checkout, account, wishlist, blogs, policy pages.
- Admin: dashboard, products, categories, orders, customers, coupons, inventory, delivery zones, banners, blogs, settings.
- APIs: catalog, search, serviceability, cart, coupon validation, OTP auth, order creation, Razorpay mock, admin stubs.
- Cart: guest cart with secure `cart_token` cookie and in-memory fallback store.
- Auth: OTP mock flow using `123456` in development.
- SEO: metadata, product JSON-LD, `robots.txt`, `sitemap.xml`.
- Database: complete Prisma schema for PostgreSQL plus seed script.
- Verification: lint, production build, and smoke test script.

## Run Locally

```powershell
npm.cmd install
npm.cmd run dev -- -p 3001
```

Open:

- Storefront: http://localhost:3001
- Shop: http://localhost:3001/shop
- Admin: http://localhost:3001/admin

## Temporary Vercel Deployment

For a quick client demo URL:

```powershell
npm.cmd run build
npx.cmd vercel --yes
```

Vercel will return a temporary `https://*.vercel.app` URL. For production-like metadata, set:

```text
NEXT_PUBLIC_SITE_URL=https://your-preview-url.vercel.app
OTP_PROVIDER=mock
```

Temporary deployment behavior:

- OTP code is `123456`.
- Cart is cookie-backed for demo.
- Product data is mock/demo data.
- Admin pages are open and must be protected before real production.

## Verify

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run test:smoke
```

`test:smoke` expects the app running at `http://localhost:3001`. Use a different URL with:

```powershell
$env:BASE_URL="http://localhost:3000"; npm.cmd run test:smoke
```

## Environment

Copy `.env.example` to `.env` and fill production values:

- `DATABASE_URL`
- `SESSION_SECRET`
- `MSG91_AUTH_KEY` or `FAST2SMS_API_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `RAZORPAY_WEBHOOK_SECRET`
- S3/R2 image storage values

## Database Setup

The current app runs with mock/in-memory data so it is reviewable immediately. To connect PostgreSQL:

```powershell
npm.cmd run prisma:generate
npm.cmd run prisma:push
npm.cmd run prisma:seed
```

Then replace mock repository calls in `lib/catalog.ts` and `lib/store.ts` with Prisma-backed queries using `lib/prisma.ts`.

## MVP Buyer Flow

1. Browse homepage/categories/search.
2. Add product to guest cart.
3. Review cart.
4. Checkout.
5. Send OTP with phone.
6. Use mock OTP `123456`.
7. Add serviceable pincode like `302021`.
8. Place COD order.

## Production Completion Checklist

- Connect catalog/cart/order APIs to PostgreSQL.
- Replace mock OTP with MSG91/Fast2SMS.
- Validate Razorpay webhook signatures.
- Add admin authentication and RBAC middleware.
- Connect image upload to S3/R2.
- Import owner product catalog, images, pricing, and policies.
- Add order notification flows for WhatsApp/SMS/email.
- Add observability: analytics, error logging, order funnel events.
