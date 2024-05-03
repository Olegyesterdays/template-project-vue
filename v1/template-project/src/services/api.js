import axios from 'axios';

const baseURL = "http://localhost:8080";
// const baseURL = window.api.URL;

const headers = {
    Authorization: `Bearer ${ localStorage.getItem('authToken') }`
}

const instance = axios.create({
    baseURL,
    headers
    // Другие настройки Axios, если необходимо
});

export default instance;
