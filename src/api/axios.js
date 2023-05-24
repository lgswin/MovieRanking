import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "77bfbba142a5476fac4409597931b2dc",
        language: "ko-KR"
    }
})

export default instance;