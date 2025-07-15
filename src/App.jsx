import { useEffect, useState } from "react";
import StickyNavbar from "./Navbar";
import Studies from "./components/sections/Studies";
import useThemeStore from "./js/themeStore";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Hero from "./components/sections/Hero";
import Contacts from "./components/sections/Contacts";
import Footer from "./components/sections/Footer";
import Jobs from "./components/sections/Jobs";
import Skills from "./components/sections/Skills";
import Curriculum from "./components/Curriculum";
import { Routes, Route, Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Profile from "./components/Profile";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./js/firebase";
import useUserStore from "./js/userStore";
import { AuthInit } from "./components/AuthInit";

function App() {
  const { darkMode, setDarkMode } = useThemeStore();
  const { scrollYProgress } = useScroll();

  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    setDarkMode(darkMode);
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsub;
  }, [setUser]);

  return (
    <>
      <AuthInit />

      <StickyNavbar />
      <Toaster position="top-center" />
      <div>
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 60,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "#3b82f6",
            zIndex: 40,
          }}
        ></motion.div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
