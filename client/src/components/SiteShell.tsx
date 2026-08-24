/** Glass Almanac reminder: navigation is intentional and airy; mobile relies on a floating paper-glass dock instead of dense top tabs. */
import { Download, Globe2, Home, Languages, Map, Search } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";

type InstallPromptEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: "accepted" | "dismissed" }> };

const labels = { id: { home: "Hari ini", explore: "Jelajahi", guide: "Panduan", install: "Pasang", installed: "Terpasang" }, en: { home: "Today", explore: "Explore", guide: "Guide", install: "Install", installed: "Installed" } };

function Brand() { return <Link href="/" className="brand-new" aria-label="KA Festivals"><span className="brand-bloom"><i/><i/><i/><i/><b>KA</b></span><span className="brand-lockup"><strong>KA</strong><em>Festivals</em></span></Link>; }

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const { language, toggleLanguage } = useLocale();
  const [location] = useLocation();
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const t = labels[language];
  useEffect(() => { if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => undefined); const handler = (event: Event) => { event.preventDefault(); setInstallPrompt(event as InstallPromptEvent); }; const installedHandler = () => { setInstalled(true); setInstallPrompt(null); }; window.addEventListener("beforeinstallprompt", handler); window.addEventListener("appinstalled", installedHandler); return () => { window.removeEventListener("beforeinstallprompt", handler); window.removeEventListener("appinstalled", installedHandler); }; }, []);
  const install = async () => { if (!installPrompt) return; await installPrompt.prompt(); await installPrompt.userChoice; setInstallPrompt(null); };
  const nav = [{ href: "/", icon: Home, label: t.home }, { href: "/explore", icon: Search, label: t.explore }, { href: "/guide", icon: Map, label: t.guide }];
  return <div className="app-frame"><header className="site-header-new"><Brand/><nav className="desktop-nav">{nav.map(({ href, label }) => <Link key={href} href={href} className={location === href ? "active" : ""}>{label}</Link>)}</nav><div className="header-actions"><button className="language-lens" onClick={toggleLanguage} aria-label={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}><Globe2 size={15}/><span className={language === "id" ? "on" : ""}>ID</span><span className={language === "en" ? "on" : ""}>EN</span><i/></button>{(installPrompt || installed) && <button onClick={install} disabled={installed} className="install-tile"><Download size={16}/><span>{installed ? t.installed : t.install}</span></button>}</div></header><main>{children}</main><nav className="mobile-dock" aria-label="Mobile navigation">{nav.map(({ href, icon: Icon, label }) => <Link key={href} href={href} className={location === href ? "active" : ""}><Icon size={18}/><span>{label}</span></Link>)}</nav></div>;
}
