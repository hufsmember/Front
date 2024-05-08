import React, { useState } from "react";
import { StatusBar, Dimensions } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
