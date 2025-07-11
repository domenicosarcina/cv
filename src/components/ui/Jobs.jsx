import React from "react";
import dechit from "@/assets/dechit.png";
import bancobpm from "@/assets/bancobpm.png";
import cse from "@/assets/cseLogo.jpg";
import freelance from "@/assets/freelance.png";
import { motion } from "framer-motion";
import {
  DiAndroid,
  DiBootstrap,
  DiCss3,
  DiDatabase,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiJqueryLogo,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiBitbucket,
  SiConfluence,
  SiEclipseide,
  SiGithub,
  SiHibernate,
  SiIntellijidea,
  SiJira,
  SiPostman,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSaopaulometro,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Jobs() {
  const { t } = useTranslation();

  const workExperiences = [
    {
      id: 1,
      title: t("jobTitle1"),
      description: t("jobDescription1"),
      img: dechit,
      work: "DecHit",
      date: t("jobDate1"),
      icons: [
        <SiSpringboot />,
        <DiHtml5 />,
        <DiCss3 />,
        <DiJavascript />,
        <DiBootstrap />,
        <DiJava />,
        <DiDatabase />,
        <SiHibernate />,
      ],
    },
    {
      id: 2,
      title: t("jobTitle2"),
      description: t("jobDescription2"),
      img: bancobpm,
      work: "Banpo BPM via DecHit",
      date: t("jobDate2"),
      icons: [
        <DiHtml5 />,
        <DiCss3 />,
        <DiJavascript />,
        <DiJava />,
        <DiJqueryLogo />,
      ],
    },
    {
      id: 3,
      title: t("jobTitle3"),
      description: t("jobDescription3"),
      img: bancobpm,
      work: "Banpo BPM via DecHit",
      date: t("jobDate3"),
      icons: [
        <SiSpringboot />,
        <SiHibernate />,
        <SiPostman />,
        <SiIntellijidea />,
        <SiHibernate />,
        <DiDatabase />,
      ],
    },
    {
      id: 4,
      title: t("jobTitle4"),
      description: t("jobDescription4"),
      img: cse,
      work: "CSE via DecHit",
      date: t("jobDate4"),
      icons: [
        <DiHtml5 />,
        <DiCss3 />,
        <DiJavascript />,
        <DiJava />,
        <DiDatabase />,
        <SiEclipseide />,
        <SiBitbucket />,
        <SiConfluence />,
        <SiJira />,
      ],
    },
    {
      id: 5,
      title: t("jobTitle5"),
      description: t("jobDescription5"),
      img: freelance,
      work: t("jobWork5"),
      date: t("jobDate5"),
      icons: [
        <DiHtml5 />,
        <DiCss3 />,
        <DiJavascript />,
        <DiVisualstudio />,
        <SiGithub />,
        <SiReact />,
        <SiTailwindcss />,
        <SiReacthookform />,
        <SiReactquery />,
        <SiReactrouter />,
        <SiRedux />,
      ],
    },
  ];

  return (
    <div
      id="work"
      className="md:p-12 pt-24 bg-gray-100 flex flex-col items-center justify-center dark:bg-gray-800 p-0 transition-colors duration-300"
    >
      <h1 className="text-5xl font-bold text-blue-500 px-8 py-4">
        {t("jobsTitle")}
      </h1>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 text-gray-700 dark:text-gray-300">
        {workExperiences.map((card) => (
          <div
            key={card.id}
            className={`bg-white dark:bg-blue-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition duration-300 max-w-xl w-full mx-auto
      ${card.id === 5 ? "lg:col-span-1 lg:col-start-1 lg:col-end-3" : ""}
    
      `}
            style={card.id === 5 ? { maxWidth: "28rem" } : {}}
          >
            <div className="text-5xl text-blue-500 mb-4">
              <img
                src={card.img}
                alt="Logo"
                className="w-32 h-32 object-contain rounded-xl bg-white dark:bg-blue-800"
              />
            </div>

            <h3 className="text-xl font-bold text-center mb-2">{card.title}</h3>

            <h6 className="text-sm font-medium text-center">{card.date}</h6>
            <h6 className="text-sm font-medium text-center mb-2">
              {card.work}
            </h6>

            <p className="text-gray-600 text-center mb-4 dark:text-gray-300">
              {card.description}
            </p>

            <div className="flex gap-3 text-gray-500 text-xl dark:text-gray-100">
              {card.icons?.map((icon, index) => (
                <span
                  key={index}
                  className="hover:text-blue-500 transition duration-300 dark:text-blue-100 hover:scale-110 "
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
