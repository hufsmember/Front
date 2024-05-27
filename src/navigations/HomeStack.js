import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  Home,
  MainOpen,
  Shop,
  Cart,
  Freezer_upside,
  Freezer_downside,
  FoodDetail,
} from "../screens";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeStack = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackImage: () => {
          return <Ionicons name="chevron-back" size={24} color="black" />;
        },
        headerRight: () => {
          return (
            <View style={{ flexDirection: "row", gap: 13 }}>
              <FontAwesome6 name="plus" size={24} color="black" />
              <Ionicons name="menu" size={24} color="black" />
            </View>
          );
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="MainOpen"
        component={MainOpen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Upside"
        component={Freezer_upside}
        options={{ headerTitle: "냉동고" }}
      />
      <Stack.Screen
        name="Downside"
        component={Freezer_downside}
        options={{ headerTitle: "냉장고" }}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{ headerTitle: "냉장고" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
