<script setup>



import { ref, onMounted, computed, watch } from "vue";
import { useMenusStore } from "../../state/menu";
import Card from '../../ui desain/card.vue'

const store = useMenusStore();

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


//frontand tampalte
//https://tailwindflex.com/


//state pinia
//https://github.com/orgs/vuejs/discussions/9606
//https://medium.com/@kisora.thomas/building-a-filter-based-search-with-vue-js-pinia-and-usestorage-a058d02d880b
//https://stackoverflow.com/questions/75372018/can-you-use-pinia-in-composition-apis-script-setup-tags
</script>


<template>

<section 
  class="
    py-20
  "
>

<div class="relative w-full bottom-5">
  <input 
    type="text" 
    placeholder="Search"
    v-model="Search"
    class="
      bg-gray-200
      border 
      w-[95%]
      h-12 
      shadow 
      p-4 
      rounded-full
      border-none
    " 
  >
  
  <button type="submit">
    <svg 
      class="
        text-teal-400 
        h-5 
        w-5 
        absolute 
        top-3.5 
        right-12 
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
  </button>
</div>

<div v-if="Search">
  <div class="box" v-for="result in SearchQuery" :key="result.id" :data="result"/>
</div>


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
          xs:w-2/12 
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





