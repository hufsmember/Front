import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import CheckButton from "../components/CheckButton";
import DeleteItem from "../components/DeleteItem";
const Container = styled.ScrollView`
  background-color: #f5f5f5;
`;
const Head = styled.View`
  flex-direction: row;
`;
const Cart = () => {
  return (
    <Container>
      <Text>장바구니!</Text>
      <Head>
        <CheckButton></CheckButton>
        <DeleteItem></DeleteItem>
      </Head>
    </Container>
  );
};

export default Cart;
