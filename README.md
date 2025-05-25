# PostgreDB - PostgreSQL SaaS Platform Demo

A modern, responsive demo website for a PostgreSQL SaaS platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for animations
- 📱 **Fully Responsive** design
- 🌙 **Dark Mode** ready
- ⚡ **Optimized Performance**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rcdelacruz/postgres-saas-demo.git
cd postgres-saas-demo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── login/          # Login page
│   ├── signup/         # Signup page
│   ├── dashboard/      # Dashboard page
│   └── docs/           # Documentation page
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features grid
│   ├── Stats.tsx       # Statistics counter
│   ├── Pricing.tsx     # Pricing plans
│   ├── CTA.tsx         # Call to action
│   ├── Footer.tsx      # Footer
│   └── ui/             # Reusable UI components
├── lib/
│   ├── api.ts          # API client
│   └── utils.ts        # Utility functions
├── public/
│   └── ...             # Static assets
└── package.json
```

## Key Components

### Hero Section
- Eye-catching gradient text
- Animated elements with Framer Motion
- Call-to-action buttons
- Key metrics display

### Features Grid
- 9 key features with icons
- Hover effects and animations
- Responsive grid layout

### Pricing Plans
- Three tier pricing (Starter, Pro, Enterprise)
- Feature comparison
- Popular plan highlight

### Statistics Counter
- Animated number counters
- Key platform metrics

### Dashboard
- Modern admin interface
- Database management
- Analytics and billing sections
- Responsive sidebar navigation

## Pages

- **Home** (`/`) - Landing page with hero, features, pricing
- **Login** (`/login`) - User authentication
- **Sign Up** (`/signup`) - New user registration
- **Dashboard** (`/dashboard`) - User dashboard for managing databases
- **Documentation** (`/docs`) - Documentation hub

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... other colors
}
```

### Content
All text content is directly in the components and can be easily modified.

## Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `.next` directory.

## Deployment

This project can be deployed on:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any Node.js hosting platform

### Deploy on Vercel

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with default settings

## API Integration

The website is ready to connect to the PostgreSQL SaaS API. Update the API endpoints in your components:

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.postgredb.com'
```

## License

MIT License - feel free to use this for your own projects!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
