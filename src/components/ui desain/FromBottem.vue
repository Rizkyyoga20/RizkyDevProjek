<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
});

const emit = defineEmits(['click']);

function handleClick() {
  emit('click');
}

</script>



<template>
    <div class="m-1 mb-10">
        <button 
            :for="id" 
            type="submit" 
            class="
                text-amber-100 
                bg-blue-950 
                mt-2 
                mb-2 
                text-center 
                float-right
            " 
            style="
                padding:3px 10px; 
                border-radius:5px;
            " 
            @click="handleClick"
        >{{ label }}</button>
      </div>
    
</template>