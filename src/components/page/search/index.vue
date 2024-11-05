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

<section 
  class="
    py-20
  "
>

<div class="relative w-full bottom-5">
  <input 
    type="text" 
    placeholder="search"
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


  <div 
    class="
      container 
      mx-auto 
      px-4
    "
  >

      
      <div 
        class="
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-8
        "
      >

          <div 
            class="
              bg-white 
              rounded-lg 
              shadow-md 
              overflow-hidden
            "
          >
              
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
                justify-start
              "
            >
          
          <div 
            class="
              flex-shrink-0
              m-7
              lg:w-60
              xs:w-full
              bg-white 
              shadow-md 
              rounded-xl 
              duration-500 
              hover:scale-105 
              hover:shadow-xl
              " 
            v-for="ListMenu1 in ListMenus1"
          >
              <a href="#">
                  <img 
                    :src=ListMenu1.strMealThumb 
                    alt="Product" 
                    class="
                      h-80
                      lg:w-60
                      xs:w-full
                      object-cover 
                      rounded-t-xl
                    " 
                  />

                  <div 
                    class="
                      px-4 
                      py-3 
                      lg:w-60
                      xs:w-full
                    "
                  >

                  <span 
                    class="
                      text-gray-400 
                      mr-3 
                      uppercase
                    "
                  >
                    Product
                  </span>
                  
                    <p 
                      class="
                        text-lg 
                        font-bold 
                        text-black 
                        truncate 
                        block 
                        capitalize
                      "
                    >
                      {{ ListMenu1.strMeal}}
                    </p>
                    
                    <div 
                      class="
                        flex 
                        items-center
                      "
                    >
                      <p 
                        class="
                          text-lg 
                          font-semibold 
                          text-black 
                          cursor-auto 
                          my-3
                        "
                      >
                        Stok : {{ ListMenu1.idMeal }}
                      </p>
                          
                      <div 
                        class="
                          ml-auto
                        "
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="20"
                          fill="currentColor" 
                          class="bi bi-bag-plus" 
                          viewBox="0 0 16 16"
                        >                      
                          <path 
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    
                      </div>
                    </div>
                  </div>
              </a>
          </div>
      
      
      
      
      
      
      
          </div>





              </div>
          </div>


      </div>
  </div>
</section>

</template>





