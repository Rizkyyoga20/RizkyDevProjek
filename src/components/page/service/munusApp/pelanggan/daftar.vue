<script setup lang="ts">
import { useMenu1Store } from '../../../../store/menu';
import Action from './action.vue';
const Menu1Store = useMenu1Store();
</script>
<template>
    <div>
        <div 
            v-for="(List, index) in Menu1Store.dataPelanggan" 
            :key="index"
            class="mb-2" 
        >
            <Action :idPelanggan="List.id"/>
            <b>Nama : </b> {{ List.nama }}<br>
            <b>No.Telepon : </b> {{ List.noTelepon }}<br>
            <b>Email : </b> {{ List.email }}<br>
            <b>Alamat : </b> {{ List.alamat }}<br>
            <div class="bg-black w-full h-1 mt-1 rounded-sm"></div>
        </div>
    </div>
</template>