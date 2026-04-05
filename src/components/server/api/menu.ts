import axios from 'axios';

const menuApi = axios.create({
  baseURL: import.meta.env.VITE_VUE_API_MENU,
});

const unsplashApi = axios.create({
  baseURL: import.meta.env.VITE_VUE_API_UNSPLASH,
});

const agendaAppApi = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_AGENDA,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

export { menuApi, unsplashApi, agendaAppApi };
