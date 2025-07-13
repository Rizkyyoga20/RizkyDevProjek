import { DataMenu, UnsplasPhotos } from "../../interface/data";
import { menuApi, unsplashApi } from "../api/menu";
import { ResponseMenusApi, ResponseUnsplasApi } from "../res";

  class DataStore {

    async DaftarSeafood(): Promise<ResponseMenusApi<[DataMenu]>> {
      try {
        const response = await menuApi.get("filter.php?c=Seafood");
        return response.data;
      } catch (error) {
        throw error;
      }
    }

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
