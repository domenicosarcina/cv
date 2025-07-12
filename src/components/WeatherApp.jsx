import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCurrentWeather, getForecastWeather } from "../js/weather";
import { useTranslation } from "react-i18next";

export default function WeatherApp() {
  const [inputValue, setInputValue] = React.useState("Barletta");
  const [searchedCity, setSearchedCity] = React.useState("Barletta");
  const { t } = useTranslation();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["weather", searchedCity],
    queryFn: () => getCurrentWeather(searchedCity),
    enabled: !!searchedCity,
  });

  const {
    data: forecastData,
    isLoading: isForecastLoading,
    isError: isForecastError,
    error: forecastError,
  } = useQuery({
    queryKey: ["forecast", searchedCity],
    queryFn: () => getForecastWeather(searchedCity, 7),
    enabled: !!searchedCity,
  });

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen w-full py-8 bg-gradient-to-br from-blue-200 via-blue-100 to-cyan-200 dark:from-blue-900 dark:via-gray-800 dark:to-blue-800 transition-colors duration-300"
    >
      <div
        className="relative flex flex-col items-center justify-center w-full max-w-4xl border-2 border-blue-200 dark:border-blue-700 rounded-3xl p-8 shadow-2xl overflow-hidden
    bg-[#e0e7ff] dark:bg-[#1e293b]"
        style={{
          boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.18)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/60 dark:bg-blue-900/40 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/40 dark:bg-blue-800/40 rounded-full blur-3xl z-0"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-cyan-100/60 dark:bg-cyan-900/40 rounded-full blur-xl z-0"></div>

        <h1 className="relative z-10 text-4xl font-extrabold mb-6 text-blue-700 dark:text-blue-00 drop-shadow-lg tracking-tight flex items-center gap-2">
          <span role="img" aria-label="cloud" className="text-5xl">
            ☁️
          </span>
          {t("weatherAppTitle")}
        </h1>
        <div className="relative z-10 flex w-full gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-3 border-2 border-blue-200 dark:border-blue-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 bg-white/80 dark:bg-gray-900/60 text-lg transition"
            placeholder={t("weatherSearchPlaceholder")}
          />
          <button
            onClick={() => setSearchedCity(inputValue)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-700 dark:to-cyan-600 text-white font-semibold rounded-r-xl hover:from-blue-600 hover:to-cyan-500 dark:hover:from-blue-800 dark:hover:to-cyan-700 transition-all shadow"
          >
            {t("weatherSearchButton")}
          </button>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
          {isLoading && (
            <div className="text-blue-600 dark:text-blue-300 font-medium animate-pulse">
              {t("weatherLoading")}
            </div>
          )}
          {isError && (
            <div className="text-red-500 dark:text-red-400 font-semibold">
              {t("weatherError")}: {error.message}
            </div>
          )}
          {data && (
            <div className="flex flex-col items-center gap-2 mt-2">
              <div className="flex items-center gap-3">
                <img
                  src={data.current.condition.icon}
                  className="w-20 h-20 drop-shadow-lg"
                  alt="Weather icon"
                />
                <span className="text-5xl font-bold text-blue-700 dark:text-blue-200 drop-shadow">
                  {data.current.temp_c}°C
                </span>
              </div>
              <p className="text-xl font-semibold text-blue-800 dark:text-blue-100">
                {data.current.condition.text}
              </p>
              <p className="text-base text-blue-600 dark:text-blue-300">
                {data.location.name}, {data.location.country}
              </p>
              <div className="flex gap-4 mt-2 text-sm text-blue-700 dark:text-blue-200">
                <span>💧 {data.current.humidity}%</span>
                <span>🌬 {data.current.wind_kph} km/h</span>
                <span>
                  🌡 {t("weatherFeelsLike")} {data.current.feelslike_c}°C
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="relative z-10 w-full mt-8">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-4 text-center">
            {t("weatherPrevisionTitle")}
          </h2>
          {isForecastLoading && (
            <div className="text-blue-600 dark:text-blue-300 font-medium animate-pulse text-center">
              {t("weatherLoading")}
            </div>
          )}
          {isForecastError && (
            <div className="text-red-500 dark:text-red-400 font-semibold text-center">
              {t("weatherError")}: {forecastError.message}
            </div>
          )}
          {forecastData && forecastData.forecast && (
            <div className="w-full overflow-x-auto">
              <div className="flex flex-row gap-4 min-w-[700px]">
                {forecastData.forecast.forecastday.map((day) => (
                  <div
                    key={day.date}
                    className="flex flex-col items-center bg-white/70 dark:bg-blue-900/60 rounded-xl p-3 shadow transition min-w-[100px]"
                  >
                    <span className="font-semibold text-blue-700 dark:text-blue-200 text-sm">
                      {new Date(day.date).toLocaleDateString(undefined, {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                    <img
                      src={day.day.condition.icon}
                      alt={day.day.condition.text}
                      className="w-12 h-12 my-1"
                    />
                    <span className="font-medium text-blue-700 dark:text-blue-200 text-sm">
                      {day.day.maxtemp_c}° {day.day.mintemp_c}°
                    </span>
                    <span className="text-xs text-blue-600 dark:text-blue-300 text-center">
                      {day.day.condition.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
