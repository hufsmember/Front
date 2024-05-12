import React from "react";
import { TouchableOpacity, View, Text, Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { icons } from "./Icon";


const Icon = styled.Image`
  width: 38px;
  height: 38px;
  object-fit: cover;
`;

const IconButton = ({icon}) => {
  return (
            <Icon source={icon}></Icon>

  );
};

export default IconButton;