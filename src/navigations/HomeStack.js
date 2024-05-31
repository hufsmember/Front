import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import {
  Home,
  MainOpen,
  Shop,
  Cart,
  Freezer_upside,
  Freezer_downside,
  FoodDetail,
} from "../screens";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeStack = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackImage: () => {
          return <Ionicons name="chevron-back" size={24} color="black" />;
        },
        headerRight: () => {
          return (
            <View style={{ flexDirection: "row", gap: 13, paddingRight: 15 }}>
              <FontAwesome6 name="plus" size={24} color="black" />
              <Ionicons name="menu" size={24} color="black" />
            </View>
          );
        },
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: {
          fontFamily: "Inter",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerStyle: {
            height: 100,
          },
          headerTitle: () => {
            const [fontsLoaded] = useFonts({
              Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
              InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
            });

            if (!fontsLoaded) {
              return null;
            } else {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Inter",
                      fontSize: 24,
                      paddingLeft: 20,
                    }}
                  >
                    My Family
                  </Text>
                  <Feather name="chevron-right" size={24} color="black" />
                </TouchableOpacity>
              );
            }
          },
        }}
      />
      <Stack.Screen
        name="MainOpen"
        component={MainOpen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Upside"
        component={Freezer_upside}
        options={{ headerTitle: "냉동고" }}
      />
      <Stack.Screen
        name="Downside"
        component={Freezer_downside}
        options={{ headerTitle: "냉장고" }}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{ headerTitle: "냉장고" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
