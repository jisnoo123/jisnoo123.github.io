# Jisnoo Dev Pal - Portfolio Website

A modern, minimalist portfolio website built with React + Vite, featuring a monochrome design with dark/light mode support.

## 🌐 Live Demo

[https://jisnoo123.github.io](https://jisnoo123.github.io)

## ✨ Features

- **Modern Design**: Clean, minimalist, and professional look
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Fully Responsive**: Mobile-first design, works on all devices
- **Smooth Animations**: Powered by Framer Motion
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, Open Graph, structured data, and sitemap
- **Fast Performance**: Optimized build with code splitting

## 🛠️ Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: CSS Modules with CSS Custom Properties for theming
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite (rolldown-vite)
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
/
├── .github/workflows/     # GitHub Actions for deployment
├── public/
│   ├── images/           # All images (profile, projects, gallery, honors)
│   ├── CV/               # CV PDF
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx    # Navigation with theme toggle
│   │   ├── Hero.jsx      # Bio section
│   │   ├── News.jsx      # News timeline
│   │   ├── Projects.jsx  # Projects grid
│   │   ├── Education.jsx # Education timeline
│   │   ├── Honors.jsx    # Awards section
│   │   ├── Specializations.jsx
│   │   ├── Trivia.jsx    # Gallery & hobbies
│   │   ├── Gallery.jsx   # Lightbox component
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── global.css    # Global styles
│   │   └── variables.css # CSS custom properties
│   ├── hooks/
│   │   ├── useTheme.js   # Theme management
│   │   └── useScrollAnimation.js
│   ├── utils/
│   │   └── data.js       # Centralized content data
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html            # HTML template with SEO meta tags
├── vite.config.js        # Vite configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jisnoo123/jisnoo123.github.io.git
cd jisnoo123.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📝 Updating Content

All content is centralized in `src/utils/data.js`. Edit this file to update:

- Personal information and bio
- News items
- Projects
- Education history
- Honors and awards
- Online specializations
- Trivia and gallery images

### Adding a New Project

```javascript
// In src/utils/data.js
export const projects = [
  {
    id: 2,
    title: "Your Project Title",
    description: "Project description",
    techInfo: "Technologies used",
    date: "Month 'Year",
    image: "/images/projects/your-project/image.png",
    links: {
      github: "https://github.com/...",
      demo: "https://...",
    },
  },
  // ... existing projects
];
```

### Adding a New News Item

```javascript
// In src/utils/data.js
export const newsItems = [
  {
    id: 2,
    date: "Month 'Year",
    content: "Your news content",
    isNew: true, // Set to false for older items
  },
  // ... existing items
];
```

## 🚢 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Build the project: `npm run build`
2. The `dist/` folder contains the static files
3. Deploy to any static hosting service

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions"
3. Push to `main` branch to trigger deployment

## 🎨 Customization

### Changing Colors

Edit `src/styles/variables.css` to modify the color scheme:

```css
:root {
  --color-accent: #3b82f6; /* Primary accent color */
  /* ... other colors */
}

[data-theme="dark"] {
  --color-accent: #60a5fa; /* Dark mode accent */
  /* ... other dark mode colors */
}
```

### Changing Fonts

Update the Google Fonts link in `index.html` and the font-family in `variables.css`.

## 📄 License

© 2023-2025 Jisnoo Dev Pal

## 🤝 Acknowledgments

- Built with [React](https://react.dev/) and [Vite](https://vite.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons by [Lucide](https://lucide.dev/)
