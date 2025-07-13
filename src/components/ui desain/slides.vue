<script setup lang="ts">
	import { ref } from 'vue';
		
	const currentIndex = ref(0);
	const slides = ref([
	  { id: 1, image: 'https://via.placeholder.com/800x400/FFB6C1/000000' },
	  { id: 2, image: 'https://via.placeholder.com/800x400/87CEFA/000000' },
	  { id: 3, image: 'https://via.placeholder.com/800x400/98FB98/000000' },
	]);
	
	const scrollCarousel = (direction: number) => {
	  currentIndex.value = (currentIndex.value + direction + slides.value.length) % slides.value.length;
	};

</script>

<template>
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="relative w-full max-w-4xl mx-auto">
          <div class="overflow-hidden relative rounded-lg">
            <div class="flex transition-transform duration-500 ease-in-out transform" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div class="min-w-full" v-for="(slide, index) in slides" :key="index">
                <img :src="slide.image" :alt="`Slide ${index + 1}`" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
    
          <button class="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none" @click="scrollCarousel(-1)">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button class="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none" @click="scrollCarousel(1)">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
    </div>
</template>


