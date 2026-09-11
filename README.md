# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project structure

- [`index.html`](./index.html) is the browser entry document. It defines the document metadata, loads the favicon, provides the `root` element used by React, and loads [`src/main.jsx`](./src/main.jsx).
- [`src/index.css`](./src/index.css) contains global styles, CSS variables, responsive typography, light and dark color themes, and base layout rules for the application root.
- [`src/App.css`](./src/App.css) contains styles for the application components, including the hero section, counter control, next-steps content, and social links.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
