import React, { useState, useReducer, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import mascort from "../../image/mascort.png";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CheckButton from "./CheckButton";
import DeleteItem from "./DeleteItem";
import CartItem from "./CartItem";
import { ScrollView } from "react-native-gesture-handler";
import CartReducer from "./CartReducer";
import BuyButton from "../components/BuyButton";
import {
  ADD_TO_CART,
  DELETE_CART,
  CLEAR_CART,
  CHECK_ALL,
  CHECK,
} from "./CartActions";

import Receipt from "./Receipt";

const All = styled.ScrollView`
  border-radius: 10px;
  border: 1px solid #063460;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: auto;
  flex: 1;
  display: flex;
`;

const Container = styled.View`
  background-color: #fcf9f9;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 17px;
  font-family: InterB;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  padding-right: 10px;
  padding-left: 10px;
`;

const Check = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* width: 100%; */
  padding-left: 7px;
`;

const List = styled.View`
  border-color: #000000;
  border-top-width: 1;
  width: 100%;
  flex-direction: column;
`;

const AllCheck = styled.View`
  font-family: Inter;
  font-size: 13.217px;
  flex-direction: row;
  gap: 19px;
  padding-right: 10px;
`;
const Head = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
`;
const Num = styled.View`
  flex-direction: row;
`;
const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

const PopUp = ({ _onPress }) => {
  const [items, dispatch] = useReducer(CartReducer, {
    items: {
      1: {
        productID: 1,
        productName: "제주 1등급 삼겹살 300g(냉장)",
        image: "url",
        price: 12000,
        quantity: 1,
        checked: false,
      },
      2: {
        productID: 2,
        productName: "제주 1등급 삼겹살 300g(냉장)",
        image: "url",
        price: 12000,
        quantity: 1,
        checked: false,
      },
    },
    totalAmount: 0,
    allchecked: false,
  });
  const [num, setnum] = useState(0);
  const [allcheck, setallcheck] = useState(false);
  function handleAddItem(item) {
    dispatch({
      product: item,
      type: ADD_TO_CART,
    });
  }

  function handleDeleteItem(item) {
    dispatch({
      product: item,
      type: DELETE_CART,
    });
  }

  function handleClearItem(item) {
    dispatch({
      product: item,
      type: CLEAR_CART,
    });
  }

  function handleAlls() {
    dispatch({
      type: CHECK_ALL,
    });
  }
  function handleChecked(productID) {
    dispatch({
      type: CHECK,
      productID: productID,
    });
  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: "column", paddingBottom: 25, gap: 10 }}>
        <CartItem
          name={item.productName}
          price={item.price}
          _onPress={() => {
            handleChecked(item.productID);
          }}
          tchecked={item.checked}
        ></CartItem>
        <Line></Line>
      </View>
    );
  };

  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
    InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <All
        style={{
          paddingTop: insets.top + 17,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          height: "100%",
          backgroundColor: "#fcf9f9",
        }}
      >
        <Container>
          <View style={{ flexDirection: "column", paddingLeft: 10 }}>
            <TouchableOpacity onPress={_onPress}>
              <AntDesign
                name="close"
                size={24}
                color="black"
                style={{ paddingLeft: 320 }}
              />
            </TouchableOpacity>
            <Header>
              <Title>홍길동님!{"\n"}그로시가 미리 장을 봐두었어요!</Title>
              <Image source={mascort}></Image>
            </Header>
            <Check>
              <Text style={{ fontSize: 11.5, fontFamily: "Inter" }}>
                식단구성 확인하기
              </Text>
              <Feather name="chevron-right" size={17} color="black" />
            </Check>
          </View>
          <Line></Line>
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              gap: 40,
            }}
          >
            <Head>
              <AllCheck>
                <CheckButton
                  _onPress={() => {
                    handleAlls();
                  }}
                  tchecked={items.allchecked}
                ></CheckButton>
                <Num>
                  <Text style={{ fontFamily: "InterB" }}>전체선택</Text>
                  <Text style={{ fontFamily: "Inter" }}>({num})</Text>
                </Num>
              </AllCheck>
              <DeleteItem></DeleteItem>
            </Head>
            <FlatList
              data={Object.values(items.items)}
              renderItem={renderItem}
              extraData={items.allchecked}
            />
          </View>
          <Receipt></Receipt>
          <BuyButton></BuyButton>
        </Container>
      </All>
    );
  }
};

export default PopUp;
