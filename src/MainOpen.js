import React, { useState } from "react";
import { StatusBar, Dimensions, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import OpenFr from "./components/OpenFr";
import SeeAllButton from "./components/seeAllButton"

const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    gap: 34px;
    padding: 73px 10px 49px 10px;
    align-items: center;
`
const Buttons = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21px;
    align-self: stretch;


`



export default function MainOpen() {
  return (
  <Container>
      <OpenFr />
      <Buttons>
      <SeeAllButton>식재료 전체 보기</SeeAllButton>
      <SeeAllButton>닫기</SeeAllButton>
      </Buttons>
  </Container>
  );
}


