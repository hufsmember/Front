import React from "react";
import { TouchableOpacity, View, Text, Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import IconButton from "./IconButton"
import { icons } from "./Icon";


const Container = styled.View`

    flex-direction: row;


`

const Header = () => {
  return (
  <Container>
       <IconButton icon={icons.back} />
       <IconButton icon={icons.add} />
       <IconButton icon={icons.menu} />
  </Container>
  );
};

export default Header;