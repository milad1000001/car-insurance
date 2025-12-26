import { Outlet } from "react-router";
import "./styles/app.css";
export { links } from "./routes/link";
export { Layout } from "./routes/Layout";
export { ErrorBoundary } from "./routes/ErrorBoundary";
import { Providers } from "./providers";
export default function App() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}
