<script setup lang="ts">
import { reactive } from 'vue';
import { useMenuStore } from '../../../../store/menu';
import FromBottem from '../../../../ui desain/FromBottem.vue';
import { AddHarga } from '../../../../interface/data';
import InputText from '../../../../ui desain/InputText.vue';

const Menu1Store = useMenuStore();

const props = defineProps({
    idProduk: { type: String, required: true },
});

const payload = reactive<AddHarga>({
  id: '',
  idProduk: '',
  stok: '',
  harga: '',
});


async function addProduk() {
  try {
    const addHarga: AddHarga = {
      id: '',
      idProduk: String(props.idProduk),
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

    <InputText
      id="stok" 
      label="stok" 
      v-model="payload.stok" 
      placeholder="Stok" 
    />
  
      <InputText 
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