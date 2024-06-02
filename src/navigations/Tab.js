import React, { useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, CookBook, Shop, Cart } from "../screens";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import HomeStack from "./HomeStack";
import CookStack from "./CookStack";
import CartStack from "./CartStack";
import ShopStack from "./ShopStack";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const TabIcon = ({ name, size, color }) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const [label1, setLabel1] = useState(true);
  const [label2, setLabel2] = useState(false);
  const [label3, setLabel3] = useState(false);
  const [label4, setLabel4] = useState(false);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarLabelStyle: styles.label,
      }}
      naviga
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: (props) => {
            setLabel1(props.focused);
            return TabIcon({ ...props, name: "home" });
          },
          tabBarActiveTintColor: "#5B37B7",
          tabBarActiveBackgroundColor: "#DFD7F3",
          tabBarItemStyle: styles.tabItem,
          tabBarLabel: "홈",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CookBook"
        component={CookStack}
        options={{
          tabBarIcon: (props) => {
            setLabel2(props.focused);
            return TabIcon({ ...props, name: "book" });
          },
          tabBarActiveTintColor: "#C9379D",
          tabBarActiveBackgroundColor: "#F6D6EE",
          tabBarItemStyle: styles.tabItem,
          tabBarLabel: "레시피",
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarIcon: (props) => {
            setLabel3(props.focused);
            return TabIcon({
              ...props,
              name: "shopping-bag",
            });
          },
          tabBarActiveTintColor: "#E6A919",
          tabBarActiveBackgroundColor: "#FBEFD3",
          tabBarItemStyle: styles.tabItem,
          tabBarLabel: "장보기",
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartStack}
        options={{
          tabBarIcon: (props) => {
            setLabel4(props.focused);
            return TabIcon({
              ...props,
              name: "shopping-cart",
            });
          },
          tabBarItemStyle: styles.tabItem,
          tabBarActiveTintColor: "#1194AA",
          tabBarActiveBackgroundColor: "#D1EBEF",
          tabBarLabel: "장바구니",
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    height: 100,
    borderTopRightRadius: 21.9,
    borderTopLeftRadius: 21.9,
    position: "fixed",
    borderTopColor: "#DEE5EF",
    borderTopWidth: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  tabItem: {
    width: 50,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 8,
    paddingLeft: 10,
    // backgroundColor: "red",
  },
  label: {
    fontSize: 12,
  },
});
export default TabNav;
