import Contact from "./pages/Contact";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Studio from "./pages/Studio";
import Work from "./pages/Work";

export const routers = [
  {
    path: "/",
    name: "home",
    element: <Index />,
  },
  {
    path: "/work",
    name: "work",
    element: <Work />,
  },
  {
    path: "/work/:slug",
    name: "project",
    element: <ProjectDetail />,
  },
  {
    path: "/studio",
    name: "studio",
    element: <Studio />,
  },
  {
    path: "/contact",
    name: "contact",
    element: <Contact />,
  },
  /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
  {
    path: "*",
    name: "404",
    element: <NotFound />,
  },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;
