<script setup lang="ts">
import { onMounted } from 'vue';
import { useMenu1Store } from '../store/menu';

const menusStore = useMenu1Store();
onMounted(() => {
    menusStore.getDaftarUnsplas();
});

</script>


<template>
<section class="py-20" id="gallery">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-3">
            Gallery
        </h2>
        <p>
            Gallery merupakan fitur yang digunakan untuk menampilkan koleksi gambar atau foto dengan tata 
            letak yang baik. Adapun disini saya menggunakan unsplash sebagai galery foto web saya. 
            Unsplash adalah sebuah web yang menyediakan fitur foto berkualitas tinggi secara gratis dan 
            bebas royalti. Situs ini didirikan pada tahun 2013 dan menjadi platform bagi para fotografer 
            untuk berbagi karya mereka dan bagi desainer, pembuat konten, dan siapa saja yang membutuhkan 
            gambar berkualitas untuk proyek mereka. 
        </p>

        <div class="grid lg:grid-cols-4 grid-rows-[1fr] gap-4 mt-5">
            <div v-for="ListPhoto in menusStore.filteredUnsplasPhotos" class="flex flex-col">
              <img :src="''+ListPhoto.urls.raw" class="object-cover h-[300px] w-full" />
              <p class="mt-2">{{ ListPhoto.alt_description }}</p>
            </div>
        </div>
          
          

    </div>  
</section>

</template>