<script setup lang="ts">
import { useRoute } from 'vue-router';
import './'
import Navbar from '../../components/ui desain/navbar.vue'
import HeaderApp from '../../components/ui desain/headerApp.vue'
const route = useRoute();

</script>

<template>
    <Navbar v-if="route.path === '/' || route.path === ''" />
    <HeaderApp v-else />  

    <main>
        <RouterView />
    </main>

</template>

