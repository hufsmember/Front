import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import Item from "./Item";
import { ItemIcons } from "./ItemIcons";

const Container = styled.View`
  flex: 1;
`;

const OneList = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const FoodItems = ({ navigation }) => {
  return (
    <Container>
      <OneList>
        <Item
          navigatefrom={navigation}
          foodimage={ItemIcons.pumpkin}
          foodname="단호박"
        />
        <Item
          navigatefrom={navigation}
          foodimage={ItemIcons.shrimp}
          foodname="새우"
        />
        <Item
          navigatefrom={navigation}
          foodimage={ItemIcons.squid}
          foodname="오징어"
        />
      </OneList>
    </Container>
  );
};

export default FoodItems;
