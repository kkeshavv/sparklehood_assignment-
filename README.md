## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or, if you use yarn:
   ```bash
   yarn install
   ```

### Running the Development Server

Start the development server with:

```bash
npm run dev
```
or
```bash
yarn dev
```

The app will be available at [http://localhost:8080/](http://localhost:8080/) (or the port shown in your terminal).

### Building for Production

To create an optimized production build:

```bash
npm run build
```
or
```bash
yarn build
```

### Additional Notes

- All data is stored in memory and will reset when the page is refreshed.
- No backend or database is required.
- For any issues, please open an issue in this repository.

---

**Framework/Language:**  
- React (with TypeScript)
- Vite (build tool)