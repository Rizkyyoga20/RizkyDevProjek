<script setup lang="ts">
  import Produk from "../../ui desain/produk.vue";
  import Search from '../../ui desain/search.vue';
</script>


<template>
<section class="bg-cyan-50 h-[100vh]">
  <img class="w-full h-100" src="../../../assets/img/pikopi.jpg" />

    <Search />
    <Produk />

    <a href="#" 
      class="
          items-center 
          justify-center 
          inline-flex
          mb-5
          mt-20
          text-d
        ">
      <svg 
      class=" 
        text-gray-800 
        dark:text-white
        bg-green-500 p-2
        w-12
        h-12
        rounded-full 
      " 
      aria-hidden="true" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 14 8"
      >
      <path 
        stroke="currentColor" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
      />
      </svg>
    </a>

</section>

</template>





