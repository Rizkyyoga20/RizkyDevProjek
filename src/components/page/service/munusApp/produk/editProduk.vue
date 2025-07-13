<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useMenu1Store } from '../../../../store/menu';
import FromBottem from '../../../../ui desain/FromBottem.vue';
import { AddHarga } from '../../../../interface/data';
import { useModalPopUp } from '../../../../store/ModalPopUp';
import InputNumber from '../../../../ui desain/InputNumber.vue';
import Addproduk from './addProduk.vue';
//import InputText from '../../../../ui desain/InputText.vue';

const Menu1Store = useMenu1Store();
const Modal = useModalPopUp();

const props = defineProps({
  ModalID: {
    type: Number,
    required: true,
  },
});

const payload = reactive<AddHarga>({
  stok: '',
  harga: '',
});

async function Produk() {
  try {
    console.log(payload); 
    const editHarga: AddHarga = {
      stok: String(payload.stok),
      harga: String(payload.harga),
    };
    console.log(editHarga);
    await Menu1Store.handleUpdateDataProduks(props.ModalID, editHarga);
  } catch (error) {
    console.error(error);
  }
}

watch(
  () => Menu1Store.ReadProduksByIdProduk(props.ModalID),
  (newValue) => {
    if (newValue.length > 0) {
      payload.harga = newValue[0].harga;
      payload.stok = newValue[0].stok;
    }
  },
  { immediate: true }
);

</script>

<template>
<div 
  id="modalAddProduk" 
  class="
      fixed 
      right-0 
      top-1/2 
      transform -translate-y-1/2 z-50 
      lg:w-1/2
      w-full 
      bg-white 
      bg-opacity-200 
      overflow-y-auto 
      h-screen 
      px-4
  "
>
<div class="relative top-5 bottom-5">
  <div class="flex justify-end p-2">
      <button 
          @click="Modal.closeModal('modalAddProduk')"
          type="button" 
          class="
              text-gray-400 
              bg-transparent 
              hover:bg-gray-200 
              hover:text-gray-900 
              rounded-lg 
              text-sm 
              p-1.5 
              ml-auto 
              inline-flex 
              items-center
          "
      >
      <svg 
          class="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>

  <div 
    v-for="(List, index) in Menu1Store.ReadProduksByIdProduk(props.ModalID)" 
    :key="index" 
  >
    <InputNumber 
      id="stok" 
      label="stok" 
      v-model="List.stok"
      @input="payload.stok = List.stok"
      placeholder="stok Produk" 
    />

    <InputNumber 
      id="harga" 
      label="harga" 
      v-model="List.harga"
      @input="payload.harga = List.harga"
      placeholder="Harga Produk" 
    />

    <div class="w-[100%]">
      <FromBottem 
        class="float-end" 
        id="editProduk" 
        label="Save" 
        @click.native="Produk();"
      />
    </div>
  </div>

    <Addproduk 
      v-if="Menu1Store.ReadProduksByIdProduk(props.ModalID).filter(
        produk => produk.idProduk === props.ModalID
      ).length === 0"
      :idProduk="props.ModalID" 
    />

</div>
</div>
</template>