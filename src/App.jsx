import { useEffect, useState } from "react";
import StickyNavbar from "./Navbar";
import Contacts from "./components/ui/Contacts";
import Footer from "./components/ui/Footer";
import Hero from "./components/ui/Hero";
import Jobs from "./components/ui/Jobs";
import Skills from "./components/ui/Skills";
import Studies from "./components/ui/Studies";
import useThemeStore from "./js/themeStore";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

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
            top: 50,
            left: 0,
            right: 0,
            height: 20,
            originX: 0,
            backgroundColor: "#3b82f6",
          }}
        ></motion.div>
        <Hero />
        <Skills />
        <Jobs />
        <Studies />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
