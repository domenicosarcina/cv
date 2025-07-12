import React from "react";
import unibaLogo from "@/assets/uniba.png";
import itisLogo from "@/assets/itisLogo.png";
import uclmLogo from "@/assets/uclm.png";
import { useTranslation } from "react-i18next";

export default function Studies() {
  const { t } = useTranslation();

  const studies = [
    {
      id: 1,
      school: t("studyTitle1"),
      img: unibaLogo,
      city: t("studyCity1"),
      flag: "🇮🇹",
      date: t("studyDate1"),
      grade: t("studyGrade1"),
    },
    {
      id: 2,
      school: t("studyTitle2"),
      img: uclmLogo,
      city: t("studyCity2"),
      flag: "🇪🇸",
      date: t("studyDate2"),
      grade: t("studyGrade2"),
    },
    {
      id: 3,
      school: t("studyTitle3"),
      img: itisLogo,
      city: t("studyCity3"),
      flag: "🇮🇹",
      date: t("studyDate3"),
      grade: t("studyGrade3"),
    },
  ];

  return (
    <div
      id="study"
      className="p-12 pt-24 bg-blue-100 flex flex-col items-center justify-center dark:bg-blue-900 transition-colors duration-300"
    >
      <h1 className="text-5xl font-bold text-blue-500 pb-8 dark:text-blue-400">
        {t("studiesTitle")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {studies.map((study) => (
          <div
            key={study.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition duration-300 dark:bg-blue-800"
          >
            <div className="text-5xl text-blue-500 mb-4">
              <img
                src={study.img}
                alt="Logo"
                className="w-32 h-32 object-contain rounded-xl bg-white dark:bg-blue-800"
              />
            </div>

            <h3 className="text-xl font-bold text-center mb-0.5 dark:text-gray-200">
              {study.school}
            </h3>

            <h6 className="text-sm font-medium text-center mb-0.5 dark:text-gray-200">
              {study.grade}
            </h6>

            <h6 className="text-sm font-medium text-center mb-0.5 dark:text-gray-200">
              {study.city} {study.flag}
            </h6>
            <h6 className="text-sm font-medium text-center mb-2 dark:text-gray-200">
              {study.date}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}
