import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

declare global {
  interface Window {
    __FUSION_BASE_PATH__?: string;
    __FUSION_COMPONENT__?: string;
    __FUSION_ROUTE_PATH__?: string;
    __LTW_PAGE_DATA__?: unknown;
  }
}

const basePath = window.__FUSION_BASE_PATH__ ?? "/";
const componentName = window.__FUSION_COMPONENT__;
const routePath = window.__FUSION_ROUTE_PATH__;
const pageData = window.__LTW_PAGE_DATA__;

createRoot(document.getElementById("root")!).render(
  <App
    basePath={basePath}
    componentName={componentName}
    routePath={routePath}
    pageData={pageData}
  />
);
