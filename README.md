# Web Programming – Week 4: React

React exercises for Metropolias Web Programming course. The application is built with React and Vite, and the exercises are submitted as separate Git branches.

## Completed exercises

| Branch | Exercise | Implementation |
| --- | --- | --- |
| `first-component` | First Components | `Home` and `MediaRow` components, media listing with `map()`, props and a media table. |
| `state-management` | React State Management | Media selection using `useState`, conditional rendering and the `SingleView` component. |
| `routing` | Routing with React Router | Shared `Layout` with navigation, `Home`, `Profile`, `Upload` and `Single` views, media navigation using `Link` and `useLocation`, and back navigation using `useNavigate`. |

## Published application

Open [the React Routing application](https://users.metropolia.fi/~jonatago/wsk-routing/) to view it in the browser.

## Run locally

Requires Node.js and npm.

```bash
cd react-harjoitus
npm install
npm run dev
```

Open the local address shown in the terminal.

## Production build

The `routing` branch uses a Vite `base` path and React Router `basename` for deployment under the Metropolia user website.

```bash
cd react-harjoitus
npm run build
```

Upload the **contents** of `react-harjoitus/dist/` to `~/public_html/wsk-routing/` on `shell.metropolia.fi`.

## Project structure

```text
web_2026s_week4/
├── README.md
└── react-harjoitus/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── views/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```
