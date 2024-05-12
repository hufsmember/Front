import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./Tab";
import { NavigationContainer } from "@react-navigation/native";
import { Home, MainOpen, Shop, Cart, CookBook } from "../screens";

const Stack = createStackNavigator();

const CookStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cook" component={CookBook} />
    </Stack.Navigator>
  );
};

export default CookStack;
