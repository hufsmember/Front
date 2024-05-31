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

const Delete = styled.TouchableOpacity`
  width: 53.518px;
  height: 15.696px;
  border-width: 1px;
  border-color: #063460;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

const DeleteItem = () => {
  return (
    <Delete>
      <Text style={{ fontSize: 10 }}>전체삭제</Text>
    </Delete>
  );
};

export default DeleteItem;
