# React Portfolio

React + Vite implementation of the Figma **İkinci Alternatif** design (node `2:15`). It includes responsive sections, Context API theme/language preferences saved to localStorage, static JSON content, and a real Axios POST to JSONPlaceholder's public mock API. The owner's name, portrait, contact details, city, and education are set. Project cards link to three public repositories and verified live sites, with screenshots captured from those sites. Birth date and preferred role remain pending.

## Run

```bash
npm install
npm run dev
```

Run `npm test` and `npm run build` before publishing. GitHub Actions runs both checks on pushes to `main` and pull requests.

Live portfolio: https://react-portfolio-topaz-ten.vercel.app/

Live projects: [Kahve Durağı](https://coffee-app-react.vercel.app/), [Movie Explorer](https://movie-explorer-react-sigma.vercel.app/), [React Login Form](https://login-form-react-indol.vercel.app/).

## Personalize

- Edit `src/data/portfolio.json` for profile details, projects, and links. Empty links are displayed but disabled or omitted.
- Edit `src/data/copy.js` for English and Turkish wording.
- Replace images in `public/assets/` only with the owner's approved assets.

## Mock API

`src/hooks/usePortfolioData.js` shows the local JSON immediately, then loads the external response. `src/services/portfolioApi.js` sends only public project entries to `https://jsonplaceholder.typicode.com/posts` with Axios POST. JSONPlaceholder echoes the request without persisting it. The response is checked against known project IDs, repository URLs, site URLs, and screenshot filenames before it is rendered. If the service is unavailable or the response is invalid, local data stays visible with a retry message. The owner's email and profile details are never included in the POST body. Inspect the request in your browser's Network tab when verifying the integration.

## Structure and accessibility

Each visible section lives in `src/components/`. `App.jsx` passes content into them through props. `src/preferences.jsx` provides global theme and language state, backed by `src/hooks/usePersistentPreference.js`; invalid or blocked localStorage values fall back safely. The page has a keyboard skip link, labelled navigation and controls, visible focus styles, reduced-motion support, and responsive layouts for desktop, tablet, and mobile. The project screenshots are lazy loaded.

## Deployment

The **private** GitHub repository is connected to Vercel with the Vite preset. The build command is `npm run build`, and the output directory is `dist`. The live site is public even though the source repository is private. The three project live URLs are stored in `src/data/portfolio.json`.
