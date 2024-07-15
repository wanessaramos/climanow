import styled from "styled-components";
import colors from "../../styles/colors";
import fontSize from "../../styles/fontSize";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const ContentInfo = styled.View`
  width: 48.7%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const City = styled.Text`
  padding-left: 5px;
  color: ${colors.snow};
  font-size: ${fontSize.title}px;
`;

export const GeoLocationContent = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const MapMarker = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
