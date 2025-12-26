# Vehicle Insurance Inquiry (Frontend)

Single-page app for vehicle insurance inquiry using a Mockoon API.

## Run

1) Install dependencies:
```
npm install
```

2) Start Mockoon:
- Import your Mockoon JSON.
- Run on `http://localhost:3000`.
- Endpoint: `GET /api/inquiry?plate=...`

3) Start the app:
```
npm run dev
```

The app runs at `http://localhost:5173`. Vite proxies `/api` to `http://localhost:3000`.

## Tech Stack

- React Router (SSR) for routing
- Ant Design for UI
- React Query for data fetching and caching
- Orval + OpenAPI for API types and client
- Vite + TypeScript

## Structure

- `src/core/api`: generated API client and query hooks
- `src/core/domain`: business logic (plate normalization, insurance calc, formatting)
- `src/ui/app`: app shell, providers, routes, styles
- `src/ui/app/components`: reusable UI components
- `src/ui/app/pages`: route-level pages

## Principles

- Separate domain logic from UI for clarity and testability.
- Keep API client in `core` and render logic in `ui`.
- Normalize and validate user input before API calls.
- Use React Query for predictable request state.

## Notes

- Plate format is normalized to `##L###-##`.
- Mockoon returns randomized vehicle/owner data.
