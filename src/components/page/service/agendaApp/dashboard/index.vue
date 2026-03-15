<script setup lang="ts">
  import SuratPie from '../grafik/suratPie.vue';
  import SuratBar from '../grafik/suratBar.vue';
  import SuratButtem from '../dashboard/suratButtem.vue';
  import addSurat from '../crud/addSurat.vue';
</script>

<template>
    <div class="relative pb-10">

        <div class="grid lg:grid-cols-1 p-2">
          <div class="mt-20">
            <addSurat/>    
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

    </div>
</template>