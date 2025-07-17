<script setup lang="ts">
import { ref, watch } from "vue";
import { useModalPopUp } from "../store/ModalPopUp";
import  ModalAboutUs  from "./modalAboutUs.vue";
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
            relative 
            w-full 
            min-h-[900px]
            bg-orange-200
        " 
        id="home"
    >
        <div 
            class="
                absolute 
                inset-0 
                opacity-70
            "
        >
            <img 
                src="../../assets/img/rizky.PNG" 
                alt="Background Image" 
                class="
                    float-end
                    rounded-full
                    w-[100px]
                    h-[100px]
                    lg:w-[350px]
                    lg:h-[350px]
                    lg:m-3 m-1
                " 
            />
    
        </div>
        
        <div 
            class="
                absolute 
                inset-9 
                flex 
                flex-col 
                md:flex-row 
                items-center 
                justify-between
            "
        >
            <div class="md:w-[70%] mb-4 md:mb-0">
                <h1 
                    class="
                        text-grey-700 
                        font-medium 
                        leading-tight 
                        mb-2
                        mt-10
                    "
                    style="font-family:Comic Sans MS; font-size:20px;"
                >Expert Me</h1>
                
                <p class="text-justify ml-3" style="font-size:15px;">
                    Saya merupakan seorang web developer yang memiliki  berbagai keterampilan teknis <i>(hard skills)</i> 
                    dan non-teknis <i>(soft skills)</i> dalam sebuah pekerjaan. Keterampilan utama meliputi pemahaman 
                    bahasa pemrograman seperti HTML, CSS, dan JavaScript, Typescript serta penguasaan <i>framework</i> serta berbagai 
                    macam <i>library</i> populer. kemampuan problem <i>solving</i>, komunikasi, dan pemahaman tentang prinsip 
                    desain <i>responsif</i>, serta dalam merancanag sebuah database dalam pembutan web 
                    baik dari segi <i>Front-end</i> atau <i>Back-end</i>. 
                </p>
                <p class="text-justify ml-3 mt-3" style="font-size:15px;">
                    <b><i>Front-end</i></b>
                    merupakan kerangka kerja berfokus pada antarmuka pengguna (UI) dan pengalaman pengguna 
                    (UX). Dalam membangun tampilan situs web yang dinamis dan interaktif. Adapun <i>framework</i> 
                    yang saya gunakan untuk mambanggun sebuah <i>Front-end</i>
                    yaitu;          
                </p>

                <ul 
                    class="list-disc ml-10"
                    style="font-weight:500; font-family:Comic Sans MS; font-size:15px;"
                >
                    <li>React mix Next.js</li>
                    <li>Vue.js mix Pinia</li>
                    <li>jQuery</li>
                </ul>

                <p class="text-justify ml-3 mt-3" style="font-size:15px;">
                    <b>Server <i>(Back-end)</i></b>
                    merupakan kerangka kerja berfokus pada logika aplikasi, pengelolaan data, dan komunikasi dengan server. 
                    Untuk membantu dalam menangani permintaan pengguna, mengakses database, dan mengelola alur kerja aplikasi. 
                    Adapun <i>framework</i> yang saya gunakan untuk mambanggun sebuah Server <i>(Back-end)</i> yaitu;    
                </p>
                
                <ul 
                    class="list-disc ml-10 mb-10"
                    style="font-weight:500; font-family:Comic Sans MS; font-size:15px;"
                >
                    <li>Node.js (Nest.js, Express.js)</li>
                    <li>Laravel (PHP)</li>
                    <li>Django (Python)</li>
                    <li>ORM (Prisma, typeORM, Sequelize)</li>
                </ul>





                <!--
                <p class="text-justify" style="font-size:20px;">
                    Kami merupakan kerangka kerja pembuatan template pada website, kami menayikan website 
                    lebih cepat karena sebagian besar elemen desain sudah tersedia. Selain itu kami 
                    meyediakan pilihan desain beragam template dengan berbagai gaya dan tampilan yang bisa 
                    dipilih sesuai kebutuhan. Template seringkali dirancang untuk kemudahan penggunaan,
                    bahkan bagi mereka yang tidak memiliki keahlian teknis. Adapun produk kami buat adalah
                    sebagai berikut; 
                </p>
                
                <ul 
                    class="list-disc ml-8 mb-5 mt-5"
                    style="font-weight:500; font-family:Comic Sans MS"
                >
                    <li>Wedding Frame Solution</li>
                    <li>Products Frame Solution</li>
                    <li>Design Frame Solution</li>
                </ul>
                -->

                <button 
                    @click="Modal.openModal('modalAboutUs')"
                    class="
                        px-6 py-3 
                        bg-[#c8a876] 
                        text-white 
                        rounded-full 
                        hover:bg-[#c09858]
                    ">About Us</button>
            </div>
        </div>
    </div>


</template>