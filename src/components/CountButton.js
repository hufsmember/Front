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
const Container = styled.View`
  flex-direction: row;
  width: 105px;
  height: 23px;
  gap: 18px;
  align-items: center;
  background-color: transparent;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: 4px;
`;
const UpDownButton = styled.TouchableOpacity`
  width: 30px;
  border-radius: 4px;
  background-color: transparent;
  border-color: #d9d9d9;
  border-width: 1px;
  height: 23px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 14px;
  color: black;
`;

const CountButton = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <UpDownButton
        style={{ borderRightColor: "transparent" }}
        onPress={() => {
          if (count != 0) {
            setCount(count - 1);
          }
        }}
      >
        <AntDesign name="minus" size={15} color="black" />
      </UpDownButton>
      <StyledText>{count}</StyledText>
      <UpDownButton
        style={{ borderLeftColor: "transparent" }}
        onPress={() => setCount(count + 1)}
      >
        <AntDesign name="plus" size={15} color="black" />
      </UpDownButton>
    </Container>
  );
};

export default CountButton;
