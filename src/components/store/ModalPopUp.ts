import { acceptHMRUpdate, defineStore } from "pinia";
import { ref } from 'vue';

export const useModalPopUp = defineStore('ModalPopUp', () => {
  
  const modals = ref<HTMLElement[]>([]);
  const body = ref<HTMLElement>(document.body);    
  const ModalId = ref<number>();  

  const openModal = (modalId: string | number, id?: number ) => {
    //const modal = document.getElementById(modalId);
    const modal = document.getElementById(`${modalId}`);
    if (modal) {
      modal.style.display = 'block';
      body.value.classList.add('overflow-y-hidden');
      ModalId.value = id;
      console.log(`Modal ${id !== undefined ? `dengan ID ${id}` : modalId} dibuka.`);
    }
  };
  
  const closeModal = (modalId: string | number, id?: number) => {
    //const modal = document.getElementById(modalId);
    const modal = document.getElementById(`${modalId}`);
    if (modal) {
      modal.style.display = 'none';
      body.value.classList.remove('overflow-y-hidden');
      console.log(`Modal ${id !== undefined ? `dengan ID ${id}` : modalId} ditutup.`);
    }
  
  };
  
  const closeAllModals = () => {
    body.value.classList.remove('overflow-y-hidden');
    modals.value.forEach((modal) => {
      modal.style.display = 'none';
    });
  };
  
  document.onkeydown = (event) => {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  };
    
    
  return{
      modals,
      body,
      ModalId,

      openModal,
      closeModal,
      closeAllModals,
      
    }
  
  
  });
  
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useModalPopUp, import.meta.hot))
  }
  
   