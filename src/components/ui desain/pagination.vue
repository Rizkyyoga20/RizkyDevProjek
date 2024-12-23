<script setup lang="ts">

  const MaxPage = ['5','10','15','20']
  const JumPage = '100'


</script>


<template>
    <div class="card bg-neutral text-neutral-content">
      <div class="card-body gap-4">
        <p class="w-fit max-w-[15rem] break-words lg:max-w-[17rem]">
            <select>
                <option v-for="Page in MaxPage" v-bind:value="Page"  v-bind:label="Page"></option>
            </select>
        </p>
        <p class="justify-end"> Total Produk : {{ JumPage }}</p>
        <div class="card-actions justify-between">
        </div>
      </div>
    </div>
</template>


