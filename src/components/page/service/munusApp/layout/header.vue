<script setup lang="ts">
import { useMenu1Store } from "../../../../store/menu";
import Search from "../../../../ui desain/search.vue";
import Pagidation from "../../../../ui desain/pagidation.vue";
import { ref, watch } from "vue";
import { useModalPopUp } from "../../../../store/ModalPopUp";
import TabPelanggan from "../pelanggan/tabs.vue";

const menusStore = useMenu1Store();
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
    <TabPelanggan 
      v-show="showTambahPelanggan" 
      :ModalID="Modal.ModalId ?? 0" 
    />
  <div class="relative">
  
    <div class="w-full h-[200px] bg-amber-700"></div>

      <div class="absolute top-0 w-full flex">
      
        <div class="w-full" style="margin-top:170px;">
            <div class="ml-1 mr-1 lg:ml-20 lg:mr-20">

              <Search 
                Id="Search" 
                Type="Search" 
                Placeholder="Search" 
                :Search="menusStore.Search" 
                @update:Search="(e) => menusStore.handleSearch(e.target.value)" 
              />

              <button 
                class="bg-orange-200 rounded-md p-0.5 float-end"
                @click="Modal.openModal('modalPelanggan')"
              ><img src="../../../../../assets/img/mamber.png" class="w-7 h-7"></button>

              <Pagidation
                @handleBack="menusStore.handleBack"
                @handleNext="menusStore.handleNext"
                @handlePages="menusStore.handlePages"
                @change:handleMaxPageChange="menusStore.handleMaxPageChange"
                @v-model="menusStore.MaxPage"
                :MaxPage="menusStore.MaxPage"
                :MinPage="menusStore.MinPage"                 
                :TotalPage="menusStore.GetTotalPage"   
                :TotalData="menusStore.TotalPage"                           
              />

            </div>              
  
          </div>
      </div>
    </div>

  </template>
  