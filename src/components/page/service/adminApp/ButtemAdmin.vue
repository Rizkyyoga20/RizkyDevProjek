<script setup lang="ts">

</script>


<template>



    <div class="grid lg:grid-cols-4 gap-2 p-3 relative w-full">
        <RouterLink to="/AdminApp/Export" class="bg-green-200">
            <div 
                class="
                    float-right 
                    bg-blue-400
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                    
            >3</div>
            <img src="../../../../assets/img/icon-save.png" class="w-10 float-left m-2" />
            <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Export</p>
        </RouterLink>

        <RouterLink to="/AdminApp/Pesanan" class="bg-green-200">
            <div 
                class="
                    float-right 
                    bg-green-500
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                    
            >5</div>
            <img src="../../../../assets/img/data.png" class="w-10 float-left m-2" />
            <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Pesanan</p>
        </RouterLink>

        <RouterLink to="/AdminApp/Catatan" class="bg-green-200">
            <div 
                class="
                    float-right 
                    bg-yellow-300 
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                    
            >5</div>
            <img src="../../../../assets/img/chat.png" class="w-10 float-left m-2" />
            <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Catatan</p>
        </RouterLink>


        <RouterLink to="/AdminApp/Produk" class="bg-green-200">
            <div 
                class="
                    float-right 
                    bg-slate-500
                    text-white
                "
                style="
                    padding:3px 7px;
                    border-radius:0px 0px 0px 10px;
                "
                        
            >4</div>
                <img 
                    src="../../../../assets/img/icon-pelanggan.png" 
                    class="w-10 float-left m-2" 
                />
                <p class="p-3" style="font-weight:500; font-size:20px; text-align:left;">Produk</p>
        </RouterLink>

    </div>

</template>
