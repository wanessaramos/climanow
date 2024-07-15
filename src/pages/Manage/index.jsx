import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Button,
  Text,
  NavBar,
  ListItems,
  ButtonContent,
  ScrollContent,
  Scroll,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Context from "../../context";
import { useNavigation, useRoute } from "@react-navigation/native";
import useDate from "../../util/useDate";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useBackgroundColor from "../../util/useBackgroundColor";
import colors from "../../styles/colors";

const Manage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { state, dispatch } = useContext(Context);
  const { shift } = useDate();
  const [citys, setCitys] = useState([]);
  const { city } = route?.params || {};

  useEffect(() => {
    setCitys(state.DATA);
  }, [citys, state]);

  const removeCity = async (id) => {
    await dispatch({
      type: "DELETE",
      payload: `${id}`,
    });

    console.log(state.DATA.length);
    if (state.DATA.length === 1) {
      navigation.navigate("Location", { city });
    }
  };

  return (
    <LinearGradient colors={useBackgroundColor(shift)} style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          height: "100%",
          marginTop: 45,
          alignItems: "center",
        }}
      >
        <Container>
          <NavBar>
            <ButtonContent>
              <Button onPress={() => navigation.navigate("Location", { city })}>
                <Icon name="chevron-left" size={20} color={colors.snow} />
              </Button>
              <Text>{`${city}`}</Text>
            </ButtonContent>
          </NavBar>
          <ScrollContent>
            <Scroll>
              <ListItems>
                {citys.map((currentCity) => (
                  <Content key={currentCity.id}>
                    <Text>{currentCity.name}</Text>
                    <Button onPress={() => removeCity(currentCity.id)}>
                      <Icon name="delete" size={20} color={colors.snow} />
                    </Button>
                  </Content>
                ))}
              </ListItems>
            </Scroll>
          </ScrollContent>
        </Container>
      </View>
    </LinearGradient>
  );
};
export default Manage;
