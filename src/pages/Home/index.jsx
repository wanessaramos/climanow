import React from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  GeoLocationContent,
  ContentInfo,
  MapMarker,
  City,
  Button,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Weather from "../../components/Weather";
import WeatherList from "../../components/WeatherList";
import WeatherInfo from "../../components/WeatherInfo";
import convertTemp from "../../util/convertTemp";
import useDate from "../../util/useDate";
import { convertSunriseSunset } from "../../util/convertSunriseSunset";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useBackgroundColor from "../../util/useBackgroundColor";
import useWeather from "../../util/useWeather";
import useGeolocation from "../../util/useGeolocation";
import colors from "../../styles/colors";

const Home = () => {
  const { shift } = useDate();
  const navigation = useNavigation();
  const route = useRoute();
  const { cityName } = route?.params || {};
  const { lat, lon } = useGeolocation();

  const {
    description,
    temp,
    temp_max,
    temp_min,
    visibility,
    pressure,
    humidity,
    sunrise,
    sunset,
    speed,
    city,
  } = useWeather(lat, lon, cityName);

  const { formattedSunrise, formattedSunset } = convertSunriseSunset(
    sunrise,
    sunset
  );

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
          <GeoLocationContent>
            <MapMarker>
              <Icon name="map-marker" size={20} color={colors.snow} />
              <City>{`${city}`}</City>
            </MapMarker>
            <Button onPress={() => navigation.navigate("Location", { city })}>
              <Icon name="cog" size={20} color={colors.snow} />
            </Button>
          </GeoLocationContent>
          <Weather
            temp={`${temp}`}
            description={`${description}`}
            shift={`${shift}`}
          />
          <Content>
            <ContentInfo>
              <WeatherInfo
                name="temp_max"
                title="Máxima"
                param={`${convertTemp(temp_max)}°C`}
              />
              <WeatherInfo name="wind" title="Vento" param={`${speed}m/s`} />
              <WeatherInfo
                name="visibility"
                title="Visibilidade"
                param={`${visibility}m`}
              />
            </ContentInfo>

            <ContentInfo>
              <WeatherInfo
                name="pressure"
                title="Pressão"
                param={`${pressure}Pa`}
              />
              <WeatherInfo
                name="temp_min"
                title="Mínima"
                param={`${convertTemp(temp_min)}°C`}
              />
              <WeatherInfo
                name="humidity"
                title="Umidade"
                param={`${humidity}%`}
              />
            </ContentInfo>
          </Content>
          <Content>
            <WeatherInfo
              name="sunset-sunrise"
              title="Nascer do Sol - Por do Sol"
              param={`${formattedSunrise} - ${formattedSunset}`}
            />
          </Content>
          <WeatherList />
        </Container>
      </View>
    </LinearGradient>
  );
};
export default Home;
