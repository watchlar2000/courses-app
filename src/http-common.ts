import axios from 'axios';

const BASE_URL = 'https://api.wisey.app/api/v1';
const AUTH_URL = '/auth/anonymous?platform=subscriptions';

export default axios.create({
  baseURL: BASE_URL,
});
