import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, MainOpen, Shop, Cart } from "../screens";

const Stack = createStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Shop" component={Shop} />
    </Stack.Navigator>
  );
};

export default ShopStack;
