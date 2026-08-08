<template>
  <aside
    :class="[
      'bg-card-dark border-r border-border-dark w-64 fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:translate-x-0',
      isOpen? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <div class="flex items-center justify-between h-16 px-6 border-b border-border-dark">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-blue-600 rounded-lg"></div>
        <span class="text-xl font-bold text-white">BlackPoint</span>
      </div>
      <button @click="$emit('update:isOpen', false)" class="lg:hidden p-1 rounded hover:bg-hover-dark">
        <X class="w-6 h-6" />
      </button>
    </div>

    <nav class="p-4 space-y-2">
      <RouterLink
        v-for="item in menu"
        :key="item.path"
        :to="item.path"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-hover-dark hover:text-white transition-colors"
        active-class="bg-blue-600/10 text-blue-500 font-medium"
        @click="$emit('update:isOpen', false)"
      >
        <component :is="item.icon" class="w-5 h-5" />
        {{ item.name }}
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { X, Home, BarChart3, Users, Settings } from 'lucide-vue-next'
import type { MenuItem } from '@/types'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  'update:isOpen': [value: boolean]
}>()

const menu: MenuItem[] = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Users', path: '/users', icon: Users },
  { name: 'Settings', path: '/settings', icon: Settings },
]
</script>
