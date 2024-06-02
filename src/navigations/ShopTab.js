import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Temp1 from "../screens/temp1";
import { Shop } from "../screens";
const Tab = createMaterialTopTabNavigator();

const ShopTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Shop" component={Shop}></Tab.Screen>
        <Tab.Screen name="Temp1" component={Temp1}></Tab.Screen>
        <Tab.Screen name="Temp2" component={Temp1}></Tab.Screen>
        <Tab.Screen name="Temp3" component={Temp1}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ShopTab;
