import axios from "axios";

const postApi = axios.create({
    baseURL: 'https://dummyjson.com'
})

export default postApi;