import React from "react";
import {
  Container,
  TempContent,
  WeatherContent,
  Text,
  Temp,
  Image,
} from "./styles";
import convertTemp from "../../util/convertTemp";
import useImage from "../../util/useImage";

const Weather = ({ temp, description, shift }) => {
  return (
    <Container>
      <WeatherContent>
        <Image source={useImage(description, shift)} />
        <TempContent>
          <Temp>{`${convertTemp(temp)}`}</Temp>
          <Text>ºC</Text>
        </TempContent>
        <Text>{`${description}`}</Text>
      </WeatherContent>
    </Container>
  );
};
export default Weather;
