import { ComponentType } from "react";

type LovableToWpRouteProps = {
  fallback: React.ReactNode;
  componentName?: string;
  routePath?: string;
  pageData?: unknown;
};

export const LovableToWpRoute = ({
  fallback,
  componentName,
  routePath,
  pageData,
}: LovableToWpRouteProps) => {
  // Dynamically load all pages
  const pages = import.meta.glob<{ default: ComponentType<any> }>(
    "./pages/**/*.{tsx,jsx,ts,js}",
    { eager: true }
  );

  let Component: ComponentType<any> | null = null;

  // Try to resolve by component name first
  if (componentName) {
    const normalizedName = componentName.replace(/^(Index|Home)$/, "Index");
    for (const [path, module] of Object.entries(pages)) {
      const fileName = path.split("/").pop()?.replace(/\.(tsx|jsx|ts|js)$/, "");
      if (fileName === normalizedName) {
        Component = module.default;
        break;
      }
    }
  }

  // Try to resolve by route path
  if (!Component && routePath) {
    const pathToComponentMap: Record<string, string> = {
      "/": "Index",
      "/contact": "Contact",
    };

    const componentFileName = pathToComponentMap[routePath];
    if (componentFileName) {
      for (const [path, module] of Object.entries(pages)) {
        const fileName = path.split("/").pop()?.replace(/\.(tsx|jsx|ts|js)$/, "");
        if (fileName === componentFileName) {
          Component = module.default;
          break;
        }
      }
    }
  }

  // Render the component with pageData or fallback
  if (Component) {
    return <Component pageData={pageData} />;
  }

  return <>{fallback}</>;
};
