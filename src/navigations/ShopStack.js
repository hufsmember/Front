import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, MainOpen, Shop, Cart } from "../screens";
import Logo from "../../assets/logo.png";
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
          return <Image source={Logo} />;
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
      <Stack.Screen name="Shop" component={ShopTab} />
    </Stack.Navigator>
  );
};

export default ShopStack;
