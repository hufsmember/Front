import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import Navigation from "../navigations";

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  flex-shrink: 0;
  border-radius: 4.86px;
  background-color: #063460;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 16.842px;
  font-weight: 600;
  color: white;
`;

const BuyButton = () => {
  return (
    <ButtonContainer>
      <Title>구매하기</Title>
    </ButtonContainer>
  );
};

export default BuyButton;
