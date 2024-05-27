import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  gap: 9px;
  padding-left: 17px;
`;
const Title = styled.Text`
  color: rgba(0, 0, 0, 0.35);
  font-size: 20px;
  font-weight: bolder;
`;

const OneMaterial = styled.Text`
  border-radius: 31.985px;
  color: rgba(0, 0, 0, 0.35);
  background-color: #e0d7d2;
  border-radius: 31.985px;
  align-self: center;
  padding: 4px 9px;
  margin-right: 9px;
`;

const MaterialList = styled.ScrollView``;

const RecipeMaterial = () => {
  return (
    <Container>
      <Title>재료</Title>
      <MaterialList horizontal>
        <OneMaterial>콩나물 1봉지</OneMaterial>
        <OneMaterial>무 한개</OneMaterial>
        <OneMaterial>파 반개</OneMaterial>
        <OneMaterial>홍고추 1개</OneMaterial>
      </MaterialList>
    </Container>
  );
};

export default RecipeMaterial;
