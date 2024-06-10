import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import mascort from "../../image/mascort.png";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CheckButton from "./CheckButton";
import DeleteItem from "./DeleteItem";
import CartItem from "./CartItem";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../utils/axiosInstance';

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
  padding-right: 10px;
  padding-left: 10px;
`;

const Check = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 7px;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

const PopUp = ({ _onPress }) => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState({
    allchecked: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        const response = await axiosInstance.get("/products/detail", {
          headers: {
            'accessToken': `${token}`
          }
        });
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddItem = (item) => {
    // Implement your logic for adding an item
  };

  const handleDeleteItem = (item) => {
    // Implement your logic for deleting an item
  };

  const handleClearItem = (item) => {
    // Implement your logic for clearing an item
  };

  const handleAlls = () => {
    // Implement your logic for handling all items
  };

  const handleChecked = (productID) => {
    // Implement your logic for handling checked items
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: "column", paddingBottom: 25, gap: 10 }}>
        <CartItem
          name={item.productName}
          price={item.price}
          _onPress={() => {
            handleChecked(item.productID);
          
          }}
          imageUrl={item.imageUrl}
          tchecked={item.checked}
        />
        <Line />
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
              <Image source={mascort} />
            </Header>
            <Check>
              <Text style={{ fontSize: 11.5, fontFamily: "Inter" }}>
                식단구성 확인하기
              </Text>
              <Feather name="chevron-right" size={17} color="black" />
            </Check>
          </View>
          <Line />
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              gap: 40,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
              <CheckButton
                _onPress={() => {
                  handleAlls();
                }}
                tchecked={items.allchecked}
              />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontFamily: "InterB" }}>전체선택</Text>
                <Text style={{ fontFamily: "Inter" }}>({products.length})</Text>
              </View>
              <DeleteItem />
            </View>
            {products.length > 0 ? (
              <FlatList
                data={products}
                keyExtractor={(item) => item.productId.toString()}
                renderItem={renderItem}
              />
            ) : (
              <Text>상품 로딩중.</Text>
            )}
          </View>
          
        </Container>
      </All>
    );
  }
};

export default PopUp;
