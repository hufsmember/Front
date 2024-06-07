import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter";

const Delete = styled.TouchableOpacity`
  width: 53.518px;
  height: 15.696px;
  border-width: 1px;
  border-color: #063460;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
`;

const DeleteItem = () => {
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
    InterB: require("../../assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Delete>
        <Text style={{ fontSize: 10 }}>전체삭제</Text>
      </Delete>
    );
  }
};

export default DeleteItem;
