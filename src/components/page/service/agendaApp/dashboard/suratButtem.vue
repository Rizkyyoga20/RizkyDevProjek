<script setup lang="ts">
//import SekilasInfo from './sekilasInfo/SekilasInfo.vue';
//import Wilayah from './wilayah/wilayah.vue';

</script>


<template>
    <div class="grid lg:grid-cols-3 gap-2 p-2 relative">
        <RouterLink to="/"> 
        <div class="bg-green-200">
            <div 
                class="
                    float-right 
                    bg-blue-400
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                    
            >4</div>
            <img src="../../../../../assets/img/gmail.png" class="w-10 float-left m-2" />
            <p class="p-3" style="font-weight:500; font-size:20px;">Surat Hari Ini</p>
        </div>
        </RouterLink>

        <RouterLink to="/"> 
        <div class="bg-green-200">
            <div 
                class="
                    float-right 
                    bg-green-500
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                    
            >30</div>
            <img src="../../../../../assets/img/icon-save.png" class="w-10 float-left m-2" />
            <p class="p-3" style="font-weight:500; font-size:20px;">Surat Bulan Ini</p>
        </div>
        </RouterLink>


        <RouterLink to="/"> 
        <div class="bg-green-200">
            <div 
                class="
                    float-right 
                    bg-yellow-300 
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                    
            >10</div>
            <img src="../../../../../assets/img/data.png" class="w-10 float-left m-2" />
            <p class="p-3" style="font-weight:500; font-size:20px;">Surat Belum Diproses</p>
        </div>
        </RouterLink>

    </div>

</template>
