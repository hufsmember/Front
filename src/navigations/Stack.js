import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./Tab";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Stack" component={TabNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
