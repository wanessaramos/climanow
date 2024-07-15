import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import {
  Container,
  NavBar,
  Button,
  ScrollContent,
  ButtonContent,
  BottomContent,
  AddCityButton,
  TitleButton,
  ListItems,
  Text,
  Input,
  Scroll,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Context from "../../context";
import { useNavigation, useRoute } from "@react-navigation/native";
import LocationItem from "../../components/LocationItem";
import useDate from "../../util/useDate";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useBackgroundColor from "../../util/useBackgroundColor";
import colors from "../../styles/colors";

const Location = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { state, dispatch } = useContext(Context);
  const { city } = route?.params || {};
  const [citys, setCitys] = useState([]);
  const [newCity, setNewCity] = useState("");
  const { shift } = useDate();
  const size = state.DATA.length;

  useEffect(() => {
    setCitys(state.DATA);
  }, [citys, state, size]);

  const addNewCity = async () => {
    await dispatch({
      type: "ADD",
      payload: `${newCity}`,
    });
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
              <Button onPress={() => navigation.navigate("Home")}>
                <Icon name="chevron-left" size={20} color={colors.snow} />
              </Button>
              <Text>{`${city}`}</Text>
            </ButtonContent>
            {size > 0 && (
              <Button onPress={() => navigation.navigate("Manage", { city })}>
                <Icon name="cog" size={20} color={colors.snow} />
              </Button>
            )}
          </NavBar>
          <ScrollContent>
            <Scroll>
              <ListItems>
                {citys.map((currentCity) => (
                  <LocationItem
                    key={currentCity.id}
                    city={currentCity.name}
                    useCity={() =>
                      navigation.navigate("Home", {
                        cityName: currentCity.name,
                      })
                    }
                  />
                ))}
              </ListItems>
            </Scroll>
            <BottomContent>
              <Input
                placeholder="Digite o nome da cidade"
                onChangeText={setNewCity}
              />

              <AddCityButton onPress={() => addNewCity()}>
                <TitleButton>Adicionar Cidade</TitleButton>
              </AddCityButton>
            </BottomContent>
          </ScrollContent>
        </Container>
      </View>
    </LinearGradient>
  );
};
export default Location;
