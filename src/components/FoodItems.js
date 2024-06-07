import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import Item from "./Item";
import { ItemIcons } from "./ItemIcons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [item, setItem] = useState([]);
  // const getItem = async () => {
  //   const token = await AsyncStorage.getItem("accessToken");
  //   await axios
  //     .get("http://43.200.170.84/fridge/content/1/ingredients/FROZEN/list", {
  //       headers: {
  //         accesstoken: token,
  //       },
  //     })
  //     .then((response) => {
  //       setItem(response.data);
  //       console.log(item);
  //     });
  // }
  // const token = await AsyncStorage.getItem("accessToken");
  // useEffect(() => {
  //   // const token = AsyncStorage.getItem("accessToken");
  //   axios
  //     .get("http://43.200.170.84/fridge/content/1/ingredients/FROZEN/list", {
  //       headers: {
  //         accesstoken: AsyncStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then(({ response }) => {
  //       console.log(response);
  //       // setItem(response.data);
  //       // console.log(item);
  //       // console.log("시발");
  //     });
  // }, []);
  const getItem = async () => {
    const token = await AsyncStorage.getItem("accessToken");
    const response = await axios.get(
      "http://43.200.170.84/fridge/content/1/ingredients/FROZEN/list",
      {
        headers: {
          accesstoken: token,
        },
      }
    );
    setItem(response.data.data.foods[0]);
    const fName = response.data.data.foods[0].foodName;
    const fUrl = response.data.data.foods[0].imageUrl;
    console.log("시발");
    console.log(response.data.data.foods[0].imageUrl);
  };

  useEffect(() => {
    getItem();
  }, []);

  // useEffect(() => {
  //   setItem(GetItem());
  // }, []);

  return (
    <Container>
      <OneList>
        <Item
          navigatefrom={navigation}
          foodimage={item.imageUrl}
          foodname={item.foodName}
          temp={item.imageUrl}
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
