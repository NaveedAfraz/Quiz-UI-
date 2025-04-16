# Quiz Game 🎯

A modern, interactive quiz application built with React and styled with Tailwind CSS. Features a beautiful Aurora effect background and a sleek dark mode interface.

![Quiz Game Preview](preview.png)

## Features

- 🎨 Beautiful Aurora background effect
- 🌙 Dark mode interface with glass-morphism
- 📱 Responsive design
- ⚡ Interactive UI with animations
- 📊 Real-time progress tracking
- 🎯 Score calculation
- 🔄 Restart functionality

## Tech Stack

- React
- Tailwind CSS
- Vite
- Radix UI Components
- OGL (for Aurora effect)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/NaveedAfraz/quiz-game.git
cd quiz-game
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
quiz-game/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── aurora.jsx
│   │       ├── card.jsx
│   │       └── progress.jsx
│   ├── pages/
│   │   └── quiz.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## Customization

### Adding New Questions

Edit the `quizData` array in `src/pages/quiz.jsx`:

```javascript
const quizData = [
  {
    id: 1,
    question: "Your question?",
    options: [
      { id: "a", text: "Option 1" },
      { id: "b", text: "Option 2" },
      { id: "c", text: "Option 3" },
      { id: "d", text: "Option 4" },
    ],
    correct: "a",
  },
  // Add more questions...
];
```

### Modifying the Aurora Effect

Adjust the Aurora parameters in `src/pages/quiz.jsx`:

```javascript
<Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.5}
  speed={1.0}
/>
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [OGL](https://github.com/oframe/ogl)

---

Made with ❤️ by NaveedAfraz
