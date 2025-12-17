# Craftsman by Kelios

A modern, responsive landing page built with React, Vite, and Tailwind CSS v4. Features a clean design showcasing custom business tools and services.

## Features

- **Modern Stack**: Built with React 18, Vite 7, and Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with smooth animations
- **Custom Components**: shadcn/ui-inspired Button and Input components
- **Custom Fonts**: Libre Baskerville (serif) and JetBrains Mono (monospace)
- **Smooth Navigation**: Scroll-to-section functionality with smooth scrolling
- **Bento Grid Layout**: Modern card-based service showcase
- **Pricing Section**: Clear, honest pricing presentation
- **CTA Forms**: Email capture with form handling

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── landing/         # Landing page sections
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── BentoGrid.jsx
│   │   │   ├── ComparisonSection.jsx
│   │   │   ├── PricingSection.jsx
│   │   │   └── FooterSection.jsx
│   │   └── ui/              # Reusable UI components
│   │       ├── button.jsx
│   │       └── input.jsx
│   ├── lib/
│   │   └── utils.js         # Utility functions (cn helper)
│   ├── App.jsx              # Main application
│   └── main.jsx             # Entry point
├── docs/                    # Original component documentation
└── vite.config.js           # Vite configuration with path aliases
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite plugin
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Libre Baskerville, JetBrains Mono)
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Design Features

- **Color Palette**:
  - Primary: `#FF6B35` (orange accent)
  - Background: `#F9F9F7` (warm white)
  - Text: `#1a1a1a` (near black)
  - Secondary: `#EEECE8` (light beige)

- **Typography**:
  - Headings: Libre Baskerville (serif)
  - Body/UI: JetBrains Mono (monospace)

- **Shadow Style**: Brutalist-inspired offset shadows (`shadow-[4px_4px_0px_0px_#1a1a1a]`)

## Configuration

The project uses Tailwind CSS v4 with the new Vite plugin. Configuration is in `vite.config.js`:

```javascript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## Deployment

### Deploy to Vercel

This project is configured for easy deployment to Vercel:

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite framework
6. Click "Deploy"

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files to exclude from deployment

The project includes optimized Vercel configuration for Vite builds with proper SPA routing support.

## License

MIT
