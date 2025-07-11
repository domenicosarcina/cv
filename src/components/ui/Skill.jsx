import React from "react";
import { motion } from "framer-motion";

export default function Skill({ text, children }) {
  return (
    <motion.div
      drag
      className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-50"
    >
      <p className="text-6xl md:text-7xl lg:text-8xl text-blue-500">
        {children}
      </p>
      <p className="font-bold text-base md:text-lg text-blue-500">{text}</p>
    </motion.div>
  );
}
