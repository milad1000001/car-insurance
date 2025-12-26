import type { Route } from "./+types/inquiry";
import { Inquiry } from "../pages/inquiry";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Inquiry App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Inquiry />;
}
