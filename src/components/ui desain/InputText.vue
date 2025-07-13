<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
  
defineProps({
  id: { type: String, required: false },
  type: { type: String, required: false },
  modelValue: { type: String, required: false },
  placeholder: { type: String, required: false },
});
  
defineEmits(['update:modelValue']);
</script>

<template>
    <div class="p-1">
      <input
        :value="modelValue"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="border-none bg-orange-200 text-black w-[100%] rounded-lg pl-5 pr-5 pt-3 pb-3"
      />
    </div>
</template>
  

  