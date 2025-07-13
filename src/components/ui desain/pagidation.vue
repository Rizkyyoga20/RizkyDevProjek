<script setup lang="ts">
  defineProps({
    handleBack: Number,
    handleNext: Number,
    handlePages: Number,
    handleMaxPageChange: Number,
    MaxPage: Number, 
    MinPage: Number, 
    TotalPage: Number, 
    TotalData: Number,
  })

  defineEmits(['change:handleMaxPageChange','handleBack','handleNext','handlePages']);

</script>

<template>
  <div class="flex justify-normal" style="font-size:10px; font-weight:bold;">
    <nav class="bg-orange-200 px-1 py-1 ml-1" style="border-radius:5px;">
        <ul class="flex text-gray-600 py-1">

            <li>
                <a href="#"
                   class="
                      px-2 
                      py-1 
                      hover:bg-blue-700 
                      hover:text-yellow-50 
                    "
                    style="border-radius:5px;"
                    @click.prevent="$emit('handleBack')"
                >Back</a>
            </li>

            <li 
              v-for="page in TotalPage" :key="page" 
              @click.prevent="$emit('handlePages', page)"
            >
              <a 
                href="#"
                style="border-radius:5px;" 
                class="
                  px-2 py-1 
                  hover:bg-blue-700 
                  hover:text-yellow-50" 
                :class="{ 'bg-blue-700 text-yellow-50': MinPage === page }" 
              > 
                {{ page }} 
              </a>
            </li>
                      
            <li>
              <a href="#"
                class="
                  px-2 
                  py-1 
                  hover:bg-blue-700 
                  hover:text-yellow-50 
                "
                style="border-radius:5px;"
                @click.prevent="$emit('handleNext')"
              >Next</a>
            </li>

        </ul>
    </nav>


    <nav 
      class="
        bg-orange-200 
        px-1 
        py-1 
        pl-3 
        pr-3 
        ml-1
      "
      style="border-radius:5px;"
      >
      <ul class="flex text-gray-600 py-1">
      <li>Page 
        <select 
          class="
            border-none 
            bg-orange-200
          " 
          :v-model.number="MaxPage" 
          @change="$emit('change:handleMaxPageChange', $event)"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>  
      </li>
      </ul>
    </nav>
  </div>

  <div 
    class="
      text-left 
      pl-2 
      relative
    " 
    style="
      font-size:10px; 
      font-weight:bold;
    "
  >
    Page : {{ MinPage }} / {{ TotalPage }} Dari {{ TotalData }} Data
  </div>


</template>


