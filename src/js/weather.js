import axios from "axios";
import i18next from "i18next";

export async function getCurrentWeather(location) {
  const apiKey = import.meta.env.VITE_WEATHER_API;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const lang = i18next.language || "en";

  const response = await axios
    .get(`${baseUrl}/current.json`, {
      params: {
        key: apiKey,
        q: location,
        lang,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  return response;
}

export async function getForecastWeather(location, days = 7) {
  const apiKey = import.meta.env.VITE_WEATHER_API;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const lang = i18next.language || "en";
  const response = await axios
    .get(`${baseUrl}/forecast.json`, {
      params: {
        key: apiKey,
        q: location,
        days,
        lang,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
  return response;
}
