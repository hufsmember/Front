import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components/native";
import axiosInstance from "../utils/axiosInstance";
import { Button, GenderButton, CustomCheckbox } from "../components";
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

const MiniText = styled.Text`
    font-size: 12px;
    margin-bottom: 20px;
    align-self: flex-start;
    color: ${({ theme }) => theme.miniText};
`;

const ButtonContainer = styled.View`
    margin-top: 20px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

const Gender = ({ navigation }) => {
    const theme = useTheme();
    const [selectedGender, setSelectedGender] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        const fetchAccessToken = async () => {
            const token = await AsyncStorage.getItem('accessToken');
            setAccessToken(token);
            console.log(token);
        };
        fetchAccessToken();
    }, []);

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
        setIsChecked(false); // 성별이 선택되면 체크박스를 해제합니다.
    };

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
        setSelectedGender(null); // 체크박스가 선택되면 성별 선택을 해제합니다.
    };

    const handleNextButtonPress = async () => {
        const gender = isChecked ? 'secret' : selectedGender; // 성별 값을 소문자로 변경
    
        if (gender) {
            try {
                console.log('눌림');
    
                const token = await AsyncStorage.getItem('accessToken');
                console.log(token);
                const response = await axiosInstance.post('/members/gender', 
                    { gender },
                    
                    console.log(token,'안녕'),
                    {
                        headers: {
                            'accessToken': `${token}`
                        }
                    }
                );
    
                console.log('Response:', response);
                navigation.navigate('Age');
            } catch (error) {
                console.error("성별 데이터를 전송하는 데 실패했습니다", error);
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
            console.error("성별을 선택하거나 성별을 알리고 싶지 않음을 선택하세요");
        }
    };
    

    return (
        <Container>
            <Title>성별을{"\n"}선택해주세요.</Title>
            <MiniText>성별을 설정하면{"\n"}더 정확한 맞춤 장보기를 제공합니다.</MiniText>

            <ButtonContainer>
                <GenderButton
                    onPress={() => { handleGenderSelect('FEMALE'); console.log("여성"); }}
                    title="여성"
                    imageSource={require("../../assets/female1.png")}
                    backgroundColor={selectedGender === 'FEMALE' ? theme.selectedButton : theme.miniText}
                    titleColor={theme.text}
                />
                <GenderButton
                    onPress={() => { handleGenderSelect('MALE'); console.log("남성"); }}
                    title="남성"
                    imageSource={require("../../assets/male1.png")}
                    backgroundColor={selectedGender === 'MALE' ? theme.selectedButton : theme.miniText}
                    titleColor={theme.text}
                />
            </ButtonContainer>
            <CustomCheckbox
                label="성별을 알리고 싶지 않습니다."
                onPress={handleCheckboxToggle}
                isChecked={isChecked}
            />
            <Button
                title="다음"
                onPress={handleNextButtonPress}
                isFilled={false}
                backgroundColor={theme.signupBox}
                titleColor={theme.background}
            />
        </Container>
    );
};

export default Gender;
