import React, { useState, useRef, useEffect } from "react";
import styled, { useTheme } from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/commmon";
import { Input, Button } from "../components";
import axiosInstance from "../utils/axiosInstance";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 40px 20px;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    align-self: flex-start;
    color: ${({ theme }) => theme.text};
`;

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({ theme }) => theme.errorText};
`;

const Signup = ({ navigation, route }) => { // route 추가
    const theme = useTheme();

    const { isFamilyHave } = route.params;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    useEffect(() => {
        let _errorMessage = '';
        if (!name) {
            _errorMessage = 'Please enter your name.';
        } else if (!validateEmail(email)) {
            _errorMessage = 'Please verify your email.';
        } else if (password.length < 6) {
            _errorMessage = 'The password must contain 6 characters at least.';
        } else if (password !== passwordConfirm) {
            _errorMessage = 'Passwords need to match.';
        } else {
            _errorMessage = '';
        }
        setErrorMessage(_errorMessage);
    }, [name, email, password, passwordConfirm]);

    useEffect(() => {
        setDisabled(
            !(name && email && password && passwordConfirm && !errorMessage)
        );
    }, [name, email, password, passwordConfirm, errorMessage]);

    // 다음 버튼을 눌렀을 때 실행되는 함수
    const handleNextButtonPress = async () => {
        if (name && email && password && passwordConfirm && !errorMessage) {
            try {
                const response = await axiosInstance.post(`/members/check/register?isFamilyExist=${isFamilyHave}`, {
                    name,
                    email,
                    password,
                });
    
                // 액세스 토큰을 받아옵니다.
                const accessToken = response.headers['accesstoken'];
    
                // 액세스 토큰을 AsyncStorage에 저장합니다.
                if (accessToken) {
                    await AsyncStorage.setItem('accessToken', accessToken);
                    console.log('Access Token:', accessToken);
    
                    // 다음 페이지로 이동
                    navigation.navigate('Gender');
                } else {
                    console.error('Access token is missing in the response.');
                }
            } catch (error) {
                console.error('Error:', error);
                if (error.response) {
                    console.error("응답 데이터:", error.response.data);
                    console.error("응답 상태:", error.response.status);
                    console.error("응답 헤더:", error.response.headers);
                } else if (error.request) {
                    console.error("요청 데이터:", error.request);
                } else {
                    console.error("에러 메시지:", error.message);
                }
            }
        } else {
            console.log("Please fill in all required fields correctly.");
        }
    };
    
    
    
    

    return (
        <KeyboardAwareScrollView extraScrollHeight={20}>
            <Container>
                <Title>회원가입</Title>
                <Input
                    label='이름'
                    value={name}
                    onChangeText={text => setName(text)}
                    onSubmitEditing={() => {
                        setName(name.trim());
                        emailRef.current.focus();
                    }}
                    onBlur={() => setName(name.trim())}
                    placeholder='이름'
                    returnKeyType='next'
                />
                <Input
                    ref={emailRef}
                    label='아이디'
                    value={email}
                    onChangeText={text => setEmail(removeWhitespace(text))}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder='아이디'
                    returnKeyType='next'
                />
                <Input
                    ref={passwordRef}
                    label='비밀번호'
                    value={password}
                    onChangeText={text => setPassword(removeWhitespace(text))}
                    onSubmitEditing={() => passwordConfirmRef.current.focus()}
                    placeholder='비밀번호'
                    returnKeyType='done'
                    isPassword
                />
                <Input
                    ref={passwordConfirmRef}
                    label='비밀번호 확인'
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
                    onSubmitEditing={() => {
                        if (!disabled) {
                            handleNextButtonPress();
                        }
                    }}
                    placeholder='비밀번호 확인'
                    returnKeyType='done'
                    isPassword
                />
                <ErrorText>{errorMessage}</ErrorText>
                <Button
                    title="다음"
                    onPress={handleNextButtonPress}
                    disabled={disabled}
                    isFilled={false}
                    backgroundColor={theme.signupBox}
                    titleColor={theme.background}
                />
            </Container>
        </KeyboardAwareScrollView>
    );
};

export default Signup;
