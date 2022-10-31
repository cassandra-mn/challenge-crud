import axios from 'axios';

const ApiService = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-type': 'application/json'
    }
});

export default ApiService;