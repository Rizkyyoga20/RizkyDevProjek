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
  modelValue: {
    type: String,
    required: true,
  },
  options: {
    type: Array<{ value: string; text: string }>,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

function updateValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLSelectElement).value);
}
</script>

<template>
  <nav 
    class="bg-orange-200 px-1 py-1 pl-3 pr-3 ml-1 mb-1 w-[99%]"
    style="border-radius:5px;"
  >
    <select
      class="border-none bg-orange-200 text-black w-[100%]"
      :value="modelValue"
      @change="updateValue"
    >
      <option value="">{{ label }}</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </nav>
</template>
