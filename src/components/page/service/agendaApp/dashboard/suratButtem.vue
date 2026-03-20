<script setup lang="ts">
import { ref, watch } from 'vue';
import { useModalPopUp } from '../../../../store/ModalPopUp';
import SuratMasuk from "../crud/SuratMasuk/index.vue";
import ApprovedSurat from "../crud/Approved/ListData.vue";
import MasihProses from "../crud/Masih Proses/modal.vue";
import Ditolak from "../crud/Ditolak/modal.vue";
import Akun from "../crud/Akun/modal.vue";


const Modal = useModalPopUp();

const showSuratMasuk = ref(false);
const showApproved = ref(false);
const showMasihProses = ref(false);
const showDitolak = ref(false);
const showAkun = ref(false);

watch( () => Modal.ModalId, (newValue) => {
    if (String(newValue) === 'modalSuratMasuk') {
      showSuratMasuk.value = true;
      showSuratMasuk.value = false;
    } else {
      showSuratMasuk.value = false;
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

    if (String(newValue) === 'modalAkun') {
      showAkun.value = true;
      showAkun.value = false;
    } else {
      showAkun.value = false;
    }

  }
);

</script>


<template>

    <SuratMasuk
      v-show="showSuratMasuk" 
      :ModalID="Modal.ModalId ?? 0" 
    />

    <ApprovedSurat
      v-show="showSuratMasuk" 
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

    <Akun
      v-show="showAkun" 
      :ModalID="Modal.ModalId ?? 0" 
    />


    <div class="grid lg:grid-cols-5 gap-2 p-3 relative">
        <button 
            class="bg-green-200"
            @click="Modal.openModal('modalSuratMasuk')"
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
            <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Surat Masuk</p>
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
            <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Approved</p>
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
            <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Masih proses</p>
        </button>

        <button
            class="bg-green-200"
            @click="Modal.openModal('modalDitolak')"
        >
            <div 
                class="
                    float-right 
                    bg-red-400
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                        
            >2</div>
                <img src="../../../../../assets/img/icon-pelanggan.png" class="w-10 float-left m-2" />
                <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Ditolak</p>
        </button>

        <button 
            class="bg-green-200"
            @click="Modal.openModal('modalAkun')"
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
                        
            >3</div>
                <img 
                    src="../../../../../assets/img/icon-pelanggan.png" 
                    class="w-10 float-left m-2" 
                />
                <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Akun</p>
        </button>

    </div>

</template>
