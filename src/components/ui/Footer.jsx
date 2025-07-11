import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-blue-100 py-4 text-center text-blue-700 text-sm dark:bg-blue-900 dark:text-blue-400">
      <p className="mb-2">{t("footerTitle")} </p>© {new Date().getFullYear()}{" "}
      {t("footerText")}
    </footer>
  );
}
