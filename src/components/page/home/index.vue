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
      py-20 
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
        px-4
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
              <img 
                src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" 
                alt="Coffee"
                class="
                  w-full 
                  h-40 
                  object-cover
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
  



<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
