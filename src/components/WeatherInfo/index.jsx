import React from "react";
import { Content, ContentInfo, Title, Text, ItemBox } from "./styles";
import colors from "../../styles/colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useIcon from "../../util/useIcon";
const WeatherInfo = ({ title, name, param }) => {
  return (
    <ContentInfo>
      <Content>
        <ItemBox>
          <Icon name={useIcon(name)} size={16} color={colors.snow} />
        </ItemBox>
        <Title>{title}</Title>
      </Content>
      <Text>{param}</Text>
    </ContentInfo>
  );
};
export default WeatherInfo;
