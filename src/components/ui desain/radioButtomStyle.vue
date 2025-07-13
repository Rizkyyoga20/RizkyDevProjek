<template>
    <div 
        class="
            bg-white 
            dark:bg-blue-600 
            justify-center 
            flex 
            flex-row 
            items-center
        "
    >
        <div 
            class="
                flex 
                flex-col 
                justify-between 
                toggle 
                items-center
            "
        >

            <div class="dark:text-white text-gray-900 font-medium mt-3">
                {{ title }}
            </div>

            <label 
                for="toggle-switch" 
                class="flex items-center cursor-pointer"
            >
                <div class="relative">
                    <input 
                        type="checkbox" 
                        name="toggle-switch" 
                        id="toggle-switch" 
                        class="checkbox hidden" 
                        :checked="modelValue === options![1].value" 
                        @change="
                            $emit('update:modelValue', 
                            (
                                $event.target as HTMLInputElement).checked ? 
                                options![1].value : options![0].value
                            )
                        "
                    >
                    <div 
                        class="
                            block 
                            border-[1px] 
                            dark:border-white 
                            border-blue-600 
                            w-14 h-8 
                            rounded-full
                        " 
                    ></div>
                    <div 
                        class="
                            dot 
                            absolute 
                            left-1 
                            top-1 
                            dark:bg-white 
                            bg-blue-600 
                            w-6 h-6 
                            rounded-full 
                            transition
                        " 
                        :style="
                            { 
                                transform: modelValue === options![1].value ? 
                                'translateX(100%)' : 'translateX(0%)' 
                            }
                        "
                    ></div>
                </div>
            </label>            
            <div class="dark:text-white text-gray-900 font-medium mb-3">
                {{ modelValue }}
            </div>
      </div>
    </div>
</template>
  
  
<script setup lang="ts">
import { PropType } from 'vue';
const props = defineProps({
    modelValue: String,
    options: Array as PropType<{ value: string; text: string }[]>,
    title: String,
});
console.log(props)  
const emit = defineEmits(['update:modelValue']);
</script>
  