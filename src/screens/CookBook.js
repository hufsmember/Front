import React from "react";
import { Text } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { foods } from "../components/Foods";
import RecipeImage from "../components/RecipeImage";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  gap: 17px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  color: #053742;
  font-size: 14px;
  font-weight: 600;
`;

const Description = styled.Text`
  color: #a3a3a3;
  font-size: 12px;
  font-weight: 500;
`;

const CookBook = () => {
  return (
    <Container>
      <Title>홍길동님을 위한 추천 레시피</Title>
      <SubTitle>냉장고 기반</SubTitle>
      <Description>냉장고 식재료를 가지고 만들 수 있는 요리</Description>
      <RecipeImage foodimg={foods.food1} name="북엇국"></RecipeImage>
      <SubTitle>선호도 기반</SubTitle>
      <Description>냉장고 식재료를 가지고 만들 수 있는 요리</Description>
    </Container>
  );
};

export default CookBook;
