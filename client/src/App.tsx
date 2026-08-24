/** Saffron Field Notes: app shell stays quiet so the almanac content remains the visual focus. */
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import SiteShell from "./components/SiteShell";

const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const FestivalDetail = lazy(() => import("./pages/FestivalDetail"));
const Guide = lazy(() => import("./pages/Guide"));
const Timeline = lazy(() => import("./pages/Timeline"));
const Seasons = lazy(() => import("./pages/Seasons"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/festival/:id" component={FestivalDetail} />
      <Route path="/guide" component={Guide} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/seasons" component={Seasons} />
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
          <SiteShell><Suspense fallback={<div className="route-loader" aria-label="Loading"/>}><Router /></Suspense></SiteShell>
        </LocaleProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
