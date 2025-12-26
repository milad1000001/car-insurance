import type { Route } from "../+types/root";

export const links: Route.LinksFunction = () => [
  {
    rel: "preload",
    href: "/fonts/alibaba/Alibaba-Regular.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/alibaba/Alibaba-Bold.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];
