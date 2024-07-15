export default useImage = (name, shift) => {
  if (
    name === "nublado" ||
    name === "parcialmente ensolarado" ||
    name === "poucas nuvens" ||
    name === "sol entre nuvens" ||
    name === "encoberto"
  ) {
    return shift === "morning" || shift === "afternoon"
      ? require("../assets/cloudy.png")
      : require("../assets/cloudy1.png");
  } else if (
    name === "chuva" ||
    name === "pancadas de chuva" ||
    name === "chuva fraca" ||
    name === "chuva leve" ||
    name === "chuva moderada"
  ) {
    return require("../assets/rain.png");
  } else if (
    name === "nuvens dispersas" ||
    name === "nuvens esparças" ||
    name === "nuvens quebradas" ||
    name === "algumas nuvens"
  ) {
    return require("../assets/clouds.png");
  } else if (name === "sol" || name === "ensolarado" || name === "céu limpo") {
    return shift === "morning" || shift === "afternoon"
      ? require("../assets/sunny.png")
      : require("../assets/sunny1.png");
  } else if (
    name === "névoa" ||
    name === "neblina" ||
    name === "névoa seca" ||
    name === "névoa úmida" ||
    name === "nevoeiro"
  ) {
    return shift === "morning" || shift === "afternoon"
      ? require("../assets/mist.png")
      : require("../assets/mist1.png");
  } else if (name === "tempestade") {
    return require("../assets/storm.png");
  } else if (name === "neve" || name === "geada" || name === "granizo") {
    return require("../assets/snow.png");
  } else {
    return require("../assets/sunny.png");
  }
};
