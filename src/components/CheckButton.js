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

const Container = styled.TouchableOpacity`
  background-color: ${({ alls, checked }) =>
    alls || checked ? "#063460" : "white"};
  border-color: ${({ alls, checked }) =>
    alls || checked ? "#063460" : "gray"};
  border-width: 1px;
  border-radius: 20px;
  width: 20.261px;
  height: 20.261px;
  align-items: center;
  justify-content: center;
`;

const CheckButton = ({ _onPress, alls = false, checked = false }) => {
  return (
    <Container onPress={_onPress} alls={alls} checked={checked}>
      <AntDesign
        name="check"
        size={15}
        color={alls || checked ? "white" : "gray"}
      />
    </Container>
  );
};

export default CheckButton;
