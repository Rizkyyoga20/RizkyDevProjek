import { defineStore} from "pinia";
import  ListDaftarMenu from "../server/apiConfig/menu"
import ResponseData from "../server/res/index"

export const useMenusStore = defineStore("MenusStore", {

  state: () => ({
      Menus1: [],
      Menus2: [],
  }),
  getters: {
    getMenus(state){
        return(
          state.Menus1,
          state.Menus2
        ) 
    },
  
  },
  actions: {

    async fetchMenus1() {
      await ListDaftarMenu.DaftarSeafood()
      .then((response: ResponseData) => {
        this.Menus1 = response.data.meals; 
        console.log(response.data.meals);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    },

    async fetchMenus2() {
      ListDaftarMenu.DaftarChickenBreast()
      .then((response: ResponseData) => {
        this.Menus2 = response.data.meals; 
        console.log(response.data.meals);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    }


  },


})
  
//https://dev.to/carlomigueldy/getting-started-with-vue-3-pinia-store-typescript-by-building-a-grocery-list-app-19km
//https://stackoverflow.com/questions/76964046/using-onmounted-and-axios-requests-in-pinia

