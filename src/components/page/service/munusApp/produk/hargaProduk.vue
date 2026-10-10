<script setup lang="ts">
import { computed } from "vue";
import { useMenuStore } from "../../../../store/menu";
const menusStore = useMenuStore();

const props = defineProps({
  idProduk: { type:String, required: true },
});

const Produks = computed(() => {
  return menusStore.ReadProduksByIdProduk(props.idProduk);
});
</script>

<template>

  <div v-for="(Produk, index) in Produks" :key="index" >
      Jumlah : {{ Produk.stok }} Porsi<br>
      Harga : <b>Rp.{{ Produk.harga }}</b>
  </div>
  <div v-if="Produks.length === 0">
    No Ready
  </div>
    
</template>
