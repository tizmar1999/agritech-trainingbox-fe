# Camera Training Box

A React-based dashboard that displays AI fruit detection results (counts by quality, size, and dominant color) and lets you browse annotated images captured by the camera pipeline.

## Features
- Live fetch of annotated images from the RTL services backend.
- Summary cards for totals, sizes, colors, and quality classes.
- Drill-down page to view a single annotated image with per-shot metrics.
- Responsive Tailwind UI with empty, loading, and error states.
- Basic testing scaffold with React Testing Library.

## Tech Stack
- React 18 (Create React App)
- React Router
- Tailwind CSS
- Axios
- React Testing Library / Jest

## Prerequisites
- Node.js 18+
- npm 9+

## Getting Started
1) Install dependencies  
```bash
npm install
```

2) Configure environment  
Set the backend base URL via `API_URL` (defaults to the provided ngrok endpoint):
```bash
export API_URL="https://your-backend.example.com/api/v1/rtl-services"
```

3) Run the app  
```bash
npm start
```
The app runs on http://localhost:3000.

## Available Scripts
- `npm start` – start dev server with hot reload.
- `npm test` – run unit tests (watch mode).
- `npm run build` – production build in `build/`.

## Project Structure
```
src/
  api/rtlApiClient.js        # Axios instance to talk to RTL backend
  components/                # Reusable UI (cards, dashboard, camera, table, etc.)
  controllers/camera/        # Hooks and services for AI fruit detection
  pages/                     # Route-level components (dashboard, analysis, redirect)
  providers/                 # React context for annotated images
  store/                     # Reducers and initial state
  constants/                 # Config and assets references
```

## Configuration
- `API_URL` (env): base URL for the backend (should point to the root of rtl-services).
- Tailwind config lives in `tailwind.config.js`.

## Testing
```bash
npm test
```
Current smoke test checks header rendering; add scenario tests for data loading, empty states, and error handling as you evolve the UI.

## Deployment
Build and serve the static bundle:
```bash
npm run build
```
Serve the `build/` folder with any static host (Nginx, S3/CloudFront, Vercel, Netlify, etc.).

## Troubleshooting
- **404 on AI endpoints**: ensure `API_URL` does not already include `/api/v1/rtl-services` twice and that your backend allows the origin.
- **Blank dashboard**: check network tab for failing requests; the UI now surfaces an error banner for fetch issues.
- **Tailwind class purging**: avoid dynamic class strings not listed in `tailwind.config.js`; palette for size colors is hard-coded to prevent purging.

## Roadmap Ideas
- Add retry/refresh controls and skeleton loaders.
- Internationalization (EN/IT) and consistent copy.
- Snapshot/RTL tests for cards and table states.
- Deploy pipeline (CI) with lint, test, and build steps.
