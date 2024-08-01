import { lazy } from "react";

const HomeRoute = lazy(() => import("../home/HomeRoutes"));

export function ShellRoute() {
  return <HomeRoute />;
}
