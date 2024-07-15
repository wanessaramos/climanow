import { useState, useEffect } from "react";
import axios from "axios";

export default useWeather = (latitude, longitude, currentCity) => {
  const apiKey = "";
  const [lat, setLat] = useState(-9.4783);
  const [lon, setLon] = useState(-35.8533);
  const [nameCity, setNameCity] = useState("Rio Largo");
  const [apiUrl, setApiUrl] = useState();
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (latitude && longitude && !currentCity) {
      setLat(latitude);
      setLon(longitude);
      setApiUrl(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br`
      );
    } else if (currentCity) {
      setNameCity(currentCity);
      setApiUrl(
        `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}&lang=pt_br`
      );
    }
  }, [lat, lon, apiUrl, latitude, longitude, nameCity, currentCity]);

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setWeatherData(data);
      } catch (error) {
        //console.error("Erro ao obter previsão do tempo:", error);
      }
    }
    getWeather();
  }, [lat, lon, nameCity, currentCity, apiUrl, latitude, longitude]);

  const description = weatherData.weather?.[0]?.description || null;
  const speed = weatherData.wind?.speed || null;
  const temp = weatherData.main?.temp || null;
  const temp_min = weatherData.main?.temp_min || null;
  const temp_max = weatherData.main?.temp_max || null;
  const visibility = weatherData.visibility || null;
  const pressure = weatherData.main?.pressure || null;
  const humidity = weatherData.main?.humidity || null;
  const sunrise = weatherData.sys?.sunrise || null;
  const sunset = weatherData.sys?.sunset || null;
  const city = weatherData.name || null;

  return {
    city,
    description,
    temp,
    temp_max,
    temp_min,
    visibility,
    pressure,
    humidity,
    sunrise,
    sunset,
    speed,
  };
};
