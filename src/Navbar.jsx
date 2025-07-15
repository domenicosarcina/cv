import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useThemeStore from "./js/themeStore";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./components/ui/LanguageSwithcer";
import { useTranslation } from "react-i18next";
import Weather from "./components/ui/Weather";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginButton from "./components/ui/LoginButton";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./js/firebase";

export default function StickyNavbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProfile = location.pathname === "/profile";
  const [user, setUser] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsub;
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800 transition-colors duration-300">
      <nav className="w-full max-w-9xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 s">
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

        <ul className="hidden md:flex gap-6 text-gray-700 font-bold dark:text-gray-300 items-center justify-center">
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
          <li className="flex items-center justify-center">
            <LanguageSwitcher />
          </li>
          {!user && (
            <li>
              <LoginButton />
            </li>
          )}
          {user && (
            <li className="relative">
              <button
                onClick={() => setOpenDropdown((prev) => !prev)}
                className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                {user.displayName.split(" ")[0]}
                <ChevronDown size={16} />
              </button>

              {openDropdown && (
                <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-md z-50">
                  <li>
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setOpenDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-xl text-gray-600 dark:text-gray-200"
                    >
                      {t("profile")}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        signOut(auth);
                        setOpenDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-xl text-red-600 dark:text-red-400"
                    >
                      {t("logout")}
                    </button>
                  </li>
                </ul>
              )}
            </li>
          )}
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
          {!user && <LoginButton />}
          {user && (
            <div className="mt-4 flex items-center justify-center flex-col">
              <li className="flex items-center justify-center">
                {t("hi")} {user.displayName.split(" ")[0]} 👋
              </li>
              <li className="mt-2">
                <p
                  className="text-gray-600 dark:text-gray-300"
                  onClick={() => {
                    navigate("/profile");
                    setOpenDropdown(false);
                    setOpen(false);
                  }}
                >
                  {t("profile")}
                </p>
              </li>
              <li>
                <p
                  className="text-red-600"
                  onClick={() => {
                    signOut(auth);
                    setOpen(false);
                  }}
                >
                  {t("logout")}
                </p>
              </li>
            </div>
          )}
          <li>
            <Weather mobile={true} />
          </li>
        </ul>
      )}
    </div>
  );
}
