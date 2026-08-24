/** Locale state stays explicit so every route can render the same Indonesian-first or English-first interface without relying on CSS state. */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/data/calendar";

type LocaleContextValue = { language: Locale; setLanguage: (language: Locale) => void; toggleLanguage: () => void };
const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>(() => (localStorage.getItem("ka-locale") as Locale) || "id");
  useEffect(() => {
    localStorage.setItem("ka-locale", language);
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage, toggleLanguage: () => setLanguage((current) => current === "id" ? "en" : "id") }), [language]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
