# GoAbroadly

Production-ready study abroad consultancy website built with Next.js App Router, TypeScript, Prisma, and PostgreSQL.

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **PostgreSQL** (Supabase) + **Prisma ORM**
- **NextAuth.js** (admin authentication)
- **Cloudinary** (image storage)
- **Framer Motion** + **React Three Fiber** (animations)
- **React Hook Form** + **Zod** (forms & validation)
- **CSS Modules** + Global CSS (no Tailwind)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Supabase recommended)

### Installation

```bash
cd goabroadly-temp
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_URL` | App URL (e.g. `http://localhost:3000`) |
| `NEXTAUTH_SECRET` | Random secret (min 32 chars) |
| `ADMIN_EMAIL` | Admin login email |
| `ADMIN_PASSWORD` | Admin login password |
| `NEXT_PUBLIC_SITE_URL` | Public site URL |

Optional (Cloudinary for blog images):

| Variable | Description |
|----------|-------------|
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

### Database Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site.

Admin panel: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

Default credentials (from `.env.local`):
- Email: `admin@goabroadly.com`
- Password: `Admin123!`

## Project Structure

```
src/
├── app/
│   ├── (public)/          # Public website pages
│   ├── admin/             # Admin panel
│   └── api/               # Route handlers
├── components/
│   ├── common/            # Header, Footer, Button, Toast
│   ├── home/              # Homepage sections
│   ├── forms/             # Contact & consultation forms
│   ├── animations/        # Framer Motion wrappers
│   ├── three/             # React Three Fiber scenes
│   ├── blog/              # Blog components
│   └── admin/             # Admin components
├── lib/                   # Auth, Prisma, Cloudinary, validations
├── services/              # Business logic
├── constants/             # Colors, content, site config
├── styles/                # Global CSS & variables
└── types/                 # TypeScript types
```

## Theme System

All colors are centralized in `src/constants/colors.ts`. CSS variables in `src/styles/variables.css` mirror these values. Components use `var(--color-*)` — never hardcode hex values.

## API Routes

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/contact` | Public | Submit contact inquiry |
| POST | `/api/consultation` | Public | Book consultation |
| GET | `/api/blogs` | Public/Admin | List blog posts |
| POST | `/api/blogs` | Admin | Create blog post |
| PUT | `/api/blogs/[id]` | Admin | Update blog post |
| DELETE | `/api/blogs/[id]` | Admin | Delete blog post |
| POST | `/api/upload` | Admin | Upload image to Cloudinary |
| GET/PATCH | `/api/inquiries` | Admin | Manage contact inquiries |
| GET | `/api/bookings` | Admin | View consultation bookings |

## Admin Routes

- `/admin/login` — Admin authentication
- `/admin/dashboard` — Overview stats
- `/admin/blogs` — Blog management
- `/admin/blogs/create` — Create new post
- `/admin/blogs/edit/[id]` — Edit post
- `/admin/contacts` — Contact inquiries
- `/admin/bookings` — Consultation bookings
- `/admin/settings` — Account settings

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run migrations
npm run db:seed      # Seed admin & categories
npm run db:studio    # Open Prisma Studio
```

## Deployment

1. Set environment variables on your hosting platform
2. Run `npx prisma migrate deploy`
3. Run `npx prisma db seed`
4. Deploy with `npm run build && npm run start`

Recommended: [Vercel](https://vercel.com) for Next.js hosting + [Supabase](https://supabase.com) for PostgreSQL.

## License

Private — All rights reserved.
