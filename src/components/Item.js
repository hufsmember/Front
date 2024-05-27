import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styled from "styled-components/native";
import Navigation from "../navigations";

const Container = styled.View.attrs({
  elevation: 5,
})`
  width: 80.922px;
  height: 81px;
  border-radius: 7.02px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const ItemImage = styled.Image`
  width: 56.638px;
  height: 56.638px;
  position: "absolute";
`;

const FoodName = styled.Text`
  font-size: 12.286px;
  font-weight: 500;
`;

const OneItem = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = ({ navigatefrom, foodimage, foodname }) => {
  return (
    <Container>
      <OneItem
        onPress={() =>
          navigatefrom.navigate("FoodDetail", {
            item: foodimage,
            name: foodname,
          })
        }
      >
        <ItemImage source={foodimage}></ItemImage>
        <FoodName>{foodname}</FoodName>
      </OneItem>
    </Container>
  );
};

export default Item;
