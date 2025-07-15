<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useMenu1Store } from "../../../../store/menu";
import ModalPesanan from "../pesanan/modalPesanan.vue";
import { useModalPopUp } from "../../../../store/ModalPopUp";
import Notif from "../../../../ui desain/Notif.vue";
import EditProduk from "../produk/editProduk.vue";
import HargaProduk from "../produk/hargaProduk.vue";
const menusStore = useMenu1Store();

const Modal = useModalPopUp();

const showModalPesanan = ref(false);
const showModalAddProduk = ref(false);

watch( () => Modal.ModalId, (newValue) => {
    if (String(newValue) === 'modalPesanan') {
      showModalPesanan.value = true;
      showModalPesanan.value = false;
    } else {
      showModalPesanan.value = false;
    }

    if (String(newValue) === 'modalAddProduk') {
      showModalAddProduk.value = true;
      showModalAddProduk.value = false;
    } else {
      showModalAddProduk.value = false;
    }


  }
);

onMounted(() => {
    menusStore.getDaftarMenus();
});

</script>

<template>
    <Notif
        :alertType="menusStore.alertType" 
        :showAlert="menusStore.showAlert" 
        :alertMessage="menusStore.alertMessage" 
    />
    <ModalPesanan v-show="showModalPesanan" :ModalID="Modal.ModalId ?? 0" />
    <EditProduk v-show="showModalAddProduk" :ModalID="Modal.ModalId ?? 0" />

    <h2 class="text-2xl font-bold text-black text-center" style="margin-top:75px;">
        Menus Seafood
    </h2>



    <div class="flex justify-center">
    <div 
        class="
            flex 
            flex-wrap 
            items-start 
            justify-start 
            w-full 
            lg:w-10/12"
            
    >
      <div 
           class="
                rounded 
                overflow-hidden 
                shadow-lg 
                flex 
                flex-col 
                lg:w-3/12 
                xs:w-full 
                lg:ml-0 
                lg:mr-0 
                lg:mt-3 
                lg:mb-3 
                m-2
                
            " 
            v-for="ListMenu1 in menusStore.Pagidation" 
      >
  
            <a href="#"></a>
                <div class="relative">
                    <a href="#">
                        <img
                            v-if="ListMenu1.strMealThumb" 
                            :src="''+ListMenu1.strMealThumb" 
                            class="w-full"
                            style="min-height:300px;" 
                        />
                        <img
                            v-else 
                            src="../../../../../assets/img/data.png" 
                            class="w-full"
                            style="min-height:300px;" 
                        />
                        <div
                            class="
                                hover:bg-transparent 
                                transition 
                                duration-300 
                                absolute 
                                bottom-0 
                                top-0 
                                right-0 
                                left-0 
                                bg-gray-900 
                                opacity-25
                            "
                        ></div>
                    </a>

                    <button>
                        <div
                            class="
                                text-xs 
                                absolute 
                                top-0 
                                right-0 
                                bg-indigo-600 
                                px-4 
                                py-2 
                                text-white 
                                mt-3 
                                mr-3 
                                hover:bg-white 
                                hover:text-indigo-600 
                                transition 
                                duration-500 
                                ease-in-out
                            "
                            @click="Modal.openModal('modalPesanan', ListMenu1.idMeal)"
                        >Pesan</div>
                    </button>
                </div>

                <div class="px-6 py-4 mb-aut">
                    <a href="#"
                        class="
                            leading-relaxed 
                            text-base 
                            text-black 
                            dark:text-gray-300
                        "
                    >
                        <div class="lg:h-10 xs:h-none">
                        {{ ListMenu1.strMeal }}
                        </div>
                    </a>
            </div>

            <div  class="pl-5 pr-5" style="min-height:75px;">
                <button 
                    class="bg-blue-600 rounded-sm float-end"
                    @click="Modal.openModal('modalAddProduk', Number(ListMenu1.idMeal))"
                ><img src="../../../../../assets/img/android-chrome-192x192.png" class="w-5"></button>
                <HargaProduk :idProduk="Number(ListMenu1.idMeal)" />              
            </div>

            <div 
                class="
                    px-6 
                    py-3 
                    flex 
                    flex-row 
                    items-center 
                    justify-between 
                    bg-gray-100
                "
            >
                <div 
                    href="#" 
                    class="
                        py-1 
                        text-xs 
                        font-regular 
                        text-gray-900 
                        mr-1 
                        flex 
                        flex-row 
                        items-center
                    "
                >ID : {{ ListMenu1.idMeal }}</div>
            </div>
        </div>
  
  </div>
  </div>
  

</template>