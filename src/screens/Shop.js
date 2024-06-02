import React, { useState } from "react";
import { Modal, Text } from "react-native";
import temp from "../../assets/temp.png";
import styled, { ThemeProvider } from "styled-components/native";
import PopUp from "../components/Pop-up";
const Temp = styled.Image`
  width: 100%;
`;

const Shop = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal visible={modalVisible}>
      <PopUp _onPress={() => setModalVisible(false)}></PopUp>
    </Modal>
  );
};

export default Shop;
