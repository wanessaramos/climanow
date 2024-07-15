import React from "react";
import {
  Container,
  LocationContent,
  WeatherContent,
  WeatherItem,
  TextWeather,
  Text,
  City,
} from "./styles";
import colors from "../../styles/colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useIcon from "../../util/useIcon";
import useDate from "../../util/useDate";
import useWeather from "../../util/useWeather";
import useGeolocation from "../../util/useGeolocation";
import convertTemp from "../../util/convertTemp";

const LocationItem = ({ city, useCity }) => {
  const { lat, lon } = useGeolocation();
  const { date, time, shift } = useDate();
  const { temp, temp_min, temp_max, description } = useWeather(lat, lon, city);

  return (
    <Container onPress={() => useCity(city)}>
      <LocationContent>
        <City>{`${city}`}</City>
        <Text>{`${date} ${time}`}</Text>
      </LocationContent>
      <WeatherContent>
        <WeatherItem>
          <Icon
            name={useIcon(description, shift)}
            size={18}
            color={colors.snow}
          />
          <TextWeather>{`${convertTemp(temp)}°`}</TextWeather>
        </WeatherItem>
        <Text>{`${convertTemp(temp_max)}° / ${convertTemp(temp_min)}°`}</Text>
      </WeatherContent>
    </Container>
  );
};
export default LocationItem;
