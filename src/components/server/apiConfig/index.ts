import { DataMenu, UnsplasPhotos } from "../../interface/data";
import { bukuAgenda } from "../../interface/surat";
import { agendaAppApi, menuApi, unsplashApi } from "../api/menu";
import { ResponseBukuAgenda, ResponseMenusApi, ResponseUnsplasApi } from "../res";

  class DataStore {

    async DaftarSeafood(): Promise<ResponseMenusApi<[DataMenu]>> {
      try {
        const response = await menuApi.get("filter.php?c=Seafood");
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    async getDaftarAgenda(): Promise<ResponseBukuAgenda<bukuAgenda[]>> {
      try {
        const response = await agendaAppApi.get('');
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    /*
    async getDaftarAgenda(): Promise<ResponseBukuAgenda<bukuAgenda[]>> {
      try {
        const response = await agendaAppApi.get(`${import.meta.env.VITE_ID_AGENDA_APP}/values/${import.meta.env.VITE_NAME_AGENDA_APP}?key=${import.meta.env.VITE_KEYS_AGENDA_APP}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
    */

    async PhotoUnsplas(): Promise<ResponseUnsplasApi<[UnsplasPhotos]>> {
      try {
        const response = await unsplashApi.get(`search/photos?query=resturant&client_id=${import.meta.env.VITE_KEYS_UNSPLASH}`);
        const photos = response.data.results.map((photo: any) => ({
          id: photo.id,
          urls: photo.urls,
          user: photo.user,
          alt_description: photo.alt_description,        
        }));
        return photos;
      } catch (error) {
        throw error;
      }
    }
    
    

  }

export default new DataStore();
