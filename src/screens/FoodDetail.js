import React, { useState } from "react";
import { StatusBar, Dimensions, View, Text, Image } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";
import Header from "../components/Header";
import IconButton from "../components/IconButton";
import { icons } from "../components/Icon";

export default function FoodDetail() {
  return (
    <View>
      <Header />
    </View>
  );
}
