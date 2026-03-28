<script setup lang="ts">
import { ref } from 'vue';
import { useModalPopUp } from '../../../../../store/ModalPopUp';
import FormAkun from './formAkun.vue';
import ListData from './ListData.vue';

const Modal = useModalPopUp();

const showAkun = ref(false)

const openAkun = () => {
  showAkun.value = true
}

</script>

<template>

<div 
    id="modalAkun" 
    class="
        fixed 
        right-0 
        top-1/2 
        transform -translate-y-1/2 z-50 
        lg:w-1/2
        w-full 
      bg-green-300
        bg-opacity-200 
        overflow-y-auto 
        h-screen 
    "
>

    <div class="relative top-5 bottom-5">
        <div class="flex justify-end p-2">
            <button 
                @click="Modal.closeModal('modalAkun')"
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
    </div>

<div>
    <div style="padding-top:15px;">

        <h4 
          class="p-1"
          style="font-weight:500; font-size:20px; text-align:left;"
        >
            <button 
                @click="openAkun"  
                class="
                    bg-blue-400 
                    text-amber-100 
                    pl-2 
                    pr-2 
                    pb-0.5
                    relative
                "
                style="border-radius:5px;"
            >+</button> Daftar Akun
        </h4>

    <div 
        v-show="showAkun"
        class="
          pt-3
          w-[100%]
          inset-x-0
          top-1/1
          pb-2
          sm:pb-5
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
          <button 
            class="
              absolute 
              -top-1 
              -right-1 
              hover:text-gray-100
              bg-red-500
              p-1
              mr-4
            " 
            @click="showAkun = false"
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
          <FormAkun class="pt-7"/>
        </div>
      </div>
      <ListData class="mt-3" />
    </div>
</div>

</div>
</template>