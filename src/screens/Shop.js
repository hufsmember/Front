import React, { useState } from "react";
import { Modal, Text, View, Image, ScrollView } from "react-native";
import temp from "../../assets/temp.png";
import styled, { ThemeProvider } from "styled-components/native";
import PopUp from "../components/Pop-up";

import shop_bar from "../../image/shop_exp.png";
import shop_exp from "../../image/shop_exp2.png";

const Temp = styled.Image`
  width: 100%;
`;

const Shop = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <ScrollView>
      <Modal visible={modalVisible}>
        <PopUp _onPress={() => setModalVisible(false)}></PopUp>
      </Modal>
      <View style={{ width: "100%", gap: 25 }}>
        <Image
          source={shop_bar}
          style={{ width: "100%", objectFit: "fill" }}
        ></Image>
        <Image
          style={{
            width: "100%",
            objectFit: "fill",
          }}
          source={shop_exp}
        ></Image>
      </View>
    </ScrollView>
  );
};

export default Shop;
