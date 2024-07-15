import React from "react";
import { Container } from "./styles";
import ItemList from "./ItemList";

const WeatherList = () => {
  const weather = [
    {
      day: "Seg",
      temp: "10",
      tempMax: "12",
      tempMin: "5",
      humidity: "100",
      description: { morning: "granizo", afternoon: "relâmpago" },
    },
    {
      day: "Ter",
      temp: "26",
      tempMax: "27",
      tempMin: "21",
      humidity: "94",
      description: { morning: "neblina", afternoon: "relâmpago" },
    },
    {
      day: "Qua",
      temp: "28",
      tempMax: "25",
      tempMin: "17",
      humidity: "82",
      description: { morning: "neblina", afternoon: "relâmpago" },
    },
    {
      day: "Qui",
      temp: "25",
      tempMax: "26",
      tempMin: "20",
      humidity: "75",
      description: { morning: "chuva", afternoon: "relâmpago" },
    },
    {
      day: "Sex",
      temp: "20",
      tempMax: "24",
      tempMin: "18",
      humidity: "60",
      description: { morning: "chuva", afternoon: "relâmpago" },
    },
  ];
  return (
    <Container>
      {weather.map((item, index) => (
        <ItemList key={index} item={item} />
      ))}
    </Container>
  );
};
export default WeatherList;
