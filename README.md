# Web Development Template Repository

A versatile template for creating web applications that can be deployed both as a standard web application or packaged as an Electron desktop application. This template provides a solid foundation with modern tooling, custom UI components, and support for both web and desktop environments.

## 🚀 Features

- **Dual Deployment**: Build for web or desktop using the same codebase
- **Modern Development Environment**:
  - Webpack bundling with separate dev/prod configurations
  - ESLint + Prettier for code quality and formatting
  - Husky + lint-staged for pre-commit hooks
- **Custom UI Components**:
  - Custom dialog boxes and alert popups
  - Custom scrollbars (using smooth-scrollbar)
  - Custom electron title bar for desktop applications
- **Utility Modules**:
  - Local storage management
  - JSON display formatting
  - Cryptography helpers (UUID generation)
  - File system operations (using browser-fs-access)
  - Date manipulation (using date-fns)
  - Download functionality
- **Desktop Application Features**:
  - Electron packaging with Electron Forge
  - Windows, macOS, and Linux support
  - Custom title bar with minimize, maximize, and close buttons
  - Security features with electron fuses
  - Proper window management and external link handling

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (v9 or higher recommended)
- Basic knowledge of JavaScript, HTML, and CSS
- For Electron packaging: platform-specific requirements
  - Windows: Windows 10/11
  - macOS: macOS 10.13 or later
  - Linux: Debian/Ubuntu or similar

## 🛠️ Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd web-dev-template-repo-v2

# Install dependencies
npm install
```

### Development

```bash
# Start the development server (web)
npm run dev

# Start the Electron app in development mode
npm run start:electron
```

The development server will be available at `http://localhost:8080` by default.

### Building

```bash
# Build for web
npm run build

# Package as an Electron app
npm run package

# Create distributable Electron app
npm run make
```

## ✨ Code Quality Tools

This template includes several tools to maintain code quality:

- **ESLint**: JavaScript linting with modern configuration in `eslint.config.mjs`
- **Prettier**: Code formatting with sensible defaults
- **Husky**: Git hooks for pre-commit linting and formatting
- **lint-staged**: Only lint and format files that are being committed

```bash
# Manually run ESLint
npx eslint .

# Manually run Prettier
npx prettier --write .
```

## 📦 Project Structure

```
├── src/                 # Source code
│   ├── fonts/           # Font files (Inter.ttf)
│   ├── icons/           # SVG and other icon assets
│   │   ├── favicon.svg  # Application icon
│   │   ├── favicon.png  # Application icon (PNG)
│   │   └── ...          # UI icons (titlebar, menu, etc.)
│   ├── js/              # JavaScript modules
│   │   ├── core/        # Core functionality
│   │   │   ├── cryptography.js   # UUID generation
│   │   │   ├── displayJSON.js    # JSON formatting
│   │   │   └── storageModule.js  # LocalStorage wrapper
│   │   └── ui/          # UI components and helpers
│   │       ├── black_page.js     # Blank page utility
│   │       ├── custom_popups.js  # Alert and confirm dialogs
│   │       ├── electron_custom_title_bar.js  # Custom window controls
│   │       └── scrollbar.js      # Custom scrollbar implementation
│   ├── index.js         # Main entry point
│   ├── styles.css       # Global styles
│   └── template.html    # HTML template
├── index.js             # Electron main process file
├── preload.js           # Electron preload script for API bridging
├── app.ico              # Application icon for Windows
├── data.json            # Sample data with UUIDs
├── demo.json            # Sample data with simple IDs
├── webpack.common.js    # Common webpack configuration
├── webpack.dev.js       # Development webpack configuration
├── webpack.prod.js      # Production webpack configuration
├── eslint.config.mjs    # ESLint configuration
├── forge.config.js      # Electron Forge configuration
├── LICENSE              # ISC license
└── package.json         # Project dependencies and scripts
```

## 🌐 Web Deployment

This template includes scripts for deploying to GitHub Pages:

```bash
# Create gh-pages branch
npm run deploy:make-branch

# Sync changes to gh-pages branch
npm run deploy:sync-branch

# Build for web
npm run deploy:build-web

# Commit build to gh-pages branch
npm run deploy:commit

# Push to GitHub Pages
npm run deploy:upload
```

