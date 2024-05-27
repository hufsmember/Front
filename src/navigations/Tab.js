import React, { useContext, useEffect } from "react";
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
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarLabelStyle: styles.label,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: "home" });
          },
          tabBarActiveTintColor: "#5B37B7",
          tabBarActiveBackgroundColor: "#DFD7F3",
          tabBarItemStyle: styles.tabItem,
          tabBarLabel: "홈",
        }}
      />
      <Tab.Screen
        name="CookBook"
        component={CookStack}
        options={{
          tabBarIcon: (props) => {
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

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    height: 90.434,
    borderTopRightRadius: 21.9,
    borderTopLeftRadius: 21.9,
    position: "fixed",
    borderTopColor: "#DEE5EF",
    borderTopWidth: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  tabItem: {
    width: 100.173,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  label: {
    fontSize: 13,
  },
});
export default TabNav;
