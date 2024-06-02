import React, { useCallback } from "react";
import { Text } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { foods } from "../components/Foods";
import RecipeImage from "../components/RecipeImage";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  gap: 20px;
  padding-top: 30px;
  padding-left: 20px;
`;
const Title = styled.Text`
  font-size: 24px;
`;

const SubTitle = styled.Text`
  color: #053742;
  font-size: 15px;
  font-family: "InterB";
`;

const Description = styled.Text`
  color: #a3a3a3;
  font-size: 12px;
`;

const FoodList = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 23,
  },
})`
  flex-direction: row;
`;

const ListWrapper = styled.View`
  flex-direction: column;
  gap: 13px;
`;

const TextWrapper = styled.View`
  flex-direction: column;
  gap: 4px;
`;
const CookBook = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
    InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ScrollView
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <Container>
          <Text
            style={{ fontFamily: "InterB", fontSize: 23, lineHeight: 29.05 }}
          >
            홍길동님을 위한 추천 레시피
          </Text>
          <ListWrapper>
            <TextWrapper>
              <SubTitle>냉장고 기반</SubTitle>
              <Description>
                냉장고 식재료를 가지고 만들 수 있는 요리
              </Description>
            </TextWrapper>
            <FoodList horizontal>
              <RecipeImage
                foodimg={foods.food1}
                name="북엇국"
                navigation={navigation}
              ></RecipeImage>
              <RecipeImage
                foodimg={foods.food1}
                name="북엇국"
                navigation={navigation}
              ></RecipeImage>
              <RecipeImage
                foodimg={foods.food1}
                name="북엇국"
                navigation={navigation}
              ></RecipeImage>
              <RecipeImage
                foodimg={foods.food1}
                name="북엇국"
                navigation={navigation}
              ></RecipeImage>
            </FoodList>
          </ListWrapper>
          <ListWrapper>
            <SubTitle>선호도 기반</SubTitle>
            <Description>냉장고 식재료를 가지고 만들 수 있는 요리</Description>
            <FoodList horizontal>
              <RecipeImage
                foodimg={foods.food3}
                name="열무비빔국수"
                navigation={navigation}
              ></RecipeImage>
              <RecipeImage
                foodimg={foods.food5}
                name="통새우전"
                navigation={navigation}
              ></RecipeImage>
              <RecipeImage
                foodimg={foods.food1}
                name="북엇국"
                navigation={navigation}
              ></RecipeImage>
              <RecipeImage
                foodimg={foods.food1}
                name="북엇국"
                navigation={navigation}
              ></RecipeImage>
            </FoodList>
          </ListWrapper>
          <ListWrapper>
            <SubTitle>선호도 기반</SubTitle>
            <Description>냉장고 식재료를 가지고 만들 수 있는 요리</Description>
            <FoodList horizontal>
              <RecipeImage
                foodimg={foods.food3}
                name="열무비빔국수"
              ></RecipeImage>
              <RecipeImage foodimg={foods.food5} name="통새우전"></RecipeImage>
              <RecipeImage foodimg={foods.food1} name="북엇국"></RecipeImage>
              <RecipeImage foodimg={foods.food1} name="북엇국"></RecipeImage>
            </FoodList>
          </ListWrapper>
        </Container>
      </ScrollView>
    );
  }
};

export default CookBook;
