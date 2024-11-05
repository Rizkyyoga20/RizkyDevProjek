import { defineStore} from "pinia";
import { DaftarMenu } from "../server/types/menu";
import  ListDaftarMenu from "../server/apiConfig/menu"
import ResponseData from "../server/res/index"
import { API } from "../server/services/menu";
import { ref } from "vue";

export const useMenusStore = defineStore("MenusStore", {

  state: () => ({
      Search: ref(''),
      Menus1: [],
      Menus2: [],
      Menus3: [],
  }),
  getters: {
    getMenus(state){
        return(
          state.Menus1,
          state.Menus2,
          state.Menus3
        ) 
      }
  },
  actions: {

    async fetchMenus2() {
      ListDaftarMenu.DaftarCanadian()
      .then((response: ResponseData) => {
        this.Menus2 = response.data.meals; 
        console.log(response.data.meals);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    },

    async fetchMenus1() {
      ListDaftarMenu.DaftarSeafood()
      .then((response: ResponseData) => {
        this.Menus1 = response.data.meals; 
        console.log(response.data.meals);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    },

    async fetchMenus3() {
      ListDaftarMenu.DaftarChickenBreast()
      .then((response: ResponseData) => {
        this.Menus3 = response.data.meals; 
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

