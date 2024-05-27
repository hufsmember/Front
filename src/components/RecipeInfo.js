import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

const BookMark = styled.TouchableOpacity``;

const OneList = styled.View`
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const SubText = styled.Text`
  font-size: 20px;
  color: #8a8080;
`;

const RecipeInfo = () => {
  const [check, setCheck] = useState(false);
  return (
    <Container>
      <OneList>
        <MaterialIcons name="access-time" size={30} color="#8A8080" />
        <SubText>20분</SubText>
      </OneList>
      <OneList>
        <MaterialIcons name="person" size={30} color="#8A8080" />
        <SubText>2인분</SubText>
      </OneList>
      <BookMark
        onPress={() => {
          setCheck(!check);
        }}
      >
        <MaterialIcons
          name={check ? "bookmark" : "bookmark-outline"}
          size={30}
          color="#8A8080"
        />
      </BookMark>
    </Container>
  );
};

export default RecipeInfo;
