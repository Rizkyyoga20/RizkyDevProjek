<script setup>



import { ref, onMounted, computed, watch } from "vue";
import { useMenusStore } from "../../state/menu";
import Card from '../../ui desain/card.vue'

const store = useMenusStore();

/*
watch(Search, (newQuery) => {
  SearchQuery.value = store.Menus1.filter(
      Menus => Menus.strMeal.toLowerCase().includes(newQuery.toLowerCase())
  );
});
*/

const getMenus = computed(() => {
  return store.getMenus;
});

const ListMenus1 = computed(() => {
  return store.Menus1;
});

const ListMenus2 = computed(() => {
  return store.Menus2;
});

const ListMenus3 = computed(() => {
  return store.Menus3;
});

onMounted(() => {
  store.fetchMenus1();
  store.fetchMenus2();
  store.fetchMenus3();
});

  
//https://tailwindflex.com/
//https://medium.com/@kisora.thomas/building-a-filter-based-search-with-vue-js-pinia-and-usestorage-a058d02d880b
//https://stackoverflow.com/questions/75372018/can-you-use-pinia-in-composition-apis-script-setup-tags
</script>

<template>

<!-- Hero section -->
<section 
  class="
    bg-green-900 
      py-10 
      flex-shrink-0 
      relative 
      overflow-hidden
    "
  >
  
  <svg 
    class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
    viewBox="0 0 375 283" 
    fill="none" 
    style="opacity: 0.1;"
  >
  
  <rect 
    x="159.52" 
    y="175" 
    width="152" 
    height="152" 
    rx="8" 
    transform="rotate(-45 159.52 175)" 
    fill="white" 
  />
    
  <rect 
    y="107.48" 
    width="152" 
    height="152" 
    rx="8" 
    transform="rotate(-45 0 107.48)" 
    fill="white" 
  />
  
  </svg>

  <div 
    class="
        container 
        mx-auto 
      "
    >
      
    <div 
      class="
        flex 
        flex-col 
        md:flex-row 
        items-center 
        justify-between
      "
    >

          <div 
            class="
              md:w-1/2 
              mb-8 
              md:mb-0
            "
          >

        <div 
          class="
            flex 
            items-center 
            justify-center 
          "
        >
            <div 
              class="
                relative
              "
            >
                <div 
                  class="
                    h-10 
                    w-10 
                    rounded-full 
                    border-t-8 
                    border-b-8 
                    border-green-600
                  "
                >
                </div>
                
                <div 
                  class="
                    absolute 
                    top-0 
                    left-0 
                    h-10 
                    w-10 
                    rounded-full 
                    border-t-8 
                    border-b-8 
                    border-green-950 
                    animate-spin
                  "
                >
                </div>

            </div>

        </div>


              <h1 
                class="
                  text-white 
                  font-bold 
                  text-3xl 
                  leading-tight 
                  mb-6
                "
              >
                Discover the world's best coffee
              </h1>
              
              <p 
                class="
                  text-white 
                  text-xl 
                  mb-8
                "
              >
                From hand-picked farms to your cup, we source the finest beans and
                roast them to perfection.
              </p>


              <RouterLink 
                 to="/search"
                 class="
                  pr-10
                  relative
                  px-6 py-3 
                  bg-white 
                  text-blue-600 
                  font-bold 
                  rounded-full 
                  hover:bg-blue-700 
                  transition 
                  duration-200
                "
              >
                Search 

                <svg 
                  class="
                    text-teal-400 
                    h-5 
                    w-5 
                    absolute 
                    top-3.5 
                    right-3 
                    fill-current 
                    dark:text-teal-300
                  "
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  version="1.1"
                  x="0px" y="0px" 
                  viewBox="0 0 56.966 56.966"
                  style="enable-background:new 0 0 56.966 56.966;" 
                  xml:space="preserve"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                  </path>
                </svg>




              </RouterLink>

          </div>
          <div 
            class="
              md:w-1/2
            "
          >
              
            <img 
              src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" 
              alt="Coffee beans"
              class="
                w-full 
                rounded-lg 
                shadow-lg
              "
            >
          
          </div>
      </div>
  </div>
</section>


<!-- Featured section -->

<section 
  class="
    py-20
  "
>

  <div 
    class="
      container 
      mx-auto 
      px-4
    "
  >

      <h2 
        class="
          text-3xl 
          font-bold 
          text-gray-800 
          mb-8
        "
      >
        Products Seafood
      </h2>
      

</div>

<div 
  class="
    p-6
  "
>


<div 
  class="
  p-1 
  flex 
  flex-wrap 
  items-center 
  justify-center
  "
>


      <div 
        class="
          rounded 
          overflow-hidden 
          shadow-lg 
          flex 
          flex-col 
          lg:w-3/12 
          xs:w-6/12 
          m-2
        "
        v-for="ListMenu1 in ListMenus1"
      >
          <a href="#"></a>
          <div class="relative"><a href="#">
                  <img :src=ListMenu1.strMealThumb
                    class="w-full"  
                    alt="Product">
                  <div
                      class="
                        hover:bg-transparent 
                        transition 
                        duration-300 
                        absolute 
                        bottom-0 
                        top-0 
                        right-0 
                        left-0 
                        bg-gray-900 
                        opacity-25
                      "
                    >
                  </div>
              </a>
              <a href="#!">
                  <div
                      class="
                        text-xs 
                        absolute 
                        top-0 
                        right-0 
                        bg-indigo-600 
                        px-4 
                        py-2 
                        text-white 
                        mt-3 
                        mr-3 
                        hover:bg-white 
                        hover:text-indigo-600 
                        transition 
                        duration-500 
                        ease-in-out
                      "
                    >
                      Info Product
                  </div>
              </a>
          </div>
          <div class="
                  px-6 
                  py-4 
                  mb-auto
                "
              >

              <a href="#"
                 class="
                  leading-relaxed 
                  text-base 
                  text-black 
                  dark:text-gray-300
                 "
              >
              <div class="lg:h-20 xs:h-none">
                {{ ListMenu1.strMeal}}
              </div>
              </a>
              <p class="text-gray-500 text-sm">
                  ...
  


                </p>
          </div>
          <div class="px-6 
                      py-3 
                      flex 
                      flex-row 
                      items-center 
                      justify-between 
                      bg-gray-100
                    "
                  >
              <span 
                href="#" 
                class="
                  py-1 
                  text-xs 
                  font-regular 
                  text-gray-900 
                  mr-1 
                  flex 
                  flex-row 
                  items-center
                "
              >
                  <svg 
                    height="13px" 
                    width="13px" 
                    version="1.1" 
                    id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                      y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                      xml:space="preserve"
                  >
                      <g>
                          <g>
                              <path
                                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                              </path>
                          </g>
                      </g>
                  </svg>
                  <span class="ml-1">{{ ListMenu1.idMeal }} Stok</span>
              </span>
              
                <span class="ml-1">
                  <a :href="'https://api.whatsapp.com/send?phone=+6287763578343&text=Hello, saya mau pesan '+ ListMenu1.strMeal">
                    <img src="../../../assets/img/wa.png" class="w-7" />
                  </a>    
                  <!-- 
                  <button class="p-1 m-1 rounded-sm">+</button>
                  <input class="rounded-sm w-10 border border-black" type="text" />
                  <button class="p-1 m-1 rounded-sm">-</button>
                  ------->
                </span>
          </div>
      </div>


</div>
</div>




</section>

<a href="#" 
   class="
      items-center 
      justify-center 
      inline-flex
      mb-5
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


</template>
  



<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
