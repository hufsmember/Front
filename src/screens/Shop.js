import React, { useState } from "react";
import { Modal, Text } from "react-native";
import temp from "../../assets/temp.png";
import styled, { ThemeProvider } from "styled-components/native";

const Temp = styled.Image`
  width: 100%;
`;

const Shop = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return <Temp source={temp} />;
};

export default Shop;
