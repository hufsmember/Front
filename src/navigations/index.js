import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./Tab";
import StackNav from "./Stack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
};

export default Navigation;
