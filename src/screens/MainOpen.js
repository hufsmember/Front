import React, { useState } from "react";
import { StatusBar, Dimensions, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";
import OpenFr from "../components/OpenFr";
import SeeAllButton from "../components/seeAllButton";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background-color: #ffffff;
`;
const Buttons = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  align-self: stretch;
`;

export default function MainOpen({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <Container
      style={{
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <OpenFr fromnavigate={navigation} />
      <Buttons>
        <SeeAllButton>식재료 전체 보기</SeeAllButton>
        <SeeAllButton _onPress={() => navigation.goBack()}>닫기</SeeAllButton>
      </Buttons>
    </Container>
  );
}
