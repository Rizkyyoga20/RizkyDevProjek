<script setup lang="ts">
  import SuratPie from '../grafik/suratPie.vue';
  import SuratBar from '../grafik/suratBar.vue';
  import SuratButtem from '../dashboard/suratButtem.vue';
  import Approved from '../crud/approved.vue';
</script>

<template>
    <div class="relative pb-1 bg-green-300">
        <img class="w-20 m-3 float-start" src="../../../../../assets/img/logo-bukit-barisan.jpeg">
        <div 
          class="text-center bg-white w-[100%] text-red-700" 
          style="font-weight:500; font-size:30px; padding:35px;"
        >
          PENGAGENDAAN SURAT MASUK SETUMDAM I/BB
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

    </div>
</template>