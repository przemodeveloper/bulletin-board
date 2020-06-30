import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bulletin-board-76b29.firebaseio.com',
});

export default instance;
