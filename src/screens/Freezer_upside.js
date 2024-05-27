import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import FoodItems from "../components/FoodItems";
const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Freezer_upside = ({ navigation }) => {
  return (
    <Container>
      <FoodItems navigation={navigation} />
    </Container>
  );
};

export default Freezer_upside;
