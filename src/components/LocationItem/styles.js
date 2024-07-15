import styled from "styled-components";
import colors from "../../styles/colors";
import fontSize from "../../styles/fontSize";

export const Container = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 10px;
  width: 90%;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  border-radius: 10px;
  background: ${colors.transparent};
`;

export const LocationContent = styled.View`
  width: 70%;
  min-height: 60px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const WeatherContent = styled.View`
  width: 30%;
  min-height: 60px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const WeatherItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const City = styled.Text`
  color: ${colors.snow};
  font-size: ${fontSize.regular}px;
`;

export const Text = styled.Text`
  color: ${colors.snow};
  font-size: ${fontSize.small}px;
`;

export const TextWeather = styled.Text`
  padding-left: 5px;
  color: ${colors.snow};
  font-size: ${fontSize.max}px;
`;
