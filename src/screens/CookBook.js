import React, { useState, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import axiosInstance from "../utils/axiosInstance";
import RecipeImage from "../components/RecipeImage";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { foods } from "../components/Foods";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: 30px;
  padding-left: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: "InterB";
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
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})`
  flex-direction: row;
`;

const ListWrapper = styled.View`
  margin-bottom: 20px;
`;

const CookBook = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [recipes, setRecipes] = useState([]);
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
    InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axiosInstance.get("/recipes/recommends");
        console.log("API response:", response.data);
        if (response.data.statusCode === 200) {
          setRecipes(response.data.data.slice(0, 10));
        } else {
          console.error("API responded with an error:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error.message);
      }
    };

    fetchRecipes();
  }, []);

  const fridgeRecipes = recipes.slice(0, 5);
  const preferenceRecipes = recipes.slice(5, 10);

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
          <Title>홍길동님을 위한 추천 레시피</Title>
          <ListWrapper>
            <SubTitle>냉장고 기반</SubTitle>
            <Description>냉장고 식재료를 가지고 만들 수 있는 요리</Description>
            <FoodList horizontal>
              {fridgeRecipes.length > 0 ? (
                fridgeRecipes.map((recipe, index) => (
                  <View key={index} style={{ marginRight: 10 }}>
                    <RecipeImage
                      foodimg={{ uri: recipe.imageUrl }}
                      name={recipe.cuisineName}
                      navigation={navigation}
                    />
                  </View>
                ))
              ) : (
                <Text>추천 레시피가 없습니다.</Text>
              )}
            </FoodList>
          </ListWrapper>
          <ListWrapper>
            <SubTitle>선호도 기반</SubTitle>
            <Description>선호도에 따라 추천된 요리</Description>
            <FoodList horizontal>
              {preferenceRecipes.length > 0 ? (
                preferenceRecipes.map((recipe, index) => (
                  <View key={index} style={{ marginRight: 10 }}>
                    <RecipeImage
                      foodimg={{ uri: recipe.imageUrl }}
                      name={recipe.cuisineName}
                      navigation={navigation}
                    />
                  </View>
                ))
              ) : (
                <Text>추천 레시피가 없습니다.</Text>
              )}
            </FoodList>
          </ListWrapper>
          <ListWrapper>
            <SubTitle>선호도 기반</SubTitle>
            <Description>냉장고 식재료를 가지고 만들 수 있는 요리</Description>
            <FoodList horizontal>
              <View style={{ marginRight: 10 }}>
                <RecipeImage
                  foodimg={foods.food3}
                  name="열무비빔국수"
                  navigation={navigation}
                />
              </View>
              <View style={{ marginRight: 10 }}>
                <RecipeImage
                  foodimg={foods.food5}
                  name="통새우전"
                  navigation={navigation}
                />
              </View>
              <View style={{ marginRight: 10 }}>
                <RecipeImage
                  foodimg={foods.food1}
                  name="북엇국"
                  navigation={navigation}
                />
              </View>
              <View style={{ marginRight: 10 }}>
                <RecipeImage
                  foodimg={foods.food1}
                  name="북엇국"
                  navigation={navigation}
                />
              </View>
            </FoodList>
          </ListWrapper>
        </Container>
      </ScrollView>
    );
  }
};

export default CookBook;
