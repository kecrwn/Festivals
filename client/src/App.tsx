/** Saffron Field Notes: app shell stays quiet so the almanac content remains the visual focus. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import FestivalDetail from "./pages/FestivalDetail";
import Guide from "./pages/Guide";
import NotFound from "./pages/NotFound";
import SiteShell from "./components/SiteShell";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/festival/:id" component={FestivalDetail} />
      <Route path="/guide" component={Guide} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LocaleProvider>
          <TooltipProvider>
            <Toaster />
            <SiteShell><Router /></SiteShell>
          </TooltipProvider>
        </LocaleProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
