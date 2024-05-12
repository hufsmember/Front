import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import Navigation from "../navigations";

const ButtonContainer = styled.TouchableOpacity`
  width: 274px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 16.842px;
  font-weight: 600;
  color: ${({ theme }) => theme.gray_100};
`;

const SeeAllButton = ({ children, _onPress }) => {
  return (
    <ButtonContainer onPress={_onPress}>
      <Title>{children}</Title>
    </ButtonContainer>
  );
};

export default SeeAllButton;
