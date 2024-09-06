import { API_URL } from '../global/http';

const axios = require('axios');

export const postRequest = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}${url}`, data).then((response) => {
            console.log('postRequest response', response);
            resolve(response);
        }).catch((error) => {
            console.log('postRequest error', error);
            reject(error);
        });
    });
}