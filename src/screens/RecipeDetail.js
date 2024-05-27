import React from "react";
import { Text, View, ScrollView } from "react-native";
import Navigation from "../navigations";
import styled from "styled-components/native";
import RecipeInfo from "../components/RecipeInfo";
import RecipeMaterial from "../components/RecipeMaterial";

const Container = styled.View`
  flex: 1;
  gap: 29px;
`;

const RecipeImage = styled.Image`
  width: 100%;
  height: 336px;
`;

const Title = styled.Text`
  font-size: 27px;
  position: absolute;
  font-weight: bold;
  top: 288px;
  left: 13px;
`;

const Wrapper = styled.ScrollView`
  flex: 1;
`;

const Title2 = styled.Text`
  font-size: 27px;
  font-weight: bold;
  top: 288px;
  left: 13px;
`;

const RecipeDetail = ({ route }) => {
  return (
    <Wrapper>
      <Container>
        <RecipeImage source={route.params.recipeImage} />
        <Title>{route.params.recipename}</Title>
        <RecipeInfo></RecipeInfo>
        <RecipeMaterial></RecipeMaterial>
        <Title2>조리법</Title2>
      </Container>
    </Wrapper>
  );
};

export default RecipeDetail;
