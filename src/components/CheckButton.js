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
  background-color: ${({ checked, alls }) =>
    alls || checked ? "#063460" : "white"};
  border-color: ${({ checked, alls }) =>
    alls || checked ? "#063460" : "gray"};
  border-width: 1px;
  border-radius: 20px;
  width: 20.261px;
  height: 20.261px;
  align-items: center;
  justify-content: center;
`;

const CheckButton = ({ _onPress, checked, alls = false }) => {
  return (
    <Container onPress={_onPress} checked={checked} alls={alls}>
      <AntDesign
        name="check"
        size={15}
        color={alls || checked ? "white" : "gray"}
      />
    </Container>
  );
};

export default CheckButton;
