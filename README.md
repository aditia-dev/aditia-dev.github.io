# Portfolio Website

A modern, responsive personal portfolio website built with Vite, TypeScript, and vanilla JavaScript. Features a clean black/white/blue color scheme with smooth animations and excellent performance.

## Features

- ✨ **Modern Design**: Clean, professional aesthetic with black/white/blue color palette
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **High Performance**: Optimized for fast loading and excellent Lighthouse scores
- ♿ **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- 🎨 **Customizable**: Easy-to-update data structures for content management
- 🔍 **SEO Optimized**: Meta tags and JSON-LD structured data included

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aditia-dev/aditia-dev.github.io.git
cd aditia-dev.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization Guide

### Personal Information

#### Update Name and Title

Edit `index.html` and find the hero section:

```html
<h1 class="hero-title">
  Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">Your Job Title</p>
```

Update the meta tags in the `<head>` section:

```html
<meta name="author" content="Your Name" />
<meta name="description" content="Your custom description" />
<title>Your Name - Your Title</title>
```

#### Update About Section

Edit the biography text in the `#about` section of `index.html`:

```html
<div class="about-text">
  <p>Your first paragraph...</p>
  <p>Your second paragraph...</p>
  <p>Your third paragraph...</p>
</div>
```

#### Update Contact Information

In `index.html`, find the contact section and update:

```html
<a href="mailto:your.email@example.com" class="btn btn-primary">
  Email Me
</a>
```

Update social links:

```html
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourusername" ...>
<a href="https://twitter.com/yourusername" ...>
```

### Skills

Edit `src/data.ts` to customize your skills. Each skill has a name, category, and emoji icon:

```typescript
export const skills: Skill[] = [
  { name: 'JavaScript', category: 'Frontend', icon: '📜' },
  { name: 'TypeScript', category: 'Frontend', icon: '🔷' },
  // Add more skills...
];
```

**Categories supported:**
- Frontend
- Backend
- Tools

You can add new categories by simply using a different category name.

### Projects

Edit `src/data.ts` to add or modify your projects:

```typescript
export const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'Detailed description of your project...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    demoUrl: 'https://your-demo-url.com',
    githubUrl: 'https://github.com/yourusername/project',
    imageUrl: 'path/to/image.jpg', // Optional
  },
  // Add more projects...
];
```

**Project Image Options:**
1. Use a local image: Place images in `public/` folder and reference them
2. Use external URLs
3. Leave empty to use the default SVG placeholder

### Color Scheme

The color palette is defined using CSS custom properties in `src/style.css`:

```css
:root {
  --color-primary: #0066ff;        /* Main blue accent */
  --color-primary-dark: #0052cc;   /* Darker blue for hover */
  --color-primary-light: #3385ff;  /* Lighter blue */
  --color-black: #000000;          /* Black */
  --color-white: #ffffff;          /* White */
  --color-gray-dark: #1a1a1a;      /* Dark gray */
  --color-gray-medium: #666666;    /* Medium gray */
  --color-gray-light: #e5e5e5;     /* Light gray */
}
```

Change these values to customize the color scheme throughout the site.

### Typography

Update font families in `src/style.css`:

```css
:root {
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
  --font-heading: 'Georgia', 'Times New Roman', serif;
}
```

To use Google Fonts:
1. Add the font link in `index.html` `<head>`
2. Update the CSS custom property

### JSON-LD Structured Data

Update the structured data at the bottom of `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Job Title",
  "url": "https://your-website.com/",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername"
  ],
  "knowsAbout": [
    "Skill 1",
    "Skill 2"
  ]
}
</script>
```

## Deployment

### GitHub Pages

1. Update `vite.config.ts` if your repository name is not your username:
```typescript
export default defineConfig({
  base: '/repository-name/', // Change this
  // ...
})
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `dist/` folder to GitHub Pages:
```bash
# Option 1: Using gh-pages package
npm install -D gh-pages
npx gh-pages -d dist

# Option 2: Manual deployment
# Push the dist folder to a gh-pages branch
```

4. Enable GitHub Pages in your repository settings (Settings > Pages)

### Other Platforms

The built `dist/` folder can be deployed to:
- **Netlify**: Drag and drop the `dist/` folder or connect your Git repository
- **Vercel**: Import your GitHub repository and Vercel will auto-detect Vite
- **AWS S3**: Upload the `dist/` folder to an S3 bucket configured for static hosting
- **Cloudflare Pages**: Connect your Git repository or upload via dashboard

## Performance Optimization

The portfolio is already optimized for performance:

- ✅ CSS minification via Vite build process
- ✅ JavaScript bundling and minification
- ✅ Lazy loading for images
- ✅ Minimal JavaScript dependencies
- ✅ Deferred non-critical JavaScript
- ✅ Optimized SVG icons
- ✅ Responsive images with proper dimensions

### Lighthouse Scores

This portfolio is designed to achieve:
- **Performance**: >90
- **Accessibility**: >90
- **Best Practices**: >90
- **SEO**: >90

To test locally:
1. Run `npm run build && npm run preview`
2. Open Chrome DevTools
3. Go to Lighthouse tab
4. Run audit

## Project Structure

```
├── index.html          # Main HTML file with structure and meta tags
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite build configuration
├── public/             # Static assets (create if needed for images)
└── src/
    ├── main.ts         # Main TypeScript entry point
    ├── data.ts         # Skills and projects data structures
    └── style.css       # All styles with CSS custom properties
```

## Maintenance

### Adding New Projects

1. Open `src/data.ts`
2. Add a new object to the `projects` array
3. The changes will automatically appear on the site

### Updating Skills

1. Open `src/data.ts`
2. Modify the `skills` array
3. Skills are automatically grouped by category

### Content Updates

Most content lives in:
- `index.html` - Static content (hero, about, contact)
- `src/data.ts` - Dynamic content (skills, projects)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License - feel free to use this template for your own portfolio.

## Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with a detailed description
3. Contribute via pull requests

## Credits

Built with:
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- Vanilla JavaScript - No framework dependencies
- CSS3 - Modern styling with custom properties

---

Made with ❤️ by Aditia Dev
