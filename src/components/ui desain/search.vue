<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    Id: String,
    Placeholder: String,
    Type: String,
    Search: String,
    handleSearch: String,
})

defineEmits(['handleSearch', 'update:Search'])

</script>


<template>
    <div class="p-1">
        <input
            :value="Search" 
            :id="Id" 
            :type="Type" 
            :placeholder="Placeholder" 
            @input="(e) => $emit('update:Search', e)"
  
            class="
                text-black
                bg-orange-200
                pl-5 pr-5 pt-3 pb-3
                w-[100%]
            "
            style="border-radius:10px;"
         />
    </div>
</template>
