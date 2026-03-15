import { acceptHMRUpdate, defineStore } from "pinia";
import { ref} from 'vue';
import { useLocalStorage } from "@vueuse/core";
import { bukuAgenda, storeStatus, Akun } from "../interface/surat";
import { ResponseAkun, ResponseBukuAgenda, ResponseStatusSurat, } from "../server/res";
//import { menuApi, unsplashApi } from '../server/api/menu'

export const useMenu1Store = defineStore('Menus', () => {

  //state
  const BukuAgenda = useLocalStorage<ResponseBukuAgenda<bukuAgenda[]>>('Agenda', {
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
  const TotalPageAgenda = BukuAgenda.value.agenda;
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

  function handleCreateDataAgenda(data: bukuAgenda) {
    if (!data.noSurat || typeof data.nik !== 'number') {
      handleError('nik tidak valid!', { success: false });
      return;
    }
    
    if (!data.jenisSurat || typeof data.pengirim !== 'number') {
      handleError('jenis dan pengirim surat tidak valid!', { success: false });
      return;
    }
    
    if (!data.perihal || typeof data.tujuan !== 'number') {
      handleError('perihal dan tujuan surat tidak valid!', { success: false });
      return;
    }
    
    if (!data.nomorTelepon || typeof data.email !== 'number') {
      handleError('Nomor telpon dan email tidak valid!', { success: false });
      return;
    }

    
    /*
    store.createDataMenus(data);
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
    if (!data.idAgenda || typeof data.time !== 'number') {
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


      
  return{
    showAlert, 
    alertMessage, 
    alertType,
    Search,
    MaxPage,
    MinPage,
    TotalPageAgenda,
    TotalPageStatusAgenda,
    TotalPageDataAkun,
    handleError,

    handleCreateDataAgenda,
    handleUpdateStatusAgenda,
    handleCreateDataAkun,
  }


});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMenu1Store, import.meta.hot))
}


