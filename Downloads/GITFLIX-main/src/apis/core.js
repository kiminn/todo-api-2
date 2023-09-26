import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        // format string ${} 변수치환
        // Bearer JWT인증타입
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
});
