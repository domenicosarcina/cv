import heroImage from "@/assets/heroNew.png";
import RotatingText from "../ui/RoatingText";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScatterName from "../ui/ScatterName";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center gap-12 min-h-screen w-full px-4 py-8 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-blue-900 dark:via-gray-800 dark:to-blue-800 transition-colors duration-300"
    >
      <motion.div
        className="relative flex flex-col items-center justify-center w-full md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-800 rounded-full blur-2xl opacity-60 animate-pulse"
          style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}
        ></div>

        <motion.div
          className="rounded-full bg-white dark:bg-blue-900 shadow-2xl p-2 md:p-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={heroImage}
            alt="hero"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-300 dark:border-blue-700 shadow-lg"
          />
        </motion.div>

        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <SocialIcon
            href="https://www.linkedin.com/in/domenico-sarcina/"
            label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://github.com/domenicosarcina" label="GitHub">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="mailto:domenicosarcina562@gmail.com" label="Email">
            <FaEnvelope />
          </SocialIcon>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-300 mb-2 drop-shadow">
          {t("heroTitle")}{" "}
          <motion.span className="text-blue-500 dark:text-blue-400">
            <ScatterName text={t("heroName")} />
          </motion.span>
        </h1>

        <div className="mb-4">
          <RotatingText />
        </div>

        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-6 max-w-xl leading-relaxed">
          <span className="bg-blue-200/60 dark:bg-blue-800/60 px-2 py-1 rounded">
            {t("heroSubtitle")}
          </span>
          <br />
          {t("heroDescription1")}
          <span className="font-semibold text-blue-500">
            {t("heroDescription1b")}
          </span>
          <br />
          {t("heroDescription2")}
          <span className="font-semibold text-blue-500">
            {t("heroDescription2b")}
          </span>
          {t("heroDescription3")}
          <span className="font-semibold text-blue-500">
            {t("heroDescription3b")}
          </span>
          {t("heroDescription4")}
          <span className="font-semibold text-blue-500">
            {t("heroDescription4b")}
          </span>
          {t("heroDescription5")}
        </p>

        <motion.div
          className="flex justify-center md:justify-start w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="#contact">
            <button className="p-3 px-8 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full text-lg font-bold text-white shadow-lg hover:from-blue-600 hover:to-blue-500 transition-all duration-300">
              {t("contact")}
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-300 text-3xl"
      whileHover={{ scale: 1.25 }}
      transition={{ type: "spring", stiffness: 300 }}
      aria-label={label}
    >
      {children}
    </motion.a>
  );
}
