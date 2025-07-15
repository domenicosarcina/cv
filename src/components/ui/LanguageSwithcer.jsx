import { useTranslation } from "react-i18next";
import { useState } from "react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "🇬🇧" },
    { code: "it", label: "🇮🇹" },
    { code: "es", label: "🇪🇸" },
  ];

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        className="px-3 py-1 rounded bg-blue-100 dark:bg-blue-400 text-blue-700 dark:text-blue-800 font-semibold flex items-center justify-center gap-2"
        onClick={() => setOpen((v) => !v)}
      >
        {current.label}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-14 bg-white dark:bg-blue-900 rounded shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-800 ${
                i18n.language === lang.code ? "" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
