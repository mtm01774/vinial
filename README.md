# Vinial 🍷

Vinial is a premium wine subscription service that delivers curated wine selections directly to your doorstep. Our platform offers a sophisticated wine shopping experience and flexible subscription plans for wine enthusiasts.

## 🚀 Features

- 🍷 Curated wine selections
- 📦 Flexible subscription plans
- 🛒 Online wine shop
- 👤 User authentication
- 🔒 Age verification
- 💳 Secure payment processing
- 📱 Responsive design

## 🛠 Tech Stack

- **Frontend:**
  - Next.js
  - TypeScript
  - Tailwind CSS
  - React Context API

- **Backend:**
  - NestJS
  - TypeScript
  - PostgreSQL
  - Prisma ORM

- **Authentication:**
  - NextAuth.js
  - JWT

- **Payment Processing:**
  - Stripe

## 🏗 Project Structure

```
vinial/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Footer, etc.)
│   │   ├── ui/             # Reusable UI components
│   │   ├── wine/           # Wine-related components
│   │   ├── subscription/   # Subscription-related components
│   │   ├── checkout/       # Checkout flow components
│   │   └── auth/          # Authentication components
│   ├── pages/             # Next.js pages
│   ├── styles/            # Global styles and CSS modules
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── context/           # React Context providers
│   ├── types/             # TypeScript type definitions
│   ├── services/          # API services
│   └── locales/           # i18n translations
├── server/                # NestJS backend
│   ├── src/
│   │   ├── modules/       # NestJS modules
│   │   └── config/        # Server configuration
│   └── test/              # Server tests
├── public/                # Static files
├── config/                # Configuration files
└── scripts/               # Utility scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mtm01774/vinial.git
cd vinial
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## 🔑 Environment Variables

Create a `.env` file with the following variables:

```env
# App
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/vinial"

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-publishable-key
STRIPE_SECRET_KEY=your-secret-key
```

## 📝 Scripts

- `dev`: Starts the development server
- `build`: Builds the production application
- `start`: Starts the production server
- `lint`: Runs ESLint
- `test`: Runs Jest tests
- `seed`: Seeds the database with initial data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Your Name] - Initial work - [@mtm01774](https://github.com/mtm01774)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [NestJS](https://nestjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/) 