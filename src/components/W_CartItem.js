import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
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
import Pork from "../../image/image.png";
const Container = styled.View`
  width: 100%;
  height: 101px;
  flex-direction: row;
  gap: 13px;
  background-color: white;
`;
const Title = styled.Text`
  font-family: Inter;
  font-size: 11.689px;
`;

const ItemImage = styled.Image`
  width: 66px;
  height: 68.304px;
`;

const Price = styled.Text`
  font-family: Inter;
  font-size: 12.524px;
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
  gap: 17px;
`;

const Wrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`;

const Out = styled.TouchableOpacity``;
const WCartItem = ({ name, price, _onPress, temp, tchecked }) => {
  const [checked, setchecked] = useState(false);
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
        <CheckButton _onPress={_onPress} tchecked={tchecked}></CheckButton>
        <Wrapper>
          <Head>
            <Title>{name}</Title>
          </Head>
          <Body>
            <ItemImage source={Pork}></ItemImage>
            <Counts>
              <Price>
                {price} {String(temp)}원
              </Price>
              <CountButton></CountButton>
            </Counts>
          </Body>
        </Wrapper>
        <Out>
          <AntDesign name="close" size={18} color="black" />
        </Out>
      </Container>
    );
  }
};

export default WCartItem;
