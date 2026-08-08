<script setup lang="ts">
  import SuratPie from '../grafik/suratPie.vue';
  import SuratBar from '../grafik/suratBar.vue';
  import SuratButtem from '../dashboard/suratButtem.vue';
  import Approved from '../crud/approved.vue';
  import Notif from '../../../../ui desain/Notif.vue';

  import { useSuratStore } from '../../../../store/surat';
  const SuratAgendaStore = useSuratStore();

</script>

<template>
    <div class="relative pb-1 bg-green-300">
        <img 
          style="margin-top:75px;"
          class="w-12 m-3 float-start" 
          src="../../../../../assets/img/icon-pelanggan.png"
        >
        <div 
          class="text-center bg-white w-[100%] text-red-700" 
          style="font-weight:500; font-size:20px; padding:20px; padding-top:75px;"
        >
          DASHBOARD APP 2026
        </div>
        <div class="grid lg:grid-cols-1 p-2">
          <div class="mt-20">
            <SuratButtem/>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-2 p-2">
            <div class="mt-20">
              <h1 style="font-weight:700; font-size:20px;">Bar Grafik Tujuan Surat</h1>
              <SuratBar/>
            </div>

            <div class="mt-20">
              <h1 style="font-weight:700; font-size:20px;">Pie Grafik Approved Surat</h1>
              <SuratPie/>
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