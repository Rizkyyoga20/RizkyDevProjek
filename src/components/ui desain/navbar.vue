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



<div 
    class="
    absolute 
    text-bold 
    mt-0 
    bg-[#e8e8e5]
    w-full
    text-end
    "
    style="
    position:fixed;
    z-index:5;
    "  
>


<div 
  class="text-xl float-start" 
  style="
    font-family:Comic Sans MS; 
    font-weight: 600; 
    padding:10px;
    font-size:15px;
  "
>Rizky Dev Projek</div>

<div class="NoSitebar" style="padding-left:50px;">        
  <div 
  class="
      toggle 
      text-end 
      hidden 
      md:flex 
      md:w-auto 
      px-1 
      py-1 
      md:rounded
      float-right
  "
  >
  <a 
    href="https://api.whatsapp.com/send?phone=6287763578343&text=Hello, Test kirim pesan ke WhatsApp" 
    target="_blank"
  >
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
                stroke="currentColor" class="w-6 h-6 pr-1">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Me
        </div>
      </div>
  </a>
  </div>


  <a href="#home" style="color:#000;" class="hover:text-blue-500 px-3 py-3">Home</a>
  <a href="#services" style="color:#000;" class="hover:text-blue-500 px-3 py-3">Service</a>
  <button @click="Modal.openModal('modalAboutUs')" style="color:#000;" class="hover:text-blue-500 px-3 py-3">About Us</button>
  <a href="#gallery" style="color:#000;" class="hover:text-blue-500 px-3 py-3">Gallery</a>
  <a href="#contactUs" style="color:#000;" class="hover:text-blue-500 px-3 py-3">Visit Us</a>

</div>




<div class="Sitebar m-0 p-0" style="z-index:4; right:0px;">

  <div class="dropdown inline-block relative m-0 p-0">
    <button
        class="open"
        style="right:0px; margin-bottom:100px;"
    >  
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
    <div     
      class="
        dropdown-menu absolute hidden bg-amber-50 w-screen
        text-bold 
        mt-0 
        text-end
      " 
      style="
        margin-top:25px;
        margin-left:0px;
        margin-right:0px;
        right:0px;
      "
    >

        <div class="w-full p-2">
            <a href="#home" style="color:#000; padding:5px 10px;">Home</a>
        </div>
        <div class="w-full p-2">
            <a href="#services" style="color:#000; padding:5px 10px;">Service</a>
        </div>
        <div class="w-full p-2">
            <button 
                @click="Modal.openModal('modalAboutUs')" 
                style="color:#000; padding:5px 10px; border:none;"
            >About Us</button>
        </div>
        <div class="w-full p-2">
            <a href="#gallery" style="color:#000; padding:5px 10px;">Gallery</a>
        </div>
        <div class="w-full p-2">
            <a href="#contactUs" style="color:#000; padding:5px 10px;">Visit Us</a>
        </div>

        <div class="w-full p-2">
          <a 
            href="https://api.whatsapp.com/send?phone=6287763578343&text=Hello, Test kirim pesan ke WhatsApp" 
            target="_blank"
          >
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
                        stroke="currentColor" class="w-6 h-6 pr-1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call Me
                </div>
              </div>
          </a>
        </div>


        
    </div>
    
    
  </div>

</div>


</div>
    
</template>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}

.open{
  padding:1px;
  position:fixed;
  float: right;
  width: 50px;
  top:0px;
  right:120px;
  z-index: 2;
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
  