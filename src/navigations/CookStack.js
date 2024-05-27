import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./Tab";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  Home,
  MainOpen,
  Shop,
  Cart,
  Freezer_upside,
  Freezer_downside,
  FoodDetail,
  CookBook,
  RecipeDetail,
} from "../screens";
import RecipeImage from "../components/RecipeImage";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Stack = createStackNavigator();

const CookStack = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../assets/fonts/Inter-Black.ttf"),
  });
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackImage: () => {
          return <Ionicons name="chevron-back" size={24} color="black" />;
        },
      }}
    >
      <Stack.Screen name="Cook" component={CookBook} />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={{
          headerShown: true,
          headerTitle: "레시피",
          headerTitleStyle: {
            fontWeight: 900,
            fontSize: 24,
          },
          headerStyle: {
            height: 90,
            backgroundColor: "#FCF9F9",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CookStack;
