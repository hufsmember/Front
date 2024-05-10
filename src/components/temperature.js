import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;


const Location = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: #000000;
`;

const Temp = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: #000000;
`;




const Temperature = ({location, temp}) => {
  return (
  <Container>
    <Location>{location}</Location>
    <Temp>{temp}</Temp>
  </Container>
  );
};

export default Temperature;