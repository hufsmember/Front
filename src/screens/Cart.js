// Cart.js
import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import styled from "styled-components/native";
import CheckButton from "../components/CheckButton";
import DeleteItem from "../components/DeleteItem";
import WCartItem from "../components/W_CartItem";
import axiosInstance from "../utils/axiosInstance";
import BuyButton from "../components/BuyButton";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        console.log('AccessToken:', token); // 토큰 확인
        const response = await axiosInstance.get("/products/detail", {
          headers: {
            'accessToken': `${token}` // accessToken 헤더 사용
          }
        });
        console.log('API Response:', response.data); // 응답 확인
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
    InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
  });

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  if (!fontsLoaded) {
    return null;
  } else {
    const totalPrice = calculateTotalPrice();

    return (
      <Container>
        <View style={{ flexDirection: "column", padding: 20, gap: 30 }}>
          <Head>
            <View style={{ flexDirection: "row", gap: 28 }}>
              <CheckButton />
              <Num>
                <Text style={{ fontFamily: "Inter", fontSize: 16 }}>
                  전체선택
                </Text>
                <Text style={{ fontFamily: "Inter", fontSize: 16 }}> 1/1</Text>
              </Num>
            </View>
            <DeleteItem />
          </Head>
          {products.length > 0 ? (
            <FlatList
              data={products}
              keyExtractor={(item) => item.productId.toString()}
              renderItem={({ item }) => (
                <WCartItem
                  name={item.productName}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  _onPress={() => {}}
                  tchecked={false}
                />
              )}
            />
          ) : (
            <Text>상품 로딩중.</Text>
          )}
        </View>
        <Receipt>
          <ReceiptList>
            <ReceiptMain>상품금액</ReceiptMain>
            <ReceiptSub>{totalPrice.toLocaleString()}원</ReceiptSub>
          </ReceiptList>
          <ReceiptList>
            <ReceiptMain>상품할인금액</ReceiptMain>
            <ReceiptSub>0원</ReceiptSub>
          </ReceiptList>
          <ReceiptList>
            <ReceiptMain>배송비</ReceiptMain>
            <ReceiptSub>0원</ReceiptSub>
          </ReceiptList>
          <Line />
          <ReceiptList>
            <TotalMain>결제예정금액</TotalMain>
            <TotalMain>{totalPrice.toLocaleString()}원</TotalMain>
          </ReceiptList>
          <BuyButton />
        </Receipt>
      </Container>
    );
  }
};

export default Cart;
