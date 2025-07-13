<script setup lang="ts">
import { ref } from 'vue';
import { useModalPopUp } from '../../../../store/ModalPopUp';
import Daftar from './daftar.vue';
import Add from './add.vue';

const Modal = useModalPopUp();

const tabs = ref([
  {
    title: 'Form',
    component: Add,
  },
  {
    title: 'Data',
    component: Daftar,
  },
]);

const currentIndex = ref(0);

const showTab = (index: number) => {
  currentIndex.value = index;
};
</script>

<template>

    <div 
    id="modalPelanggan" 
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
            @click="Modal.closeModal('modalPelanggan')"
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
    <div
        class="text-xl mb-2" 
        style="font-family:Comic Sans MS; font-weight: 600;"
    >Pelanggan</div>
    <img src="../../../../../assets/img/staff-men.png" class="w-[18%] mx-auto mt-5"/>
    <div class="tab-buttons">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index" @click="showTab(index)" 
        :class="{ active: currentIndex === index }"
       >
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-content">
      <div 
        v-for="(tab, index) in tabs" 
        :key="index" v-show="currentIndex === index"
       >
        <component :is="tab.component" v-if="tab.component"></component>
      </div>
    </div>
  </div>

</div>
</div>
</template>

<style scoped>
.tab-buttons button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
}

.tab-buttons button.active {
  background-color: #007bff;
  color: #ffffff;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
