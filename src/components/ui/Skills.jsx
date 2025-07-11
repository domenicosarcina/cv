import React from "react";
import {
  DiBitbucket,
  DiCss3,
  DiDatabase,
  DiEclipse,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiJavascript1,
  DiJira,
  DiReact,
} from "react-icons/di";
import { FaConfluence } from "react-icons/fa6";
import { SiConfluence, SiPostman, SiSpringboot } from "react-icons/si";
import Skill from "./Skill";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <div
      id="skills"
      className="p-12 pt-24 pb-24 bg-blue-100 flex flex-col items-center justify-center dark:bg-blue-900 transition-colors duration-300"
    >
      <h1 className="text-5xl font-bold text-blue-500 pb-8 dark:text-blue-400">
        {t("skillsTitle")}
      </h1>
      <h1 className="text-2xl font-semibold text-blue-500 pb-2 dark:text-blue-400">
        {t("skillsSubtitle")}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-6 w-full max-w-5xl mx-auto">
        <Skill text="Java">
          <DiJava />
        </Skill>

        <Skill text="React">
          <DiReact />
        </Skill>
        <Skill text="Html5">
          <DiHtml5 />
        </Skill>
        <Skill text="Javascript">
          <DiJavascript />
        </Skill>
        <Skill text="Csse3">
          <DiCss3 />
        </Skill>
        <Skill text="JSP">
          <DiJava />
        </Skill>
      </div>
      <h1 className="text-2xl font-semibold text-blue-500 pb-2 pt-8 dark:text-blue-400">
        {t("skillsSubtitle2")}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-6 w-full max-w-5xl mx-auto">
        <Skill text="BitBucket">
          <DiBitbucket />
        </Skill>
        <Skill text="Jira">
          <DiJira />
        </Skill>

        <Skill text="Eclipse">
          <DiEclipse />
        </Skill>
        <Skill text="DBVisualizer">
          <DiDatabase />
        </Skill>
        <Skill text="Confluence">
          <SiConfluence />
        </Skill>
      </div>
      <h1 className="text-2xl font-semibold text-blue-500 pb-2 pt-8 dark:text-blue-400">
        {t("skillsSubtitle3")}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-6 w-full max-w-5xl mx-auto">
        <Skill text="SpringBoot">
          <SiSpringboot />
        </Skill>
        <Skill text="Postman">
          <SiPostman />
        </Skill>

        <Skill text="Oracle DB">
          <DiDatabase />
        </Skill>
      </div>
    </div>
  );
}
