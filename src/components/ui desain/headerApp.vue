<script setup lang="ts">
import { ref, watch } from "vue";
import { useModalPopUp } from "../store/ModalPopUp";
import ModalKeranjangPesanan from "../page/service/munusApp/pesanan/modalKeranjangPesanan.vue";

const Modal = useModalPopUp();

const showKeranjangPesanan = ref(false);

watch( () => Modal.ModalId, (newValue) => {
    if (String(newValue) === 'modalKeranjang') {
      showKeranjangPesanan.value = true;
      showKeranjangPesanan.value = false;
    } else {
      showKeranjangPesanan.value = false;
    }
  }
);
</script>


<template>
<ModalKeranjangPesanan 
    v-show="showKeranjangPesanan" 
    :ModalID="Modal.ModalId ?? 0" 
/>
<nav 
    class="
        flex 
        flex-wrap 
        items-center 
        justify-between 
        p-3 
        w-full
        bg-[#e8e8e5]
    "

    style="
        position:fixed;
        z-index:5;
    " 
  >
    <!---
    <div 
        class="text-xl" 
        style="font-family:Comic Sans MS; font-weight: 600;"
    >Digital Frame Solution</div>
    ---->

    <div 
        class="text-xl" 
        style="font-family:Comic Sans MS; font-weight: 600;"
    >Menus App
    <RouterLink 
        to="/" 
        class="
            p-1.5
            ml-2
            flex 
            bg-blue-700  
            rounded-md  
            float-right
        "
    >
        <img src="../../assets/img/home-white.png" class="w-5 h-5">
    </RouterLink>
</div>

<div              
    class="
        p-1.5
        ml-2
        bg-blue-700  
        rounded-md  
        float-end
    "
    @click="Modal.openModal('modalKeranjang')"
>
    <img src="../../assets/img/keranjang.png" class="w-5 h-5">
</div>

</nav>
    
</template>

  