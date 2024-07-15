export default useIcon = (name, shift) => {
  if (
    name === "chuva" ||
    name === "pancadas de chuva" ||
    name === "chuva fraca" ||
    name === "chuva leve" ||
    name === "chuva moderada"
  ) {
    return "weather-pouring";
  } else if (
    name === "névoa" ||
    name === "neblina" ||
    name === "névoa seca" ||
    name === "névoa úmida" ||
    name === "nevoeiro"
  ) {
    return "weather-fog";
  } else if (name === "relâmpago") {
    return "weather-lightning";
  } else if (
    name === "nublado" ||
    name === "parcialmente ensolarado" ||
    name === "poucas nuvens" ||
    name === "sol entre nuvens" ||
    name === "encoberto"
  ) {
    return shift === "morning" || shift === "afternoon"
      ? "weather-partly-cloudy"
      : "weather-night-partly-cloudy";
  } else if (
    name === "nuvens dispersas" ||
    name === "nuvens esparças" ||
    name === "nuvens quebradas" ||
    name === "algumas nuvens"
  ) {
    return "weather-cloudy";
  } else if (name === "sol" || name === "ensolarado" || name === "céu limpo") {
    return shift === "morning" || shift === "afternoon"
      ? "weather-sunny"
      : "weather-night";
  } else if (name === "neve" || name === "geada" || name === "granizo") {
    return "weather-snowy-heavy";
  } else if (name === "temp_max") {
    return "thermometer-plus";
  } else if (name === "temp_min") {
    return "thermometer-minus";
  } else if (name === "pressure") {
    return "arrow-collapse-vertical";
  } else if (name === "wind") {
    return "weather-windy";
  } else if (name === "sunset-sunrise") {
    return "weather-hazy";
  } else if (name === "humidity") {
    return "water";
  } else if (name === "visibility") {
    return "eye";
  } else {
    return "weather-cloudy-alert";
  }
};
