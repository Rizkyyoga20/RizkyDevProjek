<script setup lang="ts">
import { useRoute } from 'vue-router';
import './components/route'
import Navbar from './components/ui desain/navbar.vue'
import HeaderApp from './components/ui desain/headerApp.vue'
import IsLoding from './components/ui desain/IsLoding.vue';
import { onMounted, ref } from 'vue';
const route = useRoute();


const isLoading = ref(true);

onMounted(async () => {
  try {
    // Kode untuk mengambil data
    await new Promise(resolve => setTimeout(resolve, 3000)); // timeout 1 detik
    isLoading.value = false;
  } catch (error) {
    console.error(error);
    isLoading.value = false;
  }
});

</script>

<template>
  <IsLoding v-if="isLoading"/>
  <div v-else>
    <Navbar v-if="route.path === '/' || route.path === ''" />
    <HeaderApp v-else />  
  </div>  
<main>
  <RouterView />
</main>

</template>

<style scoped>

.vue-school-active-link{
  border-radius:0px 0px 8px 8px;
  background:greenyellow;
  color:#000;
  font-weight:bold;
 }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }

.Sitebar{
  display:none;
}

.NoSitebar{
  display:block;
}

@media screen and (max-width: 992px) {
  .Sitebar{
    display:block;
  }
  .NoSitebar{
    display:none;
  }
}

</style>
