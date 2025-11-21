import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import VideoDemo from "./pages/VideoDemo";
import About from "./pages/About";
import GetHelp from "./pages/GetHelp";
import PostCheckoutAccount from "./pages/PostCheckoutAccount";
import NotFound from "./pages/NotFound";
import LandingPages from "./pages/solutions/LandingPages";
import CorporateWebsites from "./pages/solutions/CorporateWebsites";
import Ecommerce from "./pages/solutions/Ecommerce";
import Freelancers from "./pages/for-who/Freelancers";
import Agencies from "./pages/for-who/Agencies";
import Entrepreneurs from "./pages/for-who/Entrepreneurs";
import { LovableToWpRoute } from "./ltw-wp-adapter";

const queryClient = new QueryClient();

type AppProps = {
  basePath?: string;
  componentName?: string;
  routePath?: string;
  pageData?: unknown;
};

const App = ({ basePath = "/", componentName, routePath, pageData }: AppProps) => {
  const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/+$/, "");

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={normalizedBase || undefined}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/video-demo" element={<VideoDemo />} />
              <Route path="/about" element={<About />} />
              <Route path="/get-help" element={<GetHelp />} />
              <Route path="/solutions/landing-pages" element={<LandingPages />} />
              <Route path="/solutions/corporate-websites" element={<CorporateWebsites />} />
              <Route path="/solutions/ecommerce" element={<Ecommerce />} />
              <Route path="/for-who/freelancers" element={<Freelancers />} />
              <Route path="/for-who/agencies" element={<Agencies />} />
              <Route path="/for-who/entrepreneurs" element={<Entrepreneurs />} />
              <Route path="/setup-account" element={<PostCheckoutAccount pageData={pageData} />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route
                path="*"
                element={
                  <LovableToWpRoute
                    fallback={<NotFound />}
                    componentName={componentName}
                    routePath={routePath}
                    pageData={pageData}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
