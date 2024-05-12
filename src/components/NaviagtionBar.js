import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import navigation from "../../image/navigation.png";
import home from "../../iamge/Home.png";

const Home = styled.Image`
  top: 18px;
  left: 37.61px;
`;

const NavigationBar = () => {
  return (
    <>
      <Image source={navigation}></Image>
      <Home source={home}></Home>
    </>
  );
};

export default NavigationBar;
