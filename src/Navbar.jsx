import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useThemeStore from "./js/themeStore";
import { Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./components/ui/LanguageSwithcer";
import { useTranslation } from "react-i18next";
import Weather from "./components/ui/Weather";

export default function StickyNavbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { t } = useTranslation();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800 transition-colors duration-300">
      <nav className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <a href="/#home" className="hover:text-blue-500">
            DS
          </a>
          <Weather />
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} className="md:hidden">
            {darkMode ? (
              <Sun className="text-blue-400" size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
          <LanguageSwitcher />

          <button
            className="md:hidden text-3xl text-blue-600 focus:outline-none dark:text-blue-400 hover:text-blue-500"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-bold dark:text-gray-300 items-center">
          <li>
            <a href="/#home" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/#skills" className="hover:text-blue-500">
              {t("skillsMenu")}
            </a>
          </li>
          <li>
            <a href="/#work" className="hover:text-blue-500">
              {t("jobsMenu")}
            </a>
          </li>
          <li>
            <a href="/#study" className="hover:text-blue-500">
              {t("studiesMenu")}
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:text-blue-500">
              {t("contactMenu")}
            </a>
          </li>
          <li className="flex items-center">
            <button onClick={toggleDarkMode} className="">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
      {open && (
        <ul
          className={`md:hidden flex flex-col gap-4 px-8 pb-4 pt-4 text-gray-700 font-bold bg-white shadow
            absolute left-0 top-[64px] w-full dark:bg-gray-800 dark:text-gray-300
            transition-all duration-300
            ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
          style={{ willChange: "opacity, transform" }}
        >
          <li>
            <a
              href="/#home"
              className="hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              className="hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              {t("skillsMenu")}
            </a>
          </li>
          <li>
            <a
              href="/#work"
              className="hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              {t("jobsMenu")}
            </a>
          </li>
          <li>
            <a
              href="/#study"
              className="hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              {t("studiesMenu")}
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              {t("contactMenu")}
            </a>
          </li>
          <li>
            <Weather mobile={true} />
          </li>
        </ul>
      )}
    </div>
  );
}
