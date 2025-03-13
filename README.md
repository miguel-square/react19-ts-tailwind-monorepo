# React 19 with TypeScript and Tailwind 4 Monorepo

A modern React 19 monorepo setup using TypeScript, Tailwind CSS 4, pnpm workspaces, and rsbuild.

## Features

- **React 19**: Using the latest React features
- **TypeScript**: Type-safe code with full TypeScript support
- **Tailwind CSS 4**: Modern utility-first CSS framework
- **pnpm Workspaces**: Efficient package management and monorepo setup
- **rsbuild**: Fast and flexible build system
- **Component Library**: Shared UI components with proper workspace setup

## Project Structure

```
my-react-project/
├── package.json
├── pnpm-workspace.yaml
├── packages/
│   ├── ui-lib/         # Shared component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── utils.ts
│   │   │   └── index.ts
│   │   └── ...config files
│   └── app/            # Main application
│       ├── src/
│       │   ├── App.tsx
│       │   └── ...
│       └── ...config files
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (v8+)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:

```bash
pnpm install
```

## Development

### Build the UI library:

```bash
pnpm --filter @my-project/ui-lib build
```

### Start the development server:

```bash
pnpm dev
```

This will run the app in development mode. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Build for production:

```bash
pnpm build
```

## Working with the UI Library

The UI library (`@my-project/ui-lib`) contains reusable components that can be imported into the main app.

To add a new component to the UI library:

1. Create the component in `packages/ui-lib/src/components/`
2. Export it from `packages/ui-lib/src/index.ts`
3. Rebuild the UI library with `pnpm --filter @my-project/ui-lib build`
4. Import it in your app: `import { MyComponent } from '@my-project/ui-lib'`

## Workspace Commands

- `pnpm dev` - Start the app development server
- `pnpm build` - Build the app for production
- `pnpm build:ui` - Build the UI library
- `pnpm build:all` - Build all packages

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.