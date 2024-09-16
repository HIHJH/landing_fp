import axios from "axios";
const baseURL = import.meta.env.VITE_SERVER_URL;

export const flowithAxios = axios.create({
  baseURL,
});

export const postEmailApi = async () => {
  //   try {
  //     const API = `/user/landing`;
  //     const response = await flowithAxios.post(API, { email: email });
  //     return console.log(response + "전송 완료");
  //   } catch (error) {
  //     console.error(error);
  //   }
};
