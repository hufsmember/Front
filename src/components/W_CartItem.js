// WCartItem.js
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import CheckButton from "./CheckButton";
import CountButton from "./CountButton";
import {
  useFonts,
  Inter_800ExtraBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

const Container = styled.View`
  width: 100%;
  height: 101px;
  flex-direction: row;
  gap: 13px;
  background-color: white;
  padding: 10px;
`;

const Title = styled.Text`
  font-family: "Inter";
  font-size: 14px;
  flex-shrink: 1;
`;

const ItemImage = styled.Image`
  width: 66px;
  height: 68.304px;
`;

const Price = styled.Text`
  font-family: "Inter";
  font-size: 14px;
`;

const Body = styled.View`
  flex-direction: row;
  gap: 13px;
  align-items: center;
`;

const Counts = styled.View`
  flex-direction: column;
  gap: 10px;
`;

const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`;

const Out = styled.TouchableOpacity``;

const WCartItem = ({ name, price, imageUrl, _onPress, tchecked }) => {
  const [checked, setChecked] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
    InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
    Inter_500Medium: require("../../assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Container>
        <CheckButton _onPress={_onPress} tchecked={tchecked} />
        <ItemImage source={{ uri: imageUrl }} />
        <Wrapper>
          <Head>
            <Title>{name}</Title>
            <Out>
              <AntDesign name="close" size={18} color="black" />
            </Out>
          </Head>
          <Body>
            <Counts>
              <Price>{price}원</Price>
              <CountButton />
            </Counts>
          </Body>
        </Wrapper>
      </Container>
    );
  }
};

export default WCartItem;
