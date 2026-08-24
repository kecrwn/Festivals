/** Glass Almanac reminder: language selection is a global, spacious interaction that keeps every route readable in Indonesian and English. */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/data/calendar";

type LocaleContextValue = { language: Locale; toggleLanguage: () => void };
const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>(() => (localStorage.getItem("ka-locale") as Locale) || "id");
  useEffect(() => {
    localStorage.setItem("ka-locale", language);
    document.documentElement.lang = language;
    document.title = language === "id" ? "KA Festivals — Kalender Perayaan India & Indonesia" : "KA Festivals — India & Indonesia Festival Calendar";
  }, [language]);
  const value = useMemo(() => ({ language, toggleLanguage: () => setLanguage((current) => current === "id" ? "en" : "id") }), [language]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
