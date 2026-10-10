<script setup lang="ts">
  import SuratPie from './grafik/suratPie.vue';
  import SuratBar from './grafik/suratBar.vue';
  import ButtemAdm from './ButtemAdmin.vue';
  import Notif from '../../../ui desain/Notif.vue';

  import { useSuratStore } from '../../../store/surat';
import SuratLine from './grafik/suratLine.vue';
  const SuratAgendaStore = useSuratStore();

</script>

<template>
    <div class="relative pb-1 bg-green-300">
        <img 
          style="margin-top:75px;"
          class="w-12 m-3 float-start" 
          src="../../../../assets/img/icon-pelanggan.png"
        >
        <div 
          class="text-center bg-white w-[100%] text-red-700" 
          style="font-weight:500; font-size:20px; padding:20px; padding-top:75px;"
        >
          DASHBOARD APP 2026
        </div>
        <div class="grid lg:grid-cols-1 p-2 w-full">
          <div class="mt-10">
            <ButtemAdm/>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-2 p-2">
            <div class="mt-20">
              <h1 style="font-weight:700; font-size:20px; margin-bottom:20px;">
                Tren Penjualan 6 bulan terakhir
              </h1>
              <SuratBar/>
            </div>

            <div class="mt-20">
              <h1 style="font-weight:700; font-size:20px;">Doughnut Produk Kopi Shop</h1>
              <SuratPie/>
            </div>
        </div>
        
        <div class="grid lg:grid-cols-1 gap-2 p-2">
          <div class="mt-20">
            <h1 style="font-weight:700; font-size:20px;">Tren Penjualan Kopi Shop</h1>
            <SuratLine/>
          </div>
        </div>


        <Approved/>

        <Notif
          :alertType="SuratAgendaStore.alertType" 
          :showAlert="SuratAgendaStore.showAlert" 
          :alertMessage="SuratAgendaStore.alertMessage" 
        />

    </div>

</template>