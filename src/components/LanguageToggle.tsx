"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "th" ? "en" : "th")}
      className="px-3 py-1.5 text-sm font-medium rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
      aria-label="Toggle Language"
    >
      {language === "th" ? "EN" : "TH"}
    </button>
  );
}
