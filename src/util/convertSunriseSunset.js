export const convertSunriseSunset = (sunriseTimestamp, sunsetTimestamp) => {
  const sunriseDate = new Date(sunriseTimestamp * 1000);
  const sunsetDate = new Date(sunsetTimestamp * 1000);

  const formatTime = (dateObject) => {
    const timeFormat = new Intl.DateTimeFormat("pt-BR", {
      hour: "numeric",
      minute: "numeric",
    });
    return timeFormat.format(dateObject);
  };

  const formattedSunrise = formatTime(sunriseDate);
  const formattedSunset = formatTime(sunsetDate);

  return { formattedSunrise, formattedSunset };
};
