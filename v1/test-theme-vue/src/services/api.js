import axios from 'axios';

const baseURL = 'http://localhost:8013/api/v1'; // Замените на ваш базовый URL

const authToken = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjoiMjAyNC0wNC0xMlQxMToyMjozNS40MDM5MjgxN1oiLCJ1c2VySUQiOiJkYzljZmZhNS03OGYxLTQxYzktYjFjZi0yYTA4OTE3YzBiNDMifQ.tKXJyEdcBAFIw8l364oD8ShbaWVtc3zOSsrMKW08n_Qke4SIiNgfY1vJAsrpjAsGXXnoidziIfJca8H8LjM6Qg"

const headers = {
    Authorization: `Bearer ${ authToken }`
}

const instance = axios.create({
    baseURL,
    headers
    // Другие настройки Axios, если необходимо
});

export default instance;
