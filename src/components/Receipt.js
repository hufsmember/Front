import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import CheckButton from "../components/CheckButton";
import DeleteItem from "../components/DeleteItem";
import WCartItem from "../components/W_CartItem";
import axios from "axios";
import BuyButton from "../components/BuyButton";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";

const ReceiptC = styled.View`
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding: 26px;
  gap: 23px;
  width: 100%;
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

const Receipt = () => {
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
    InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ReceiptC>
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
      </ReceiptC>
    );
  }
};

export default Receipt;
