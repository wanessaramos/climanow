import colors from "../styles/colors";

export default useBackgroundColor = (shift) => {
  if (shift === "morning") {
    return colors.morning;
  } else if (shift === "afternoon") {
    return colors.afternoon;
  } else if (shift === "sunset") {
    return colors.sunset;
  } else if (shift === "sunrise") {
    return colors.sunrise;
  } else {
    return colors.night;
  }
};
