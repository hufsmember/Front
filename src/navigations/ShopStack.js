import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, MainOpen, Shop, Cart } from "../screens";
import Logo from "../../image/Grocey.png";
import { MaterialIcons } from "@expo/vector-icons";
import Slider from "react-slick";
import { Ionicons } from "@expo/vector-icons";
import PopUp from "../components/Pop-up";
import ShopTab from "./ShopTab";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
const Stack = createStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: () => {
          return (
            <Image source={Logo} style={{ objectFit: "contain", width: 200 }} />
          );
        },
        headerTitleAlign: "center",
        cardStyle: {
          backgroundColor: "#ffffff",
        },
        headerStyle: {
          backgroundColor: "#F5F5F5",
          height: 80,
        },
        headerRight: () => {
          return (
            <View style={{ flexDirection: "row", gap: 13 }}>
              <MaterialIcons name="search" size={24} color="black" />
              <Ionicons name="menu" size={24} color="black" />
            </View>
          );
        },
      }}
    >
      <Stack.Screen name="Shop" component={Shop} />
    </Stack.Navigator>
  );
};

export default ShopStack;
