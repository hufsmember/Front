import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import CheckButton from "../components/CheckButton";
import DeleteItem from "../components/DeleteItem";
import WCartItem from "../components/W_CartItem";
import axios from "axios";
import BuyButton from "../components/BuyButton";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";
const Container = styled.ScrollView`
  background-color: #f5f5f5;
  width: 100%;
  height: 80%;
  gap: 43px;
`;
const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Num = styled.View`
  flex-direction: row;
`;
const Receipt = styled.View`
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding: 26px;
  gap: 23px;
`;
const ReceiptList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const ReceiptMain = styled.Text`
  font-family: "Inter";
  font-size: 13px;
`;
const ReceiptSub = styled.Text``;
const TotalMain = styled.Text`
  font-family: "Inter";
  font-size: 20px;
`;
const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;
const Cart = () => {
  // useEffect(() => {
  //   const response = axios.get(
  //     "http://43.200.170.84/fridge/content/1/ingredients/FROZEN/list"
  //   );
  //   console.log(response.data);
  // }, []);
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
    InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Container>
        <View style={{ flexDirection: "column", padding: 20, gap: 30 }}>
          <Head>
            <View style={{ flexDirection: "row", gap: 28 }}>
              <CheckButton></CheckButton>
              <Num>
                <Text style={{ fontFamily: "Inter", fontSize: 16 }}>
                  전체선택
                </Text>
                <Text style={{ fontFamily: "Inter", fontSize: 16 }}> 1/1</Text>
              </Num>
            </View>
            <DeleteItem></DeleteItem>
          </Head>
          <WCartItem></WCartItem>
        </View>
        <Receipt>
          <ReceiptList>
            <ReceiptMain>상품금액</ReceiptMain>
            <ReceiptSub>13,700원</ReceiptSub>
          </ReceiptList>
          <ReceiptList>
            <ReceiptMain>상품할인금액</ReceiptMain>
            <ReceiptSub>0원</ReceiptSub>
          </ReceiptList>
          <ReceiptList>
            <ReceiptMain>배송비</ReceiptMain>
            <ReceiptSub>0원</ReceiptSub>
          </ReceiptList>
          <Line></Line>
          <ReceiptList>
            <TotalMain>결제예정금액</TotalMain>
            <TotalMain>13,700원</TotalMain>
          </ReceiptList>
          <BuyButton></BuyButton>
        </Receipt>
      </Container>
    );
  }
};

export default Cart;
