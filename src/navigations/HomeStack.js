import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MainOpen" component={MainOpen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
