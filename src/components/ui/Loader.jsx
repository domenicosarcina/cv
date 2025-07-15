// components/ui/Loader.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.5, bounce: 0.4 },
        }}
        className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"
      ></motion.div>
    </div>
  );
}
