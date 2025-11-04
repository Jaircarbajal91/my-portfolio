# Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light mode toggle
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form
- 🚀 Easy deployment

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Header.tsx** - Update the name in the logo
2. **Hero.tsx** - Update name, title, description, and social links
3. **About.tsx** - Update your story and statistics
4. **Skills.tsx** - Update your skills and technologies
5. **Projects.tsx** - Update projects with your work
6. **Contact.tsx** - Update contact information
7. **Footer.tsx** - Update footer information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Fonts in `src/index.css`
- Component styles in individual component files

### Images

Replace placeholder images with your actual project screenshots and profile photo.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run build && npm run deploy`

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Intersection Observer

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
