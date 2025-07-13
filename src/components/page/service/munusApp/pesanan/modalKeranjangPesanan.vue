<script setup lang="ts">
import { onMounted } from 'vue';
import { useModalPopUp } from '../../../../store/ModalPopUp';
import { useMenu1Store } from '../../../../store/menu';
const Modal = useModalPopUp();
const Menu1Store = useMenu1Store();

onMounted(() => {
    Menu1Store.getDaftarMenus();
});

</script>

<template>
    <div 
        id="modalKeranjang" 
        class="
            fixed 
            right-0 
            top-1/2 
            transform -translate-y-1/2 z-50 
            lg:w-1/4
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
                @click="Modal.closeModal('modalKeranjang')"
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

            <div>
                <div v-for="(List, index) in Menu1Store.dataMenus" :key="index">
                <b>Jumlah Pesanan : </b>{{ List.jumlah }} Porsi<br>
                <b>Status Pembayaran : </b>{{ List.status }}<br>
                <b>Waktu : </b>{{ List.time }}<br>

                <div 
                    v-for="(ListMenus, index) in Menu1Store.ReadMenusByIdPesanan(Number(List.idProdukPesanan))" 
                    :key="index"
                >
                        <img :src="''+ListMenus.strMealThumb" class="lg:w-1/4 w-[50%] mt-5"/>
                        {{ ListMenus.strMeal }}<br>
                        {{ ListMenus.idMeal }}<br>
                        <div class="h-0.5 w-[100%] bg-black mt-1"></div>
                </div>

                <div 
                    v-for="(ListPelanggan, index) in Menu1Store.ReadPelangganById(Number(List.idPelanggan))" 
                    :key="index"
                >
                        <b>Nama : </b>{{ ListPelanggan.nama }}<br>
                        <b>Alamat : </b> {{ ListPelanggan.alamat }}<br>
                        <b>No Telepon : </b> {{ ListPelanggan.noTelepon }}<br>
                        <b>Email : </b>{{ ListPelanggan.email }}<br>
                        <div class="h-0.5 w-[100%] bg-black mt-1"></div>
                </div>

                </div>
            </div>
        
      </div>
    </div>
</template>