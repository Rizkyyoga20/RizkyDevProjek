<script setup lang="ts">
import { ref, watch } from "vue";
import { useModalPopUp } from "../store/ModalPopUp";
import  ModalAboutUs  from "../page/modalAboutUs.vue";
const Modal = useModalPopUp();
const showModalAboutUs = ref(false);
watch( () => Modal.ModalId, (newValue) => {
    if (String(newValue) === 'modalAboutUs') {
      showModalAboutUs.value = true;
      showModalAboutUs.value = false;
    } else {
      showModalAboutUs.value = false;
    }
  }
);
</script>

<template>
<ModalAboutUs v-show="showModalAboutUs" :ModalID="Modal.ModalId ?? 0" />
<nav 
    class="
        flex 
        flex-wrap 
        items-center 
        justify-between 
        p-3 
        bg-[#e8e8e5]
    "
  >
    <!---
    <div 
        class="text-xl" 
        style="font-family:Comic Sans MS; font-weight: 600;"
    >Digital Frame Solution</div>
    ---->
    <div 
        class="text-xl" 
        style="font-family:Comic Sans MS; font-weight: 600;"
    >Rizky Dev Projek</div>
    <div class="flex md:hidden">
        <button id="hamburger">
          <img 
            class="toggle block" 
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" 
            width="40" 
            height="40" 
          />
          <img 
            class="toggle hidden" 
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" 
            width="40" 
            height="40" 
          />
        </button>
    </div>
    <div 
        class="
            toggle 
            hidden 
            w-full 
            md:w-auto 
            md:flex 
            text-right 
            text-bold 
            mt-5 
            md:mt-0 
            md:border-none
        "
    >
        <button 
            href="#home" 
            class="
                block 
                md:inline-block 
                hover:text-blue-500 
                px-3 
                py-3 
                md:border-none
            "
        >Home</button>
        <a 
            href="#services" 
            class="
                block 
                md:inline-block 
                hover:text-blue-500 
                px-3 
                py-3 
                md:border-none
            "
        >Services</a>
        <button  
            class="
                block 
                md:inline-block 
                hover:text-blue-500 
                px-3 
                py-3 
                md:border-none
            "
            @click="Modal.openModal('modalAboutUs')"
        >About us</button>
        <a 
            href="#gallery" 
            class="
                block 
                md:inline-block 
                hover:text-blue-500 
                px-3 
                py-3 
                md:border-none
            "
        >Gallery</a>
        <a 
            href="#contactUs" 
            class="
                block 
                md:inline-block 
                hover:text-blue-500 
                px-3 
                py-3 
                md:border-none
            "
        >Visit Us</a>
    </div>
  
    <div 
        class="
            toggle 
            w-full 
            text-end 
            hidden 
            md:flex 
            md:w-auto 
            px-2 
            py-2 
            md:rounded
        "
        >
        <a href="tel:+6287763578343">
            <div class="flex justify-end">
                <div 
                    class="
                        flex 
                        items-center 
                        h-10 
                        w-30 
                        rounded-md 
                        bg-[#c8a876] 
                        text-white 
                        font-medium 
                        p-2
                    "
                >
                    <!-- Heroicon name: phone -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call now
                </div>
            </div>
        </a>
    </div>
  
  </nav>
    
  </template>

  