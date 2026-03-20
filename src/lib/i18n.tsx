"use client";
import {
  createContext,
  useContext,
  useSyncExternalStore,
  ReactNode,
  useCallback,
} from "react";
import { th, en } from "./dictionaries";

export type Language = "th" | "en";
export type Dictionary = typeof th;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
};

const getSnapshot = () => (localStorage.getItem("language") as Language) || "th";
const getServerSnapshot = () => "th" as Language;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem("language", lang);
    // Dispatch a storage event manually because 'storage' event listener
    // only triggers on other tabs/windows, not the current one.
    window.dispatchEvent(new Event("storage"));
  }, []);

  const dict = language === "en" ? en : th;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
