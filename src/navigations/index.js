import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./Tab";
import StackNav from "./Stack";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
