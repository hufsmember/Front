import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import StackNav from "./Stack";
import { useLogin } from "../contexts/LoginContext";

const Navigation = () => {
    const { isLoggedIn } = useLogin();

    return (
        <NavigationContainer>
            {isLoggedIn ? <StackNav /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Navigation;
