import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref} from 'vue';
import { useLocalStorage } from "@vueuse/core";
import { AddHarga, AddPelanggan, DataMenu, Pesanan, UnsplasPhotos } from "../interface/data";
import { ResponseMenusApi, ResponseUnsplasApi } from "../server/res";
import { menuApi, unsplashApi } from '../server/api/menu'
import { useStore } from "./menuDB";
import router from "../route";

export const useMenu1Store = defineStore('Menus', () => {

  //state
  const MenuSeafood = useLocalStorage<ResponseMenusApi<DataMenu[]>>('Menu1', {
    meals:[],
  });

  const UnsplasGalary = useLocalStorage<ResponseUnsplasApi<UnsplasPhotos[]>>('Unsplas', {
    results:[],
  });  

  const Search = ref('');
  const MenuID = ref();
  const MinPage = ref(1);
  const MaxPage = ref(5);
  const TotalPage = MenuSeafood.value.meals.length;

  //Pesan Menu
  const store = useStore();
  const dataMenus = store.readDataMenus()
  const dataProduks = store.readDataProduks();
  const dataPelanggan = store.readDataPelanggan()

  //awal notif
  const showAlert = ref(false);
  const alertMessage = ref('');
  const alertType = ref('');

  function handleError(message: string, options?: { success: boolean }) {
    if (options && options.success) {
      alertType.value = 'success';
    } else {
      alertType.value = 'error';
    }
    alertMessage.value = message;
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 2000);
  }
  //akhir notif

  function handleCreateDataMenus(data: Pesanan) {
    if (!data.idProdukPesanan || typeof data.idProdukPesanan !== 'number') {
      handleError('ID Produk Pesanan tidak valid!', { success: false });
      return;
    }
    
    if (!data.idPelanggan || typeof data.idPelanggan !== 'number') {
      handleError('ID Pelanggan tidak valid!', { success: false });
      return;
    }
    
    if (!data.jumlah || typeof data.jumlah !== 'number') {
      handleError('Jumlah tidak valid!', { success: false });
      return;
    }
    
    if (!data.totalBayar || typeof data.totalBayar !== 'number') {
      handleError('Total Bayar tidak valid!', { success: false });
      return;
    }
    
    if (!data.time || typeof data.time !== 'string') {
      handleError('Time tidak valid!', { success: false });
      return;
    }
    
    if (!data.status || typeof data.status !== 'string') {
      handleError('Status tidak valid!', { success: false });
      return;
    }
    
    store.createDataMenus(data);
    handleError('Data berhasil disimpan', { success: true });
    router.replace({name:'menusApp'});    
  }

  function handleCreateDataProduks(data: AddHarga) {
    if (
        data.idProduk && typeof data.idProduk === 'number' && 
        data.harga && typeof data.harga === 'string' && 
        data.stok && typeof data.stok === 'string'
    ){
      store.createDataProduks(data);
      handleError('Data berhasil disimpan', { success: true });
      router.replace({name:'menusApp'});
    } else {
      handleError('Data tidak lengkap atau format tidak sesuai!', { success: false });
    }
  }


  function handleUpdateDataProduks(idProduk: number, data: AddHarga) {
    try {
      if (data.harga && typeof data.harga === 'string' && data.stok && typeof data.stok === 'string') {
        store.updateDataProduks(idProduk, data);
        handleError('Data berhasil diupdate', { success: true });
        window.location.reload()
      } else {
        handleError('Data tidak lengkap atau format tidak sesuai!', { success: false });
      }
    } catch (error) {
      console.error(error);
      handleError('Gagal mengupdate data', { success: false });
    }
  }
  

  function handleCreateDataPelanggan(data: AddPelanggan) {
    if (
        data.nama && typeof data.nama === 'string' && 
        data.alamat && typeof data.alamat === 'string' &&
        data.noTelepon && typeof data.noTelepon === 'string' &&
        data.email && typeof data.email === 'string'
    ){
      store.createDataPelanggan(data);
      handleError('Data berhasil disimpan', { success: true });
      router.replace({name:'menusApp'});
    } else {
      handleError('Data tidak lengkap atau format tidak sesuai!', { success: false });
    }
  }
  

  function handleUpdateDataPelanggan(id: number, data: AddPelanggan) {
    if (
        data.nama && typeof data.nama === 'string' && 
        data.noTelepon && typeof data.noTelepon === 'string' &&
        data.email && typeof data.email === 'string' &&
        data.alamat && typeof data.alamat === 'string' 
    ){
      store.updateDataPelanggan(id, data);
      handleError('Data berhasil diupdate', { success: true });
      router.replace({name:'menusApp'});
    } else {
      handleError('Data tidak lengkap atau format tidak sesuai!', { success: false });
    }
  }

    
  const GetTotalPage = computed(() => {
    return Math.ceil(MenuSeafood.value.meals.length / MaxPage.value);
  });

  const totalMenus = computed(() => {
    return Math.ceil(MenuSeafood.value.meals.length) ;
  });

  function handleBack() {
    if (MinPage.value > 1) {
      MinPage.value = MinPage.value - 1;
    }
  }

  function handleNext() {
    if (MinPage.value < GetTotalPage.value) {
       MinPage.value = MinPage.value + 1;
    }
  }
  
  function handlePages(page: number) {
    MinPage.value = page;
  }
  
  function handleSearch(newValue : string) { 
    Search.value = newValue 
  }
      
  function handleMaxPageChange ($event: Event){
    const target = $event.target as HTMLSelectElement;
    MaxPage.value = parseInt(target.value);
    MinPage.value = 1;
  };

  const filteredMenus = computed(() => {
    if (!MenuSeafood.value || !Search.value) return MenuSeafood.value.meals;
  
    return MenuSeafood.value.meals.filter((listData: DataMenu) => {
      return listData.strMeal.toLowerCase().includes(Search.value.toLowerCase());
    });
  });
  
  const filteredUnsplasPhotos = computed(() => {
    if (!UnsplasGalary.value) return [];
    return UnsplasGalary.value.results;
  });  

  const Pagidation = computed(() => {
    if (!filteredMenus.value || !Array.isArray(filteredMenus.value)) return [];
  
    return filteredMenus.value.slice(
      (MinPage.value - 1) * MaxPage.value,
      MinPage.value * MaxPage.value
    );
  });
      
  const ReadMenusById = (id?: number) => {
    if (id === undefined) return [];
    return Pagidation.value.filter((menus) => menus.idMeal === id);
  };

  const ReadMenusByIdPesanan = (id?: number) => {
    if (id === undefined) return [];
    const data = Pagidation.value.find((menus) => menus.idMeal === id);
    return data ? [data] : [];
  };

  const ReadProduksById = (id?: number) => {
    if (id === undefined) return [];
    const foundProduk = dataProduks.find((menus: AddHarga) => menus.id === id);
    return foundProduk ? [foundProduk] : [];
  };

  const ReadProduksByIdProduk = (id?: number) => {
    if (id === undefined) return [];
    const produk = dataProduks.find((menus: AddHarga) => menus.idProduk === id);
    return produk ? [produk] : [];
  };

  const ReadPelangganById = (id?: number) => {
    if (id === undefined) return [];
    const pelanggan = dataPelanggan.find((pel: AddPelanggan) => pel.id === id);
    return pelanggan ? [pelanggan] : [];
  };
      
  async function DaftarMenus(): Promise<ResponseMenusApi<DataMenu[]>> {
    try {
      const response = await menuApi.get("filter.php?c=Seafood");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  async function getDaftarMenus() {
    try {
      const response = await DaftarMenus();
      MenuSeafood.value = response;
    } catch (error) {
      const err = error as Error;
      console.error('Error:', err.message);
    }
  }


  async function DaftarUnsplas(): Promise<ResponseUnsplasApi<UnsplasPhotos[]>> {
    try {
      const response = await unsplashApi.get(`search/photos?query=resturant&client_id=${import.meta.env.VITE_KEYS_UNSPLASH}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  async function getDaftarUnsplas() {
    try {
      const response = await DaftarUnsplas();
      UnsplasGalary.value = response;
    } catch (error) {
      const err = error as Error;
      console.error('Error:', err.message);
    }
  }


  return{
    showAlert, 
    alertMessage, 
    alertType,
    Search,
    MenuSeafood,
    UnsplasGalary,
    MenuID,
    MaxPage,
    MinPage,
    TotalPage,
    store,
    dataMenus,
    dataProduks,
    dataPelanggan,

    GetTotalPage,
    Pagidation,
    filteredMenus,
    filteredUnsplasPhotos,
    totalMenus,

    DaftarMenus,
    getDaftarMenus,
    DaftarUnsplas,
    getDaftarUnsplas,

    ReadMenusById,
    ReadProduksById,
    ReadProduksByIdProduk,
    ReadPelangganById,
    ReadMenusByIdPesanan,
    handleError,
    handleNext,
    handleBack,
    handleMaxPageChange,
    handleSearch,
    handlePages,

    handleCreateDataMenus,
    
    handleCreateDataPelanggan,
    handleUpdateDataPelanggan,

    handleCreateDataProduks,
    handleUpdateDataProduks

  }


});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMenu1Store, import.meta.hot))
}


