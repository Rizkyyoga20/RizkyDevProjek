import { defineStore } from "pinia";
import { ref } from 'vue';
import { DaftarMenu } from "../server/types/menu";

export const useMenuStore = defineStore("menuStore", () => {

  const Menus = ref<DaftarMenu[]>([]);

  function initMenus(data: DaftarMenu[]) {
    Menus.value = data;
  }


  return {
    Menus,
    initMenus,
  };
});