import type { Route } from "../+types/root";
import { isRouteErrorResponse } from "react-router";

const getError = (error: unknown) => {
  let details = "An unexpected error occurred.";
  if (isRouteErrorResponse(error)) {
    return {
      title: error.status === 404 ? "404" : "Error",
      detail: error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
    }
  }
  if (import.meta.env.DEV && error instanceof Error) {
    return { title: "Oops!", detail: error.message, stack: error.stack };
  }
  return { title: "Oops!", detail: "An unexpected error occurred." };
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const { title, detail, stack } = getError(error);
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{title}</h1>
      <p>{detail}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}