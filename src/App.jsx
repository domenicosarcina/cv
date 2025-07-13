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

function App() {
  const { darkMode, setDarkMode } = useThemeStore();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setDarkMode(darkMode); // Applica classe alla root
  }, []);

  return (
    <>
      <StickyNavbar />
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
