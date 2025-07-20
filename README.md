# Learnforfree - Essential Development Tools

A modern web platform showcasing curated, free development tools and resources to accelerate your learning journey.

## 🚀 Features

- **Curated Tools**: Handpicked development tools organized by categories
- **Modern Design**: Clean, responsive interface with orange theme
- **Tool Categories**: Developers, Students, Entrepreneurship, Soft Skills
- **Transparent Cards**: Modern glassmorphism design
- **Custom Graphics**: Professional SVG illustrations
- **Mobile-First**: Responsive design that works on all devices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for any hosting platform

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd learnfree-future-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (buttons, cards, etc.)
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ToolCard.tsx    # Tool display cards
│   ├── CategoryTabs.tsx # Category filter tabs
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
├── assets/             # Static assets
│   ├── logos/          # Tool logos
│   └── why-choose-us/  # Feature section images
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## 🎨 Design System

The project uses a consistent orange theme with:
- Primary color: `HSL(25, 95%, 65%)`
- Modern glassmorphism effects
- Responsive typography
- Hover animations and transitions
- Custom SVG illustrations

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 📝 Adding New Tools

1. Add tool logo to `src/assets/logos/`
2. Update the tools array in `src/pages/Index.tsx`
3. Include tool information: name, description, URL, category, pricing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for the learning community
