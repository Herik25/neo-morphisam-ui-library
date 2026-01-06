# 🎨 Neumorphic UI

> **Beautiful, accessible, and customizable React components with Neumorphic (Soft UI) design.**

[![npm version](https://img.shields.io/npm/v/@harsh2505/neumorphic-ui?style=flat-square&color=indigo)](https://www.npmjs.com/package/@harsh2505/neumorphic-ui)
[![License](https://img.shields.io/npm/l/@harsh2505/neumorphic-ui?style=flat-square&color=blue)](https://github.com/Herik25/neo-morphisam-ui-library/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@harsh2505/neumorphic-ui?style=flat-square&color=orange)](https://www.npmjs.com/package/@harsh2505/neumorphic-ui)

**Neumorphic UI** is a modern React component library that brings the soft, tactile feel of neumorphism to your web applications. Crafted with care and attention to detail, it combines the aesthetic appeal of Soft UI with the robustness of **Base UI** and the flexibility of **Tailwind CSS**.

![Neumorphic UI Banner](https://raw.githubusercontent.com/Herik25/neo-morphisam-ui-library/main/public/banner.png)
_(Note: Replace the above link with an actual screenshot/banner of your library if available)_

## ✨ Features

- **Soft UI Aesthetics**: Pre-configured neumorphic shadows, gradients, and rounded corners for a premium feel.
- **Accessible**: Built on top of [Base UI](https://base-ui.com/) primitives to ensure full WAI-ARIA compliance and keyboard navigation.
- **Dark Mode Ready**: Native support for dark mode with automatic color and shadow adjustments.
- **Fully Typed**: Written in TypeScript to provide excellent developer experience and type safety.
- **Customizable**: Styled with Tailwind CSS, allowing you to easily override styles or adjust the theme variables.

## 🚀 Installation

Install the package via npm, yarn, or pnpm:

```bash
npm install @harsh2505/neumorphic-ui
```

### Peer Dependencies

Ensure you have the necessary peer dependencies installed in your project:

```bash
npm install react react-dom tailwindcss @base-ui/react
```

## 🛠️ Setup

1. **Import Styles**: Import the library's CSS file in your main entry file (e.g., `main.tsx`, `App.tsx`, or `index.tsx`).

   ```tsx
   import "@harsh2505/neumorphic-ui/index.css";
   ```

2. **Tailwind Configuration**: Since this library uses Tailwind CSS, ensure your project is set up to process Tailwind classes.

## 💻 Usage

Import components directly from the package and use them in your React application.

### Button Example

```tsx
import { Button } from "@harsh2505/neumorphic-ui";
import { Play } from "lucide-react";

function PlayerControls() {
  return (
    <div className="flex gap-4 p-8 bg-zinc-200 dark:bg-zinc-900">
      <Button variant="primary" shape="circle" size="icon">
        <Play className="w-4 h-4" />
      </Button>
      <Button>Click Me</Button>
    </div>
  );
}
```

### Card Example

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@harsh2505/neumorphic-ui";

function InfoCard() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Neumorphism</CardTitle>
        <CardDescription>Soft UI Design System</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Neumorphism combines flat design and skeuomorphism. It mimics
          real-world objects with soft shadows and highlights.
        </p>
      </CardContent>
    </Card>
  );
}
```

### Form Controls

```tsx
import { Input, NeuCheckbox, NeuSwitch } from "@harsh2505/neumorphic-ui";

function Settings() {
  return (
    <div className="space-y-6 max-w-xs p-4">
      <Input placeholder="Username" />

      <div className="flex items-center gap-3">
        <NeuCheckbox id="notifications" />
        <label htmlFor="notifications" className="text-sm">
          Enable Notifications
        </label>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Dark Mode</span>
        <NeuSwitch />
      </div>
    </div>
  );
}
```

## 🧩 Available Components

The library includes a growing collection of components:

- **Layout**: `Card`, `Nav`, `Tabs`
- **Inputs**: `Button`, `Input`, `NeuCheckbox`, `NeuSwitch`, `Slider`
- **Feedback**: `NeuProgressBar`, `Badge`

## 🎨 Customization

The library relies on CSS variables for its theming. You can override these variables in your global CSS to match your brand colors.

```css
:root {
  /* Example: Changing the primary color */
  --color-primary: 99 102 241; /* Indigo-500 */

  /* Example: Adjusting the background */
  --color-background: 228 228 231; /* Zinc-200 */
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Herik25">Harsh</a>
</p>
