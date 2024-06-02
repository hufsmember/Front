import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./Tab";
import { NavigationContainer } from "@react-navigation/native";
import { Home, MainOpen, Shop, Cart } from "../screens";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";
const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#F5F5F5",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: () => {
            const [fontsLoaded] = useFonts({
              Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
              InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
            });

            if (!fontsLoaded) {
              return null;
            } else {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 150,
                  }}
                >
                  <AntDesign name="close" size={18} color="black" />
                  <Text
                    style={{
                      fontFamily: "Inter",
                      fontSize: 16,
                      width: "100%",
                    }}
                  >
                    장바구니
                  </Text>
                </View>
              );
            }
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
