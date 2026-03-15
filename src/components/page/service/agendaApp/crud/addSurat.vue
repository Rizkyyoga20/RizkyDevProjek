<script setup lang="ts">
import { ref, watch } from "vue";
import { useModalPopUp } from "../../../../store/ModalPopUp";
import TabSurat from "./tabSurat.vue";

const Modal = useModalPopUp();

const showTambahPelanggan = ref(false);

watch( () => Modal.ModalId, (newValue) => {
    if (String(newValue) === 'modalPelanggan') {
      showTambahPelanggan.value = true;
      showTambahPelanggan.value = false;
    } else {
      showTambahPelanggan.value = false;
    }
  }
);

</script>

<template>
    <TabSurat
      v-show="showTambahPelanggan" 
      :ModalID="Modal.ModalId ?? 0" 
    />
  <div>

    <button 
      class="bg-blue-500 rounded-md p-2 ml-1 text-yellow-100"
      style="font-weight:500; font-size:15px;"
      @click="Modal.openModal('modalPelanggan')"
    >
      Daftar Agenda
    </button>

   </div>

</template>
  