import React from "react";
import { StatusBar, Button, ScrollView } from "react-native";
import styled from "styled-components/native";
import freezer from "../../image/main_freezer.jpeg";
import SeeAllButton from "../components/seeAllButton";
import Temperature from "../components/temperature";
import { AntDesign } from "@expo/vector-icons";
import Navigation from "../navigations";
import MainOpen from "./MainOpen";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLogin } from "../contexts/LoginContext";

AntDesign.loadFont();

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* gap: 35px; */
  flex-direction: column;
  background-color: #ffffff;
  /* padding-top: 30px; */
`;

const Body = styled.SafeAreaView`
  flex-direction: column;
  align-items: center;
  gap: 17px;
  justify-content: center;
`;
const Body_image = styled.Image`
  width: 194px;
  height: 328px;
  flex-shrink: 0;
`;

const Temp_Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 45px;
  align-self: stretch;
`;

const Sub = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #a3a3a3;
`;

export default function Home({ navigation }) {
  const insets = useSafeAreaInsets();

  const { setIsLoggedIn } = useLogin();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("accessToken");
      setIsLoggedIn(false); // 로그아웃 시 로그인 상태를 false로 변경
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <ScrollView>
      <Container
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <Body>
          <Body_image source={freezer} />
          <SeeAllButton _onPress={() => navigation.navigate("MainOpen")}>
            식재료 전체 보기
          </SeeAllButton>
          <Temp_Container>
            <Temperature location="냉장실" temp="2"></Temperature>
            <Temperature location="냉동실" temp="-20"></Temperature>
          </Temp_Container>
          <Sub>
            냉장고를 클릭하시면 더 자세히 내용물을 확인하 실수 있습니다.
          </Sub>
        </Body>
        <StatusBar style="auto" />
        <Button title="Logout" onPress={handleLogout} />
      </Container>
    </ScrollView>
  );
}
