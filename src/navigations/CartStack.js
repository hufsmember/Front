import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./Tab";
import { NavigationContainer } from "@react-navigation/native";
import { Home, MainOpen, Shop, Cart } from "../screens";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default HomeStack;
