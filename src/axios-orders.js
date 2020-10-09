import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-7c821.firebaseio.com/'
});

export default instance;