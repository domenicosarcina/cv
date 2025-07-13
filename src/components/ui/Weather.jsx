import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../../js/weather";

export default function Weather({ mobile = false }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["weather", "Barletta"],
    queryFn: () => getCurrentWeather("Barletta"),
  });

  if (isLoading) return <div>Caricamento meteo...</div>;
  if (isError) return <div>Errore: {error.message}</div>;

  if (!data || !data.location || !data.current) {
    return <div>Dati meteo non disponibili</div>;
  }

  return (
    <div
      className={`flex flex-col items-center text-sm ml-4
        ${mobile ? "justify-center mt-4" : "hidden lg:flex lg:flex-row"}`}
    >
      <div
        className={`flex flex-row items-center text-sm ml-4
        ${mobile ? "justify-center mt-4" : "hidden lg:flex"}`}
      >
        <p className="mr-2">
          Currently in {data.location.name}, {data.location.country}
        </p>
        <p>{data.current.temp_c}°C</p>
        <img
          src={data.current.condition.icon}
          className="w-6 h-6 ml-2"
          alt="Weather icon"
        />
      </div>
      <p className="ml-2">Willing to relocate 🌍</p>
    </div>
  );
}
