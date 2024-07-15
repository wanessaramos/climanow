import styled from "styled-components";
import colors from "../../styles/colors";
import fontSize from "../../styles/fontSize";

export const Container = styled.View`
  margin-top: 10px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TempContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WeatherContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 40px;
  width: 40px;
`;

export const Temp = styled.Text`
  color: ${colors.snow};
  font-size: ${fontSize.big}px;
`;

export const Text = styled.Text`
  color: ${colors.snow};
  font-size: ${fontSize.regular}px;
`;
