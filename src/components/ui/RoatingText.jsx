import { useEffect, useState } from "react";

const texts = [
  "Full Stack Developer",
  "Basketball Player",
  "Gym Addicted",
  "Runner",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setVisible(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-bold ">
      <div className="text-center">
        <span
          className={`transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          } text-blue-500`}
        >
          {texts[index]}
        </span>
      </div>
    </div>
  );
}
