import React from "react";
import { Button, Text } from "react-native";
import styled from "styled-components/native";
import Item from "./Item";
import { ItemIcons } from "./ItemIcons";
import { theme } from "../theme";

const DateButton = styled.View.attrs({
  elevation: 5,
})`
  width: 114px;
  height: 33px;
  border-radius: 11px;
  background-color: #fcf9f9;
  justify-content: center;
  align-items: center;
`;

const Date = styled.Text`
  color: #8a8080;
  font-size: 20px;
`;

const ExpirationDate = ({ date }) => {
  return (
    <DateButton>
      <Date>D-{date}</Date>
    </DateButton>
  );
};

export default ExpirationDate;
