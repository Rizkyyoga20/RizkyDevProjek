<script setup lang="ts">
  import '../route';
</script>


<template>
<section class="py-20 mb-10" id="services">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-3">
            Service
        </h2>
        <p>
            Service atau layanan merujuk pada fitur yang disediakan oleh sebuah web. 
            Adapun service yang tersedia di halaman ini adalah sebagai berikut;
        </p>



        <RouterLink 
            to="/MenusApp" 
            class="
                bg-yellow-200 
                rounded-md
                float-start
                w-[150px] 
                h-[160px] 
                pt-2 
                mt-2 
                mr-1 
                transform transition duration-500 hover:scale-110
            "
        >

            <img 
                src="../../assets/img/kategori-makan.jpg" 
                style="
                    width:120px; 
                    height:120px; 
                    border-radius:50%; 
                    background:#c0c0c0;
                    margin-left:15px;
                    margin-right:15px;
                "
            ></img>
            <p 
                class="text-center pt-0.5" 
                style="font-size:15px; font-weight:bold;"
            >Menus App</p>
        </RouterLink>
    </div>  
</section>

</template>