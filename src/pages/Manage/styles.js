import styled from "styled-components";
import colors from "../../styles/colors";
import fontSize from "../../styles/fontSize";
import { TextInput, ScrollView } from "react-native";

export const Input = styled(TextInput).attrs({
  placeholderTextColor: colors.darkgray,
})`
  width: 90%;
  font-size: ${fontSize.regular}px;
  padding: 5px 5px 5px 15px;
  color: ${colors.snow};
  background: ${colors.transparent};
  border-radius: 15px;
  height: 52px;
  margin: 10px;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.View`
  padding: 10px;
  margin-top: 10px;
  width: 90%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  background-color: ${colors.transparent};
`;

export const Button = styled.TouchableOpacity`
  border-radius: 100px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  padding-left: 5px;
  color: ${colors.snow};
  font-size: ${fontSize.regular}px;
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

export const ListItems = styled.View`
  align-items: center;
  flex-direction: center;
`;

export const ScrollContent = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  padding: 10px 0 62px 0;
  align-items: center;
  flex-direction: center;
  margin-top: 60px;
`;

export const Scroll = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  padding: 0;
`;
