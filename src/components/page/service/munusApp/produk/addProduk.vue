<script setup lang="ts">
import { reactive } from 'vue';
import { useMenu1Store } from '../../../../store/menu';
import FromBottem from '../../../../ui desain/FromBottem.vue';
import { AddHarga } from '../../../../interface/data';
import InputNumber from '../../../../ui desain/InputNumber.vue';

const Menu1Store = useMenu1Store();

const props = defineProps({
    idProduk: { type: Number, required: true },
});

const payload = reactive<AddHarga>({
  idProduk: 0,
  stok: '',
  harga: '',
});


async function addProduk() {
  try {
    const addHarga: AddHarga = {
      idProduk: Number(props.idProduk),
      stok: String(payload.stok),
      harga: String(payload.harga),
    };
    await Menu1Store.handleCreateDataProduks(addHarga);
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <div>
      <InputNumber 
        id="stok" 
        label="stok" 
        v-model="payload.stok" 
        @input="payload.stok"
        placeholder="stok Produk" 
      />
  
      <InputNumber 
        id="harga" 
        label="harga" 
        v-model="payload.harga"
        @input="payload.harga" 
        placeholder="Harga Produk" 
      />
  
      <div class="w-[100%]">
        <FromBottem 
          class="float-end" 
          id="addProduk" 
          label="Save" 
          @click.native="addProduk();"
        />
      </div>  
  </div>
</template>