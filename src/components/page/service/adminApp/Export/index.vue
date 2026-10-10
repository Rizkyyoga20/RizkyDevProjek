<script setup lang="ts">
import InputDate from '../../../../ui desain/InputDate.vue';
import ListData from './DataPenjualan.vue';


</script>

<template>
    <div class="relative pb-1 bg-green-300 h-screen">

        <div 
            class="text-center bg-white w-[100%] text-red-700" 
            style="font-weight:500; font-size:20px; padding:20px; padding-top:75px;"
        >

            <RouterLink 
                class="bg-green-300 p-1"
                to="/AdminApp/"
                style="
                    font-weight:500;
                    display: block;
                    float:left;
                    border-radius:2px;
                "
            >
                <img class="w-5 m-auto" src="../../../../../assets/img/rumah.png" />
                <div style="font-size:8px; font-weight:600; text-align:center;">Dashboard</div>
            </RouterLink>

            <p 
                class="p-3" 
                style="
                    font-weight:500; 
                    font-size:20px; 
                ">
                    Export Laporan
            </p>
            <p 
                class="p-3" 
                style="
                    font-weight:500; 
                    font-size:12px; 
                ">
                    Silakan ini tanggal awal dan tanggal akhir laporan yang di cetak !! <br>
                    Note : tanggal awal tidak boleh lebih besar dari tanggal akhir. 
            </p>
        </div>

        <div style="padding:20px 10px;">
            <div class="w-1/2 float-start">
                <p class="pl-2" style="font-weight:500; font-size:15px;">Tanggal Awal</p>
                <InputDate/>             
            </div>
            <div class="w-1/2 float-end">
                <p class="pl-2" style="font-weight:500; font-size:15px;">Tanggal Akhir</p>
                <InputDate/>
            </div>
        </div>
        <ListData class="mt-20" />


    </div>
</template>