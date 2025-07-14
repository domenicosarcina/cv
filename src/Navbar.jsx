import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useThemeStore from "./js/themeStore";
import { Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./components/ui/LanguageSwithcer";
import { useTranslation } from "react-i18next";
import Weather from "./components/ui/Weather";
import { Link } from "react-router";

export default function StickyNavbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { t } = useTranslation();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800 transition-colors duration-300">
      <nav className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <Link
            to="/"
            className="hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            DS
          </Link>
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
            <Link
              to="/"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("skillsMenu")}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault(); // evita il cambio pagina
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("jobsMenu")}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("study")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("studiesMenu")}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault(); // evita il cambio pagina
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("contactMenu")}
            </Link>
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
            <Link
              to="/"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("skillsMenu")}
            </Link>
          </li>
          <li>
            <Link
              to="/ork"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("jobsMenu")}
            </Link>
          </li>
          <li>
            <Link
              to="/#study"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document
                  .getElementById("study")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("studiesMenu")}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault(); // evita il cambio pagina
                setOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("contactMenu")}
            </Link>
          </li>
          <li>
            <Weather mobile={true} />
          </li>
        </ul>
      )}
    </div>
  );
}
