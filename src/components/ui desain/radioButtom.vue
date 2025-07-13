<template>
    <label 
        class="
            has-[:checked]:bg-white/30 
            has-[:checked]:text-indigo-900 
            has-[:checked]:ring-2 
            cursor-pointer 
            bg-white/40 
            hover:bg-white/20 
            w-7 p-1 
            rounded-md 
            flex 
            justify-between 
            items-center 
            shadow
            float-start
            mr-2
        "
    >
    <input 
        :type="type" 
        :value="value" 
        :name="'pelanggan'" 
        :checked="modelValue === value" 
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" 
        class="checked:border-indigo-500 h-5 w-5"
    />
  
    </label>
</template>
  
<script setup lang="ts">
  interface Props {
    type: string;
    value: string | number;
    modelValue: string | number | null;
  }
  
  defineProps<Props>();
  
  defineEmits(['update:modelValue']);
</script>
  