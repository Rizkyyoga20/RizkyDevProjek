<script setup lang="ts">
  import useModal from '../interface/useModal'


  const props = defineProps<{
    title: string
    id?: number
  }>()

  const { modalRef, closeModal } = useModal()


  console.log(props.title)
  console.log(props.id)

</script>

<template>
  <aside 
    ref="modalRef"
    class="
      Modal-popup
      text-gray-800 
      bg-gray-700
      fixed
      py-4  
      top-0 
      right-0
      h-screen
    "
  >
    <button 
      @click="closeModal" 
      class="
        right-0 
        justify-end
        text-red-600
        text-3x1
        pr-3
        fixed
      "
    >X</button>
    <h4>Test Model</h4>
    {{ props.id }}
    {{ props.title }}
  </aside>
</template>


<style scoped>
  .Modal-popup{
    width:50%;
    z-index:1;
  }
  
  @media screen and (max-width: 992px) {
    .Modal-popup{
          width:100%;
    }
  }
</style>