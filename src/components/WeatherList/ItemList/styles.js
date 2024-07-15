import styled from "styled-components";
import colors from "../../../styles/colors";
import fontSize from "../../../styles/fontSize";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 10px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
`;

export const IconContent = styled.View`
  width: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconText = styled.Text`
  color: ${colors.snow};
  font-size: ${fontSize.regular}px;
`;

export const ItemBox = styled.View`
  align-items: center;
  width: 50px;
`;
