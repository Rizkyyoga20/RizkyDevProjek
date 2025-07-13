<script setup lang="ts">
import { useModalPopUp } from '../store/ModalPopUp';
const Modal = useModalPopUp();
</script>

<template>
    <div 
        id="modalAboutUs" 
        class="
            fixed 
            right-0 
            top-1/2 
            transform -translate-y-1/2 z-50 
            lg:w-1/2
            w-full 
            bg-white 
            bg-opacity-200 
            overflow-y-auto 
            h-screen 
            px-4
        "
    >
      <div class="relative top-5 bottom-5">
        <div class="flex justify-end p-2">
            <button 
                @click="Modal.closeModal('modalAboutUs')" 
                type="button" 
                class="
                    text-gray-400 
                    bg-transparent 
                    hover:bg-gray-200 
                    hover:text-gray-900 
                    rounded-lg 
                    text-sm 
                    p-1.5 
                    ml-auto 
                    inline-flex 
                    items-center
                "
            >
            <svg 
                class="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="text-justify">
          <h4 class="font-bold">About Us</h4>

          <div class="flex justify-center items-center">
            <img 
              src="../../assets/img/rizky.PNG" 
              alt="Background Image" 
              class="rounded-full w-[100px] h-[100px] lg:m-3 m-1" 
            />
          </div>
          
          <p>
            Saya merupakan alumni Universitas Islam Negeri Raden Fatah Palembang pada tahun 2018 khususnya 
            pada jurusan sistem informasi. judul skripsi saya adalah sebuah sistem infomasi distribusi AMDK 
            pada PT. Oasis Waters International Palembang. pekerjaan terakhir saya adalah sebagai web 
            programmer pada jundezain, dimana saya membuat aplikasi web dengan framework react, node.js, 
            express.js, ORM sequelize, database mysql dan rest api. Selain itu juga saya sebgai freelance 
            web developer.<br>
            Saya juga <i>Expert</i> pada desain grafis, aplikasi yang saya gunakan untuk desain grafis 
            adalah Adobe Photoshop CS6 dan Corel Drow berikut adalah contoh projek saya, di link ini 
            Projek Desain : 
            <a 
              href="https://github.com/Rizkyyoga20/ProjekDesainGrafis/blob/main/CDD.gif"
              class="text-blue-600 rounded-sm pl-2 pr-2 pt-0.2 pb-0.5"
            >Projek Desain</a>
          </p>
        </div>
          


      </div>
    </div>
</template>