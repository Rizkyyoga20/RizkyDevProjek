import fetchJsonp from 'fetch-jsonp';
import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref} from 'vue';
import { useLocalStorage } from "@vueuse/core";
import { bukuAgenda, storeStatus, Akun } from "../interface/surat";
import { ResponseAkun, ResponseBukuAgenda, ResponseStatusSurat, } from "../server/res";


export const useSuratStore = defineStore('Agenda', () => {

  //state

  const ListAgenda = ref<bukuAgenda[]>([])
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
  const TotalPage = ListAgenda.value.length;
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

  async function gasRequest(action: string, params: Record<string, any> = {}) {
    const urlParams = new URLSearchParams({ action, ...params })
    // JANGAN tambah &callback=? disini
    const url = `${import.meta.env.VITE_VUE_APP_AGENDA}?${urlParams}`
    
    const response = await fetchJsonp(url, { timeout: 25000 }) // fetchJsonp otomatis tambah callback=
    const res = await response.json()
    if (res.status === 'error') throw new Error(res.message)
    return res.data
  }

  // READ - panggil gini, jangan kasih params
  async function ListBukuAgenda(): Promise<bukuAgenda[]> {
  const data = await gasRequest('read')
  console.log('Data dari GAS:', data)
  return data;
  }
  
  // CREATE - contoh kalau ada params
  async function CreateBukuAgenda(data: bukuAgenda) {
    return await gasRequest('create', data)
  }
  
  // UPDATE
  async function UpdateBukuAgenda(data: bukuAgenda) {
    return await gasRequest('update', data)
  }
  
  // DELETE
  async function DeleteBukuAgenda(idAgenda: number) {
    return await gasRequest('delete', { idAgenda })
  }
  
  async function getListAgenda() {
    const data = await gasRequest('read')
    console.log('Data dari GAS:', data)
    ListAgenda.value = data // langsung array, jangan {agenda: data}
  }
  
  async function tambahAgenda(data: bukuAgenda) {
    await CreateBukuAgenda(data)
    await getListAgenda()
  }
  
  async function editAgenda(data: bukuAgenda) {
    await UpdateBukuAgenda(data)
    await getListAgenda()
  }
  
  async function hapusAgenda(id: number) {
    await DeleteBukuAgenda(id)
    await getListAgenda()
  }


  const GetTotalPage = computed(() => {
    return Math.ceil(ListAgenda.value.length / MaxPage.value);
  });

  const totalMenus = computed(() => {
    return Math.ceil(ListAgenda.value.length) ;
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
    if (!Search.value) return ListAgenda.value // langsung, jangan data.agenda
    
    const keyword = Search.value.toLowerCase()
    return ListAgenda.value.filter(item => { // langsung .filter
      return (
        item.perihal?.toLowerCase().includes(keyword) ||
        item.nik?.toString().includes(Search.value) ||
        item.noSurat?.toString().toLowerCase().includes(keyword) ||
        item.jenisSurat?.toString().toLowerCase().includes(keyword)
      )
    })
  })

  
  const Pagination = computed(() => {
    if (!filteredMenus.value || !Array.isArray(filteredMenus.value)) return []
    return filteredMenus.value.slice(
      (MinPage.value - 1) * MaxPage.value,
      MinPage.value * MaxPage.value
    )
  })  
  

      
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
    Pagination,

    gasRequest,
    //ListBukuAgenda,
    CreateBukuAgenda,
    UpdateBukuAgenda,
    DeleteBukuAgenda,
    //getListAgenda,
    tambahAgenda,
    editAgenda,
    hapusAgenda,




  }


});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSuratStore, import.meta.hot))
}


