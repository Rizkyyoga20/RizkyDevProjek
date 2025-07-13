<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  alertType: {
    type: String,
    required: true
  },
  showAlert: {
    type: Boolean,
    required: true
  },
  alertMessage: {
    type: String,
    required: true
  },
})

</script>

<template>
  <div 
      style="
        position:fixed;
        bottom:0px;
        right:0px;
        z-index:9999;
      "
      class="
          bg-red-100 
          border-l-4 
          p-4 m-2 
          relative
          alert
          lg:w-1/4
          w-[95%]
      " 
      role="alert"  
      :class="{
          'border-green-500 text-green-700': alertType === 'success',
          'border-red-500 text-red-700': alertType === 'error'
        }
      "
      v-if="showAlert"
  >
      <svg 
        viewBox="0 0 24 24" 
        class="
          w-5 h-5 
          sm:w-5 
          sm:h-5 
          mr-3
          float-left 
          text-red-600
        "
        v-if="alertType === 'error'"
      > 
        <path fill="currentColor" 
          d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"> 
        </path>
  
      </svg>
  
      <svg 
        viewBox="0 0 24 24" 
        class="
          w-5 h-5 
          sm:w-5 
          sm:h-5 
          mr-3
          float-left 
          text-green-600
        "
        v-else
      > 
        <path fill="currentColor" 
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"> 
        </path>    
      </svg>
      <p class="font-bold">{{ alertType }}</p>
      <p>{{ alertMessage }}</p>
  </div>
  </template>