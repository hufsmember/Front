import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from "../utils/axiosInstance";
import Item from "./Item";

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const OneList = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
`;



const FoodItems = ({ navigation }) => {
  const [foodList, setFoodList] = useState([]);

  const getFoodList = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      console.log('AccessToken:', token); // 토큰 확인
      const response = await axiosInstance.get("/fridge/content/1/ingredients/REFRIGERATED/list", {
        headers: {
          'accessToken': `${token}` // accessToken 헤더 사용
        }
      });
      console.log('API Response:', response.data); // 응답 데이터 확인
      console.log('Foods:', response.data.data.foods); // foods 배열 확인
      setFoodList(response.data.data.foods); // 데이터 설정
    } catch (error) {
      console.error("에러발생", error.message);
      if (error.response) {
        // 서버가 응답을 반환했지만, status가 2xx가 아님
        console.error("응답 데이터:", error.response.data);
        console.error("응답 상태:", error.response.status);
        console.error("응답 헤더:", error.response.headers);
      } else if (error.request) {
        // 요청이 만들어졌지만, 응답을 받지 못함
        console.error("요청 데이터:", error.request);
      } else {
        // 요청을 만들 때, 다른 오류 발생
        console.error("에러 메시지:", error.message);
      }
    }
  };

  useEffect(() => {
    getFoodList();
  }, []);

  return (
    <Container>
      <FlatList
        data={foodList}
        keyExtractor={(item, index) => index.toString()}
        horizontal = {true}
        renderItem={({ item }) => (
          <OneList>
            <Item
              navigatefrom={navigation}
              foodimage={{ uri: item.imageUrl }}
              foodname={item.foodName}
            />
          </OneList>
        )}
        ListEmptyComponent={<Text>냉장고 로딩중</Text>} 
      />
    </Container>
  );
};

export default FoodItems;
