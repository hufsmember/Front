import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const GetAccessToken = async ({ getAccessToken }) => {
  try {
    const token = getAccessToken;
    return token;
  } catch (error) {
    console.log(error);
  }
  return token;
};

export default GetAccessToken;
