import React, { useState } from "react";
import { StatusBar, Dimensions, TouchableOpacity, Button } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";
import freezer from "../../image/main_freezer.jpeg";
import SeeAllButton from "../components/seeAllButton";
import Temperature from "../components/temperature";
import { AntDesign } from "@expo/vector-icons";
import Navigation from "../navigations";
import MainOpen from "./MainOpen";

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 0px 29px 136px 29px;
  justify-content: center;
  /* gap: 35px; */
  flex-direction: column;
  background-color: #ffffff;
  padding-top: 30px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;
const Body = styled.SafeAreaView`
  flex-direction: column;
  align-items: center;
  gap: 17px;
  justify-content: center;
`;
const Body_image = styled.Image`
  width: 194px;
  height: 328px;
  flex-shrink: 0;
`;

const Temp_Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 45px;
  align-self: stretch;
`;

const Sub = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #a3a3a3;
`;

const MyFamily = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
`;

export default function Home({ navigation }) {
  return (
    <Container>
      <MyFamily>
        <Title>My Family</Title>
        <AntDesign name="right" size={20} color="black" />
      </MyFamily>
      <Body>
        <Body_image source={freezer} />
        <SeeAllButton _onPress={() => navigation.navigate("MainOpen")}>
          식재료 전체 보기
        </SeeAllButton>
        <Temp_Container>
          <Temperature location="냉장실" temp="2"></Temperature>
          <Temperature location="냉동실" temp="-20"></Temperature>
        </Temp_Container>
        <Sub>냉장고를 클릭하시면 더 자세히 내용물을 확인하 실수 있습니다.</Sub>
      </Body>
      <StatusBar style="auto" />
    </Container>
  );
}
