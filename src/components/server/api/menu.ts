import axios from 'axios';
const instance = axios.create({
  baseURL: import.meta.env.VITE_VUE_API_MENU,
});
export default instance