<script setup lang="ts">

</script>

<template>
    <div class="relative pb-1 bg-green-300 h-screen">

        <div 
            class="text-center bg-white w-[100%] text-red-700" 
            style="font-weight:500; font-size:20px; padding:20px; padding-top:75px;"
        >


            <RouterLink 
                class="bg-green-300 p-1"
                to="/AdminApp/"
                style="
                    font-weight:500;
                    display: block;
                    float:left;
                    border-radius:2px;
                "
            >
                <img class="w-5 m-auto" src="../../../../../assets/img/rumah.png" />
                <div style="font-size:8px; font-weight:600; text-align:center;">Dashboard</div>
            </RouterLink>



            Catatan
        </div>

    </div>
</template>