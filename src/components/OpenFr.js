import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import freezer from "../../image/main_Open.png";
import freezer_upside from "../../image/freezer_upside.png";
import freezer_downside from "../../image/freezer_downside.png";

const Body_image_part = styled.Image`
  position: absolute;
  top: 60.43px;
  left: 85.54px;
`;

const Body_image_part2 = styled.Image`
  position: absolute;
  top: 185.48px;
  left: 85.54px;
`;
const TouchIt = styled.TouchableOpacity`
  position: absolute;
`;

const OpenFr = ({ fromnavigate }) => {
  return (
    <View>
      <Image source={freezer} />
      <TouchIt onPress={() => fromnavigate.navigate("Upside")}>
        <Body_image_part source={freezer_upside} />
      </TouchIt>
      <TouchIt onPress={() => fromnavigate.navigate("Downside")}>
        <Body_image_part2 source={freezer_downside} />
      </TouchIt>
    </View>
  );
};

export default OpenFr;
