import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'https://f248a602-3244-4229-9f05-f6cd922294fe.mock.pstmn.io',
});

export default todoApi;
