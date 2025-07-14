import React from "react";
import { useForm } from "react-hook-form";
import contactMe from "@/assets/contactMe.png";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_9xvbv6f",
        "template_tp6xrxn",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "l4cAToGDh47u8CaO0"
      )
      .then(
        (result) => {
          console.log(result);
          // Successo
          reset();
        },
        (error) => {
          console.error(error);
          // Errore
          alert("Errore nell'invio del messaggio.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="p-12 bg-gray-100 flex flex-col items-center justify-center dark:bg-gray-800 transition-colors duration-300"
    >
      <h1 className="text-5xl font-bold text-blue-500 pb-8">
        {t("contactTitle")}
      </h1>
      <div className="w-full flex gap-8 flex-row items-center justify-around ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-blue-100 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto dark:bg-blue-900"
        >
          <div className="flex-1 flex flex-col gap-4 justify-center">
            <label className="font-semibold dark:text-white">
              {t("contactFormName")}
              <input
                className="mt-1 p-2 border rounded w-full bg-blue-50 dark:bg-blue-700"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </label>
            <label className="font-semibold dark:text-white">
              {t("contactFormEmail")}
              <input
                className="mt-1 p-2 border rounded w-full bg-blue-50 dark:bg-blue-700"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </label>
            <label className="font-semibold dark:text-white">
              {t("contactFormMessage")}
              <textarea
                className="mt-1 p-2 border rounded w-full bg-blue-50 dark:bg-blue-700"
                rows={4}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition dark:bg-blue-700 hover:dark:bg-blue-800"
            >
              {t("contactFormSubmit")}
            </button>
            {isSubmitSuccessful && (
              <span className="text-green-600 font-semibold text-center">
                {t("contactFormSuccess")}
              </span>
            )}
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              src={contactMe}
              alt="Contact Me"
              className="w-64 h-auto mb-6 rounded-lg hover:scale-110 transition duration-300"
            />
            <div className="flex gap-4 justify-center">
              <Link
                to="mailto:domenicosarcina@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-3xl dark:text-blue-400 hover:dark:text-blue-300"
              >
                <FaEnvelope />
              </Link>
              <Link
                to="https://www.linkedin.com/in/domenico-sarcina/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-3xl dark:text-blue-400 hover:dark:text-blue-300"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="https://github.com/domenicosarcina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-3xl dark:text-blue-400 hover:dark:text-blue-300"
              >
                <FaGithub />
              </Link>
            </div>
            <div className="hover:scale-110 transition duration-300">
              <Link
                className="text-blue-500 "
                to="https://drive.google.com/file/d/15xHaquXkHRSz3bzUtXklZXanDsazJTVO/view?usp=sharing"
                download
                target="_blank"
              >
                <h4 className="font-semibold mt-4 text-blue-500 text-xl dark:text-blue-400 hover:dark:text-blue-300">
                  {t("downloadResume")}
                </h4>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
