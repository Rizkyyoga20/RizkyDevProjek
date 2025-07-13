<script setup lang="ts">
import { computed } from "vue";
import { useMenu1Store } from "../../../../store/menu";
const menusStore = useMenu1Store();

const props = defineProps({
  idProduk: { type: Number, required: true },
});

const Produks = computed(() => {
  return menusStore.ReadProduksByIdProduk(Number(props.idProduk));
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