These commands handle the entire deployment workflow:

1. Creating a dedicated branch for GitHub Pages
2. Building the production version of your web app
3. Committing the built files to the deployment branch
4. Pushing to GitHub Pages

If you need to delete the GitHub Pages branch and start over:

```bash
npm run deploy:delete-branch
```

## 💻 Desktop App Packaging

The template uses Electron Forge for packaging desktop applications:

```bash
# Create a package
npm run package

# Create distributables for your platform
npm run make
```

Electron Forge will generate platform-specific packages in the `out` directory. The template is configured with the following makers:

- **Squirrel.Windows**: Creates Windows installers (`.exe`)
- **Debian**: Creates Debian packages (`.deb`) for Linux
- **WiX**: Creates Windows installers (`.msi`) - configured in package.json but optional

You can customize the packaging options in `forge.config.js`.

## 🔧 Core Modules

### Storage Module

A wrapper for localStorage with error handling:

```javascript
import StorageManager from "./js/core/storageModule";

const storage = new StorageManager();
storage.setData("key", { data: "value" });
const data = storage.getData("key");
storage.clearAllStorage(); // Clear all localStorage
```

### JSON Display

Format and display JSON data with syntax highlighting:

```javascript
import displayJSON from "./js/core/displayJSON";

// Automatically formats and displays JSON with highlighting
displayJSON({ key: "value", nested: { array: [1, 2, 3] } });
```

### Cryptography

Generate unique identifiers for your application:

```javascript
import generateID from "./js/core/cryptography";

// Generate a new UUID
const newId = generateID(); // e.g., "123e4567-e89b-12d3-a456-426614174000"
```

### UI Components

#### Custom Popups

```javascript
import { showAlert, showConfirm } from "./js/ui/custom_popups";

// Show alert dialog
showAlert(parentDialogReference, "This is an alert message");

// Show confirmation dialog
const result = await showConfirm(
  parentDialogReference,
  "Are you sure you want to delete?",
);
if (result) {
  // User confirmed
}
```

#### Custom Scrollbars

```javascript
import setupScrollbars from "./js/ui/scrollbar";

// Initialize custom scrollbars on elements with class 'scroll-container'
setupScrollbars();
```

#### Custom Electron Title Bar

```javascript
import createTitleBar from "./js/ui/electron_custom_title_bar";

// Create and attach a custom title bar with minimize, maximize, and close buttons
createTitleBar();
```

#### Clear Content

```javascript
import createBlankPage from "./js/ui/black_page";

// Clear the content div
createBlankPage();
```

## 🔌 Electron Integration

The template provides a secure bridge between Electron's main and renderer processes using the contextBridge API:

```javascript
// Available in renderer process as window.electronAPI
window.electronAPI.minimize(); // Minimize the window
window.electronAPI.maximize(); // Toggle maximize/restore
window.electronAPI.close(); // Close the window
window.electronAPI.unmaximize(); // Unmaximize the window
```

This implementation follows Electron security best practices with:

- Context isolation enabled
- Node integration disabled
- Secure IPC communication

## 📄 License

This project is licensed under the [ISC License](LICENSE).

## 📊 Sample Data

The repository includes sample JSON data files that can be used for testing:

- `data.json`: Contains sample data with UUIDs as identifiers
- `demo.json`: Contains sample data with simple string IDs

These files are useful for prototyping and testing the application's data handling capabilities.

## 🛠️ Troubleshooting

### Common Issues

1. **Webpack build fails**
   - Make sure all dependencies are installed correctly with `npm install`
   - Check for syntax errors in your JavaScript files

2. **Electron app doesn't start**
   - Ensure you've run `npm run build` before `npm run start:electron`
   - Check the console for error messages

3. **Icons not displaying**
   - Verify that the SVG/PNG files are in the correct location
   - Check webpack configuration for asset handling

### Development Tips

- Use the `// win.webContents.openDevTools();` line in `index.js` (uncomment it) to enable DevTools for debugging Electron apps
- The template comes with ESLint and Prettier configured to work together - use them!
- The Husky pre-commit hooks ensure code quality - make sure your changes pass linting before committing

## 👥 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this template.

---

© 2025 Pritam Debnath. All rights reserved.
