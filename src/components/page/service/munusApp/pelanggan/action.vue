<script setup lang="ts">
import { ref } from 'vue';
import Harpus from './harpus.vue';
import Edit from './edit.vue';

const showDeletePelanggan = ref(false)
const showUpdatePelanggan = ref(false)


const openDeletePelanggan = () => {
  showDeletePelanggan.value = true
}

const openUpdatePelanggan = () => {
  showUpdatePelanggan.value = true
}

const props = defineProps({
    idPelanggan: { type: Number, required: true },
});


</script>

<template>
  
    <button 
        class="bg-red-600 text-white rounded-sm float-end p-0.5 mr-0.5"
        @click="openDeletePelanggan"
    >

        <svg 
            class="w-4 h-4" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>  
    </button>

    <button 
        class="bg-blue-600 rounded-sm float-end"
        @click="openUpdatePelanggan"
    >
        <img src="../../../../../assets/img/android-chrome-192x192.png" class="w-5">
    </button>



    <div 
      v-show="showDeletePelanggan"
      class="
        mt-10
        pt-3
        w-[100%]
        inset-x-0
        top-1/1
        sm:pb-1
        z-50
      "
    >
      <div 
        class="
          flex
          flex-wrap
          relative
          items-center
          justify-between
        "
      >
        <div class="bg-amber-600 h-[1px] mb-3 mt-10"></div>

          <a 
            href="#"
            @click="showDeletePelanggan = false"
            class="
                text-gray-900 
                bg-white 
                hover:bg-gray-100 
                focus:ring-4 
                focus:ring-cyan-200 
                border 
                border-gray-200 
                font-medium 
                rounded-lg 
                text-base 
                inline-flex 
                items-center 
                px-2
                py-0.7 
                text-center 
                mr-2
              "
          >X</a>
            <Harpus :idPelanggan="props.idPelanggan"/>
        </div>
    </div>

    <div 
      v-show="showUpdatePelanggan"
      class="
        mt-10
        pt-3
        w-[100%]
        inset-x-0
        top-1/1
        sm:pb-1
        z-50
      "
    >
      <div 
        class="
          flex
          flex-wrap
          relative
          items-center
          justify-between
        "
      >
        <div class="bg-amber-600 h-[1px] mb-3 mt-10"></div>

          <a 
            href="#"
            @click="showUpdatePelanggan = false"
            class="
                text-gray-900 
                bg-white 
                hover:bg-gray-100 
                focus:ring-4 
                focus:ring-cyan-200 
                border 
                border-gray-200 
                font-medium 
                rounded-lg 
                text-base 
                inline-flex 
                items-center 
                px-2
                py-0.7 
                text-center 
                mr-2
              "
          >X</a>
            <Edit :idPelanggan="props.idPelanggan"/>
        </div>
    </div>
</template>