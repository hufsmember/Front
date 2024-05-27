import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import Navigation from "../navigations";
import { AntDesign } from "@expo/vector-icons";

AntDesign.loadFont();

const Container = styled.TouchableOpacity`
  flex-direction: column;
  gap: 7px;
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
  justify-content: space-between;
`;

const Heart = styled.TouchableOpacity``;

const RecipeImage = ({ foodimg, name, navigation }) => {
  const [check, setCheck] = useState(false);
  return (
    <Container
      onPress={() => {
        navigation.navigate("RecipeDetail", {
          recipeImage: foodimg,
          recipename: name,
        });
      }}
    >
      <FoodImage source={foodimg} />
      <TitleView>
        <FoodName>{name}</FoodName>
        <Heart
          onPress={() => {
            setCheck(!check);
          }}
        >
          <AntDesign
            name={check ? "heart" : "hearto"}
            size={16}
            color="black"
          />
        </Heart>
      </TitleView>
    </Container>
  );
};

export default RecipeImage;
