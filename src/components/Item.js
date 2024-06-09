import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styled from "styled-components/native";

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

const ItemImage = styled(Image)`
  width: 56.638px;
  height: 56.638px;
  margin-bottom: 5px; /* 조금 간격을 줍니다. */
  border-radius: 7.02px; /* 이미지도 같은 border-radius를 적용하여 둥근 형태로 만듭니다. */
`;

const FoodName = styled(Text)`
  font-size: 12.286px;
  font-weight: 500;
`;

const OneItem = styled(TouchableOpacity)`
  align-items: center;
`;

const Item = ({ navigatefrom, foodimage, foodname }) => {
  return (
    <Container>
      <OneItem onPress={() =>
        navigatefrom.navigate("FoodDetail", {
          item: foodimage,
          name: foodname
        })}
      >
        <ItemImage source={foodimage} resizeMode="cover" />
        <FoodName>{foodname}</FoodName>
      </OneItem>
    </Container>
  );
};

export default Item;
