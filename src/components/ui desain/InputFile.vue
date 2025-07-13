<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';

    defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'file',
    },
    value: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    });

    defineEmits(['input:value']);
</script>


<template>
    <div class="p-1">
        <p class="ml-5">{{ label }}</p>
        <input

            :id="id" 
            :type="type" 
            :value="value" 
            :placeholder="placeholder"
            @input="(e: Event) => $emit('input:value', (e.target as HTMLInputElement).value)" 
            class="border-none bg-orange-200 text-black w-[100%] rounded-lg pl-5 pr-5 pt-3 pb-3"
         />
    </div>
</template>
