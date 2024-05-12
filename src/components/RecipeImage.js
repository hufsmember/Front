import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import Navigation from "../navigations";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: column;
`;
const FoodImage = styled.Image`
  width: 135.946px;
  height: 175px;
`;

const FoodName = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

const TitleView = styled.View`
  flex-direction: row;
  gap: 14px;
`;

const RecipeImage = ({ foodimg, name }) => {
  return (
    <Container>
      <FoodImage source={foodimg} />
      <TitleView>
        <FoodName>{name}</FoodName>
        <AntDesign name="hearto" size={16} color="black" />
      </TitleView>
    </Container>
  );
};

export default RecipeImage;
