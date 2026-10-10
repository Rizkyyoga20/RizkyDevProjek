<script setup lang="ts">
import { ref, watch } from 'vue';
import { useModalPopUp } from '../../../../store/ModalPopUp';
import ExportLaporan from "../crud/Produk/Laporan/Modal.vue";
import ApprovedSurat from "../crud/Approved/ListData.vue";
import MasihProses from "../crud/Masih Proses/modal.vue";
import Ditolak from "../crud/Ditolak/modal.vue";
import MenuProduk from '../crud/Produk/Modal.vue';


const Modal = useModalPopUp();

const showExportLaporan = ref(false);
const showApproved = ref(false);
const showMasihProses = ref(false);
const showDitolak = ref(false);
const showMenuProduk = ref(false);

watch( () => Modal.ModalId, (newValue) => {
    if (String(newValue) === 'modalExportLaporan') {
      showExportLaporan.value = true;
      showExportLaporan.value = false;
    } else {
      showExportLaporan.value = false;
    }

    if (String(newValue) === 'modalApproved') {
      showApproved.value = true;
      showApproved.value = false;
    } else {
      showApproved.value = false;
    }

    if (String(newValue) === 'modalMasihProses') {
      showMasihProses.value = true;
      showMasihProses.value = false;
    } else {
      showMasihProses.value = false;
    }

    if (String(newValue) === 'modalDitolak') {
      showDitolak.value = true;
      showDitolak.value = false;
    } else {
      showDitolak.value = false;
    }

    if (String(newValue) === 'modalMenuProduk') {
      showMenuProduk.value = true;
      showMenuProduk.value = false;
    } else {
      showMenuProduk.value = false;
    }

  }
);

</script>


<template>

    <ExportLaporan
      v-show="showExportLaporan" 
      :ModalID="Modal.ModalId ?? 0" 
    />

    <ApprovedSurat
      v-show="showApproved" 
      :ModalID="Modal.ModalId ?? 0" 
    />

    <MasihProses
      v-show="showMasihProses" 
      :ModalID="Modal.ModalId ?? 0" 
    />

    <Ditolak
      v-show="showDitolak" 
      :ModalID="Modal.ModalId ?? 0" 
    />

    <MenuProduk
      v-show="showMenuProduk" 
      :ModalID="Modal.ModalId ?? 0" 
    />


    <div class="grid lg:grid-cols-4 gap-2 p-3 relative w-full">
        <button 
            class="bg-green-200"
            @click="Modal.openModal('modalExportLaporan')"
        >
            <div 
                class="
                    float-right 
                    bg-blue-400
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                    
            >3</div>
            <img src="../../../../../assets/img/icon-save.png" class="w-10 float-left m-2" />
            <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Export</p>
        </button>

        <button 
            class="bg-green-200"
            @click="Modal.openModal('modalApproved')"
        >
            <div 
                class="
                    float-right 
                    bg-green-500
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                    
            >5</div>
            <img src="../../../../../assets/img/data.png" class="w-10 float-left m-2" />
            <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Pesanan</p>
        </button>

        <button 
            class="bg-green-200"
            @click="Modal.openModal('modalMasihProses')"
        >
            <div 
                class="
                    float-right 
                    bg-yellow-300 
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                    
            >5</div>
            <img src="../../../../../assets/img/chat.png" class="w-10 float-left m-2" />
            <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Catatan</p>
        </button>


        <button 
            class="bg-green-200"
            @click="Modal.openModal('modalMenuProduk')"
        >
            <div 
                class="
                    float-right 
                    bg-slate-500
                    text-white
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                        
            >4</div>
                <img 
                    src="../../../../../assets/img/icon-pelanggan.png" 
                    class="w-10 float-left m-2" 
                />
                <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Produk</p>
        </button>

    </div>

</template>
