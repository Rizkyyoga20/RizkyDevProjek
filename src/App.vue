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
      <div class="NoSitebar">
        <RouterLink to="/" style="text-decoration:none; padding:5px 10px;">Home</RouterLink>
        <RouterLink to="/about" style="text-decoration:none; padding:5px 10px;">About</RouterLink>
        <RouterLink to="/galery" style="text-decoration:none; padding:5px 10px;">Galery</RouterLink>







      </div>

      <div class="Sitebar">
        <div class="relative inline-block text-left">
            <div class="group">
                <button type="button"
                    class="inline-block justify-center items-center w-full text-sm font-medium focus:outline-none">
                    <img src="./assets/img/home-white.png" class="w-5" />
                </button>
        
                <!-- Dropdown menu -->
                <div
                class="
                  absolute 
                  left-0 
                  w-40 
                  mt-1 
                  origin-top-left 
                  bg-white 
                  divide-y 
                  divide-gray-100 
                  shadow-lg 
                  opacity-0 
                  invisible 
                  group-hover:opacity-100 
                  group-hover:visible 
                  transition 
                  duration-300
                "
              >
                <div class="py-1 top-0">
                <RouterLink to="/" class="block p-3">Home</RouterLink>
                <RouterLink to="/about" class="block p-3">About</RouterLink>
                <RouterLink to="/galery" class="block p-3">Galery</RouterLink>
                </div>
                </div>

            </div>
        </div>
      </div>


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
