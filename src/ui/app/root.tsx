import { Outlet } from "react-router";
import "./app.css";
export { links } from "./routes/link";
export { Layout } from "./routes/Layout";
export { ErrorBoundary } from "./routes/ErrorBoundary";

export default function App() {
  return <Outlet />;
}
