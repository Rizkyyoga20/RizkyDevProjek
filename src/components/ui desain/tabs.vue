<script setup lang="ts">
  import { ref } from 'vue';

  const tabs = ref([
    { title: 'Form', content: 'Form Data' },
    { title: 'Data', content: 'List Daftar' },
  ]);

  const currentIndex = ref(0);

  const showTab = (index: number) => {
    currentIndex.value = index;
  };
</script>

<template>
  <div>
    
    <div class="tab-buttons">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index" @click="showTab(index)" 
        :class="{ active: currentIndex === index }"
      >
        {{ tab.title }}
      </button>
    </div>

    <div class="tab-content">
      <div 
        v-for="(tab, index) in tabs" 
        :key="index" v-show="currentIndex === index"
      >
        {{ tab.content }}
      </div>
    </div>

  </div>
</template>

<style scoped>
.tab-buttons button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
}

.tab-buttons button.active {
  background-color: #007bff;
  color: #ffffff;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>