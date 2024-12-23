import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref} from 'vue';
import DataMenu from "../interface/menu";
import ListDaftarMenu from "../server/apiConfig/menu";
import { useLocalStorage } from "@vueuse/core";
import ResponseData from "../server/res";

export const useMenuStore = defineStore('menu', () => {

  //state
  const Menu1 = useLocalStorage<DataMenu[]>('Menu1', [])
  const Menu2 = useLocalStorage<DataMenu[]>('Menu2', [])
  const Search = ref('');
  const isLoding = ref(false);
  const JumPage = ref();
  const MaxPage = ref(5);
  const TotPage = ref();
  const jumlahPesan = ref(0);

  //actions
  async function ListMenus1() { 

    await ListDaftarMenu.DaftarSeafood()
    .then((response: ResponseData) => {
      Menu1.value = response.data.meals; 
      console.log(response.data.meals)
      return response.data.meals
    })
    .catch((e: Error) => {
      console.log(e);
    });

  };


  async function ListMenus2() { 

    await ListDaftarMenu.DaftarSeafood()
    .then((response: ResponseData) => {
      Menu2.value = response.data.meals;

        return Menu2.value.filter(menus => {
          console.log(menus.strMeal.toLowerCase().includes(Search.value.toLowerCase()))
          return menus.strMeal.toLowerCase().includes(Search.value.toLowerCase())
        })    
    })
    .catch((e: Error) => {
      console.log(e);
    });

  };

  async function jumlahPesanan (){
    await jumlahPesan.value
  }

  async function tambahPesanan (){
    await jumlahPesan.value++
  }

  async function kurangiPesanan (){
    await jumlahPesan.value--
  }



  //getters
  const readData1 = computed(() => {
    return Menu1.value
  });


  const readData2 = computed(() => {
    return Menu2.value.filter(menus => {
      console.log(menus.strMeal.toLowerCase().includes(Search.value.toLowerCase()))      
      return menus.strMeal.toLowerCase().includes(Search.value.toLowerCase())
    })
  });



  //return
  return{

    //state
    Menu1,
    Menu2,
    Search,
    JumPage,
    MaxPage,
    TotPage,
    isLoding,
    jumlahPesan,

    //action
    ListMenus1,
    ListMenus2,
    jumlahPesanan,
    tambahPesanan,
    kurangiPesanan,

    //getters
    readData1,
    readData2
  }


});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot))
}


