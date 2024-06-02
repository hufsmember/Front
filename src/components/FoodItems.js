import React, { useState, useEffect } from "react";
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

const tempList = [
  {
    foodName: "단호박",
    image: "url",
  },
  {
    foodName: "새우",
    image: "url",
  },
];

const FoodItems = ({ navigation }) => {
  // const [item, setItem] = useState(null);
  // const GetItem = async () => {
  //   try {
  //     const response = await axios.get("https://example.com/data");
  //     setItem(response.data);
  //   } catch (error) {
  //     console.error("에러발생", error);
  //   }
  // };
  // useEffect(GetItem());
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
