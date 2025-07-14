import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useThemeStore from "./js/themeStore";
import { Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./components/ui/LanguageSwithcer";
import { useTranslation } from "react-i18next";
import Weather from "./components/ui/Weather";
import { Link, useLocation } from "react-router-dom";

export default function StickyNavbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800 transition-colors duration-300">
      <nav className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <Link
            to="/"
            className="hover:text-blue-500"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleScroll("home");
              }
            }}
          >
            DS
          </Link>
          <Weather />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="text-blue-400" size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
          <LanguageSwitcher />
          <button
            className="text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-500"
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
                if (isHomePage) {
                  e.preventDefault();
                  handleScroll("home");
                }
              }}
            >
              Home
            </Link>
          </li>
          {isHomePage && (
            <>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("skills");
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
                    e.preventDefault();
                    handleScroll("work");
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
                    handleScroll("study");
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
                    e.preventDefault();
                    handleScroll("contact");
                  }}
                >
                  {t("contactMenu")}
                </Link>
              </li>
            </>
          )}
          <li>
            <button onClick={toggleDarkMode}>
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
          absolute left-0 top-[64px] w-full dark:bg-gray-800 dark:text-gray-300 transition-all duration-300`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-blue-500"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  handleScroll("home");
                }
                setOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          {isHomePage && (
            <>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    handleScroll("skills");
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
                    e.preventDefault();
                    setOpen(false);
                    handleScroll("work");
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
                    setOpen(false);
                    handleScroll("study");
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
                    e.preventDefault();
                    setOpen(false);
                    handleScroll("contact");
                  }}
                >
                  {t("contactMenu")}
                </Link>
              </li>
            </>
          )}
          <li>
            <Weather mobile={true} />
          </li>
        </ul>
      )}
    </div>
  );
}
