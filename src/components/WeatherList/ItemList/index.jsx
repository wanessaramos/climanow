import React from "react";
import { Container, IconContent, IconText, Content, ItemBox } from "./styles";
import colors from "../../../styles/colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useIcon from "../../../util/useIcon";
const ItemList = ({ item }) => {
  const { day, humidity, tempMax, tempMin, description } = item;

  return (
    <Container>
      <Content>
        <ItemBox>
          <IconText>{day}</IconText>
        </ItemBox>
        <IconContent>
          <Icon name="water" size={16} color={colors.snow} />
          <IconText>{humidity}%</IconText>
        </IconContent>
        <ItemBox>
          <Icon
            name={useIcon(description.morning)}
            size={21}
            color={colors.snow}
          />
        </ItemBox>
        <ItemBox>
          <Icon
            name={useIcon(description.afternoon)}
            size={21}
            color={colors.snow}
          />
        </ItemBox>
        <ItemBox>
          <IconText>{tempMax}º</IconText>
        </ItemBox>
        <ItemBox>
          <IconText>{tempMin}º</IconText>
        </ItemBox>
      </Content>
    </Container>
  );
};
export default ItemList;
