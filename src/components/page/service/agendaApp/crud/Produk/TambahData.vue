<script setup lang="ts">
import { reactive } from 'vue';
import FromBottem from '../../../../../ui desain/FromBottem.vue';
import InputText from '../../../../../ui desain/InputText.vue';
import InputNumber from '../../../../../ui desain/InputNumber.vue';
import { dataProduk } from '../../../../../interface/AppProduk';
import TextArea from '../../../../../ui desain/TextArea.vue';


const payload = reactive<dataProduk>({
    namaProduk:'',
    stokProduk: 0,
    keteranganProduk:'',

});

async function TambahProduk() {
  try {
    const akun: dataProduk = {
      namaProduk: String(payload.namaProduk),
      stokProduk: Number(payload.stokProduk),
      keteranganProduk: String(payload.keteranganProduk),
    };
   await akun;
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <div class="w-[100%] p-2">

    <InputNumber 
      id="stokProduk" 
      label="stokProduk" 
      v-model="payload.namaProduk" 
      placeholder="Stok Produk" 
    />

    <InputText
      id="namaProduk" 
      label="namaProduk" 
      v-model="payload.namaProduk" 
      placeholder="Nama Produk" 
    />

    <TextArea 
      id="keteranganProduk" 
      label="keteranganProduk" 
      placeholder="keteranganProduk" 
      v-model="payload.keteranganProduk" 
    />

    <div class="w-[100%]">
      <FromBottem 
        class="float-end" 
        id="produk" 
        label="Save" 
        @click.native="TambahProduk();"
      />
    </div>
  </div>
</template>