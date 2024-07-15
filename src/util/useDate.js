import { useEffect, useState } from "react";

export default useDate = () => {
  const locale = "pt-BR";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}`;
  const hour = today.getHours();
  const shift =
    (hour < 6 && hour > 4 && "sunrise") ||
    (hour < 12 && hour > 5 && "morning") ||
    (hour < 17 && hour > 11 && "afternoon") ||
    (hour < 18 && hour > 16 && "sunset") ||
    "night";
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
  });

  return { date, time, shift };
};
