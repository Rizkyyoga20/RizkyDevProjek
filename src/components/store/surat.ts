import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref} from 'vue';
import { useLocalStorage } from "@vueuse/core";
import { bukuAgenda, storeStatus, Akun } from "../interface/surat";
import { ResponseAkun, ResponseBukuAgenda, ResponseStatusSurat, } from "../server/res";
import { agendaAppApi } from "../server/api/menu";

export const useSuratStore = defineStore('Agenda', () => {

  //state

  const ListAgenda = useLocalStorage<ResponseBukuAgenda<bukuAgenda[]>>('Agenda', {
    agenda:[],
  });
  const statusSurat = useLocalStorage<ResponseStatusSurat<storeStatus[]>>('status', {
    statusSurat:[],
  });
  const akun = useLocalStorage<ResponseAkun<Akun[]>>('akun', {
    akun:[],
  });

 // const store = useStore();
  const Search = ref('');
  //const idAgenda = ref();
  const MinPage = ref(1);
  const MaxPage = ref(10);
  const TotalPage = ListAgenda.value.agenda.length;
  const TotalPageStatusAgenda = statusSurat.value.statusSurat;
  const TotalPageDataAkun = akun.value.akun;

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

  async function filteredAgenda(): Promise<ResponseBukuAgenda<bukuAgenda[]>> {
    try {
      const response = await agendaAppApi.get(`https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_ID_AGENDA_APP}/values/${import.meta.env.VITE_NAME_AGENDA_APP}?key=${import.meta.env.VITE_KEYS_AGENDA_APP}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
/*
  async function getAgendaApp() {
    try {
      const response = await DataStore.getDaftarAgenda();
      BukuAgenda.value = response;
    } catch (error) {
      const err = error as Error;
      console.error('Error:', err.message);
    }
  }

  async function getAgendaApp() {
    try {
      const response = await DataStore.getDaftarAgenda();
      console.log(response);
      BukuAgenda.value = response.agenda;
    } catch (error) {
      const err = error as Error;
      console.error('Error:', err.message);
      console.error('Error detail:', error);
    }
  }
  */

  function handleCreateDataAgenda(data: bukuAgenda) {
    if (!data.noSurat || typeof data.nik !== 'number') {
      handleError('Error, data tidak valid, cek nik dan nomor surat', { success: false });
      return;
    }
    
    if (!data.jenisSurat || typeof data.pengirim !== 'number') {
      handleError('Error, data tidak valid, cek jenis dan pengirim surat', { success: false });
      return;
    }
    
    if (!data.perihal || typeof data.tujuan !== 'number') {
      handleError('Error, data tidak valid, cek perihal dan tujuan surat', { success: false });
      return;
    }
    
    if (!data.tglAgenda) {
      handleError('Error, data tidak valid, cek tanggal aganda', { success: false });
      return;
    }
    /*
    store.(data);
    handleError('Data berhasil disimpan', { success: true });
    window.history.go(0);    
    */
  }


  function handleCreateDataAkun(data: Akun) {
    if (!data.nik) {
      handleError('nik tidak valid!', { success: false });
      return;
    }
    
    if (!data.username || typeof data.password) {
      handleError('username dan password tidak valid!', { success: false });
      return;
    }
    
    /*
    store.createDataMenus(data);
    handleError('Data berhasil disimpan', { success: true });
    window.history.go(0);    
    */
  }


  function handleUpdateStatusAgenda(data: storeStatus) {
    if (!data.idBukuAgenda || typeof data.time !== 'number') {
      handleError('agenda dan tanggal tidak valid!', { success: false });
      return;
    }
    
    if (!data.status) {
      handleError('status pengirim surat tidak valid!', { success: false });
      return;
    }
    
    /*
    store.createDataMenus(data);
    handleError('Data berhasil disimpan', { success: true });
    window.history.go(0);    
    */

  }


  async function ListBukuAgenda(): Promise<ResponseBukuAgenda<bukuAgenda[]>> {
    try {
      const API_URL = import.meta.env.VITE_AGENDA_APP;
      const response = await agendaAppApi.get(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async function getListAgenda() {
    try {
      const response = await ListBukuAgenda();
      ListAgenda.value = response;
    } catch (error) {
      const err = error as Error;
      console.error('Error:', err.message);
    }
  }



  const GetTotalPage = computed(() => {
    return Math.ceil(ListAgenda.value.agenda.length / MaxPage.value);
  });

  const totalMenus = computed(() => {
    return Math.ceil(ListAgenda.value.agenda.length) ;
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
    if (!ListAgenda.value || !Search.value) return ListAgenda.value;
    return ListAgenda.value.agenda.filter((listData: bukuAgenda) => {
      return (
        listData.perihal.toLowerCase().includes(Search.value.toLowerCase()) ||
        listData.nik.toString().includes(Search.value.toLowerCase()) ||
        listData.noSurat.toLowerCase().includes(Search.value.toLowerCase()) ||
        listData.jenisSurat.toString().includes(Search.value.toLowerCase())
      );
    });
  });
  
  const Pagidation = computed(() => {
    if (!filteredMenus.value || !Array.isArray(filteredMenus.value)) return [];
    return filteredMenus.value.slice(
      (MinPage.value - 1) * MaxPage.value,
      MinPage.value * MaxPage.value
    );
  });
  
  

      
  return{
    showAlert, 
    alertMessage, 
    alertType,
    Search,
    MaxPage,
    MinPage,
    TotalPage,
    TotalPageStatusAgenda,
    TotalPageDataAkun,
    ListAgenda,
    ListBukuAgenda,
    getListAgenda,
    
    filteredAgenda,
    handleError,

    handleCreateDataAgenda,
    handleUpdateStatusAgenda,
    handleCreateDataAkun,

    GetTotalPage,
    totalMenus,
    handleBack,
    handleNext,
    handlePages,
    handleSearch,
    handleMaxPageChange,
    filteredMenus,
    Pagidation,

  }


});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSuratStore, import.meta.hot))
}


