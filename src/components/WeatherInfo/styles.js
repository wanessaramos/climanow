import styled from "styled-components";
import colors from "../../styles/colors";
import fontSize from "../../styles/fontSize";

export const ContentInfo = styled.View`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background: ${colors.transparent};
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemBox = styled.View`
  align-items: center;
  padding-right: 10px;
`;

export const Text = styled.Text`
  color: ${colors.snow};
  font-size: ${fontSize.regular}px;
`;

export const Title = styled.Text`
  color: ${colors.snow};
  font-size: ${fontSize.small}px;
`;
