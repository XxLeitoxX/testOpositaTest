import axios from "axios";

const pokeApi = axios.create({
    baseURL: 'https://dummyjson.com'
})

export default pokeApi;