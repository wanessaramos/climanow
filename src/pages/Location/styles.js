import styled from "styled-components";
import colors from "../../styles/colors";
import fontSize from "../../styles/fontSize";
import { TextInput, ScrollView } from "react-native";

export const Input = styled(TextInput).attrs({
  placeholderTextColor: colors.white,
  cursorColor: colors.white,
})`
  width: 90%;
  font-size: ${fontSize.regular}px;
  padding: 5px 5px 5px 15px;
  color: ${colors.white};
  background: ${colors.light};
  border-radius: 15px;
  height: 52px;
  margin: 10px;
`;

export const Scroll = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  padding: 0;
  margin-bottom: 10px;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const ListItems = styled.View`
  align-items: center;
  flex-direction: center;
`;

export const ScrollContent = styled.SafeAreaView`
  width: 100%;
  height: 95%;
  margin-top: 40px;
`;

export const NavBar = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${colors.snow};
  font-size: ${fontSize.regular}px;
`;

export const Button = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const AddCityButton = styled.TouchableOpacity`
  width: 90%;
  border-radius: 10px;
  padding: 10px;
  flex-direction: row;
  background: ${colors.transparent};
  align-items: center;
  justify-content: center;
`;

export const TitleButton = styled.Text`
  padding-left: 5px;
  color: ${colors.snow};
  font-size: ${fontSize.regular}px;
`;

export const BottomContent = styled.View`
  padding: 10px 0 20px 0;
  width: 100%;
  align-items: center;
  flex-direction: center;
  background: ${colors.transparent};
`;
