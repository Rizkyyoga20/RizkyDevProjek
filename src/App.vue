<script setup lang="ts">
  import './components/route'
  //https://v2.tailwindcss.com/docs/position
</script>

<template>

  <div 
    class="
      static 
      bg-gray-100
    "
    style="
      height:100%;
      margin-top:30px;
    "
  >
    
    <main>
      <RouterView />
    </main>

    <div 
      class="
        absolute 
        top-0 
        left-0 
        bg-green-600
        w-full
        text-start
      "
      style="
        padding:0px 10px 10px 10px;
        position:fixed;
      "  
    >
        <RouterLink to="/" style="text-decoration:none; padding:5px 10px;">Home</RouterLink>
        <RouterLink to="/about" style="text-decoration:none; padding:5px 10px;">About</RouterLink>
        <RouterLink to="/galery" style="text-decoration:none; padding:5px 10px;">Galery</RouterLink>

    </div>
  </div>




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
</style>
