import React, { useContext, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, CookBook, Shop, Cart } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./HomeStack";
import CookStack from "./CookStack";
import CartStack from "./CartStack";
import ShopStack from "./ShopStack";

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
          tabBarShowLabel: () => {
            const isFocused = useIsFocused();
            return isFocused;
          },
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="CookBook"
        component={CookStack}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: "home" });
          },
          tabBarActiveTintColor: "#C9379D",
          tabBarActiveBackgroundColor: "#F6D6EE",
          tabBarShowLabel: useIsFocused() ? true : false,
          tabBarItemStyle: styles.tabItem,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: "shopping-bag" });
          },
          tabBarActiveTintColor: "#E6A919",
          tabBarActiveBackgroundColor: "#FBEFD3",
          tabBarItemStyle: styles.tabItem,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartStack}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: "shopping-cart" });
          },
          tabBarItemStyle: styles.tabItem,
          tabBarActiveTintColor: "#1194AA",
          tabBarActiveBackgroundColor: "#D1EBEF",
          tabBarShowLabel: useIsFocused() ? true : false,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    height: 80.434,
    borderTopLeftRadius:21.99,
    borderTopRightRadius:21.99,
    backgroudColor: "red",
    position: "absolute",
    borderTopColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  tabItem: {
    width: 109.173,
    height: 47.457,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default TabNav;
