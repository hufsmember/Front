import React, { useState } from "react";
import {
  StatusBar,
  Dimensions,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import ExpirationDate from "../components/ExpirationDate";
import IconButton from "../components/IconButton";
import { icons } from "../components/Icon";
import { ItemIcons } from "../components/ItemIcons";

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #fcf9f9;
`;

const Container = styled.View`
  flex-direction: column;
  padding: 73px 20px 101px 20px;
  gap: 20px;
`;

const FoodImage = styled.Image`
  width: 177px;
  height: 177px;
`;
const Title = styled.Text`
  font-size: 24px;
`;
const Counts = styled.Text`
  font-size: 20px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ExpirationContainer = styled.View`
  width: 110.52px;
  height: 107px;
  border-radius: 28.158px;
  background: rgba(255, 255, 255, 0.7);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BuyDate = styled.View`
  width: 67.445px;
  height: 67.445px;
  background-color: #063460;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 152.47px;
`;

const Date = styled.View`
  width: 81.086px;
  height: 89.422px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 30.313px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: absolute;
  left: 204px;
`;

const BuyDateContainer = styled.View`
  flex-direction: row;
`;

const InfoWrapper = styled.View`
  flex-direction: row;
`;

const RecipeTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

export default function FoodDetail({ route }) {
  const width = Dimensions.get("window").width;
  return (
    <Wrapper>
      <Container>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <ExpirationDate date="12"></ExpirationDate>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FoodImage source={route.params.item} />
        </View>
        <TitleContainer>
          <Title>{route.params.name}</Title>
          <Counts>3 개</Counts>
        </TitleContainer>
        <Line></Line>
        <InfoWrapper>
          <ExpirationContainer>
            <Text style={{ fontSize: 11.263 }}>남은 유통기한</Text>
            <Text style={{ fontSize: 22.526, fontWeight: 600 }}>
              24<Text style={{ fontSize: 11.263 }}> 일</Text>
            </Text>
          </ExpirationContainer>
          <BuyDateContainer>
            <BuyDate>
              <Text style={{ color: "#ffffff", fontSize: 12.125 }}>
                구매날짜
              </Text>
            </BuyDate>
            <Date>
              <Text style={{ fontSize: 12.125 }}>3월</Text>
              <Text style={{ fontSize: 18.188 }}>06</Text>
            </Date>
          </BuyDateContainer>
        </InfoWrapper>
        <RecipeTitle>추천 레시피</RecipeTitle>
      </Container>
    </Wrapper>
  );
}
