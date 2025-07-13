import axios from 'axios';

const menuApi = axios.create({
  baseURL: import.meta.env.VITE_VUE_API_MENU,
});

const unsplashApi = axios.create({
  baseURL: import.meta.env.VITE_VUE_API_UNSPLASH,
});

export { menuApi, unsplashApi };
