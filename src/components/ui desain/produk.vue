<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useMenuStore } from "../store/menu";
  const menusStore = useMenuStore();
  const Pesan = ref(0);
  const total = menusStore.total()

  async function TambahPesanan() {
    return total
    return Pesan.value++
  };

  onMounted(() => {
    menusStore.ListMenus2();
  });

</script>


<template>
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
      v-for="(ListMenu1, index) in menusStore.readData2" :key="index" 
      class="
        rounded 
        overflow-hidden 
        shadow-lg 
        flex 
        flex-col 
        lg:w-3/12 
        xs:w-full 
        m-2
      "
    >
      <a href="#"></a>
      <div class="relative"><a href="#">
              <img :src="''+ListMenu1.strMealThumb"
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
          <button class="p-1 m-1 rounded-sm" index @click="TambahPesanan">+ {{index}}</button>
          <input 
            class="
              rounded-sm 
              border 
              border-black 
              text-center
              w-10 
            " 
            type="text" 
            :key=(index)
            v-model="Pesan"
          />
          <button class="p-1 m-1 rounded-sm" @click="Pesan--">-</button>
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
              <img src="../../assets/img/wa.png" class="w-7" />
            </a>    
          </span>

    </div>
  </div>
  
  
  
</div>


</template>