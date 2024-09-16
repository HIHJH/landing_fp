import axios from "axios";
const baseURL = import.meta.env.VITE_SERVER_URL;

export const flowithAxios = axios.create({
  baseURL,
});

export const postInfoApi = async (phone: string, hangout: string) => {
  try {
    const API = `/registration`;
    const response = await flowithAxios.post(API, {
      phone_number: phone,
      hangout: hangout,
    });
    return console.log(response + "전송 완료");
  } catch (error) {
    console.error(error);
  }
};
