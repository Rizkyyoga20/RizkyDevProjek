<script setup lang="ts">
import { onMounted } from 'vue';
import { useSuratStore } from '../../../../store/surat';
import Search from '../../../../ui desain/search.vue';
import Pagidation from '../../../../ui desain/pagidation.vue';



const list = useSuratStore();

onMounted(() => {
    list.getListAgenda();
});

</script>

<template>


  <div class="w-full" style="margin-top:270px;">
    <div class="ml-1 mr-1 lg:ml-20 lg:mr-20">

      <Search 
        Id="Search" 
        Type="Search" 
        Placeholder="Search" 
        :Search="list.Search" 
        @update:Search="(e) => list.handleSearch(e.target.value)" 
      />


      <Pagidation
        @handleBack="list.handleBack"
        @handleNext="list.handleNext"
        @handlePages="list.handlePages"
        @change:handleMaxPageChange="list.handleMaxPageChange"
        @v-model="list.MaxPage"
        :MaxPage="list.MaxPage"
        :MinPage="list.MinPage"                 
        :TotalPage="list.GetTotalPage"   
        :TotalData="list.TotalPage"                           
      />

      <div v-for="List in list.Pagidation">
        {{ List.tujuan }} |  {{ List.jenisSurat }}
      </div>

    </div>              

  </div>


  <div class="pb-10 overflow-x-auto bg-gray-50 w-full">

  <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <thead class="bg-gray-50">
        <tr>
          <th 
            scope="col" 
            class="px-6 
              py-3 
              text-left 
              text-xs 
              font-medium 
              text-gray-500 
              uppercase 
              tracking-wider
            "
          > Pengirim </th>
          <th 
            scope="col" 
            class="
              px-6 
              py-3 
              text-left 
              text-xs 
              font-medium 
              text-gray-500 
              uppercase 
              tracking-wider
            "
          > Surat </th>
          <th 
            scope="col" 
            class="
              px-6 
              py-3 
              text-left 
              text-xs 
              font-medium 
              text-gray-500 
              uppercase 
              tracking-wider
            "
          > Status </th>
          <th 
            scope="col" 
            class="
              px-6 
              py-3 
              text-left 
              text-xs 
              font-medium 
              text-gray-500 
              uppercase 
              tracking-wider
            "
          > Nomor Surat </th>
          <th 
            scope="col" 
            class="
              px-6 
              py-3 
              text-left 
              text-xs 
              font-medium 
              text-gray-500 
              uppercase 
              tracking-wider
            "
          > Tanggal </th>
          <th 
            scope="col" 
            class="
              px-6 
              py-3 
              text-left 
              text-xs 
              font-medium 
              text-gray-500 
              uppercase 
              tracking-wider
            "
          > History </th>
          <th 
            scope="col" 
            class="
              px-6 
              py-3 
              text-left 
              text-xs 
              font-medium 
              text-gray-500 
              uppercase 
              tracking-wider
            "
          > 
        </th>
        </tr>
      </thead>
      <tbody 
        class="bg-white divide-y divide-gray-200"
        v-for="List in list.Pagidation"
      >

        <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                          <img 
                            class="h-10 w-10 rounded-full" 
                            src="../../../../../assets/img/icon-pelanggan.png" 
                            alt=""
                          >
                      </div>
                      <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ List.noSurat }} | {{ List.noSurat }}
                          </div>
                          <div class="text-sm text-gray-500">
                              rikas21@gmail.com | 0821362736273
                          </div>
                      </div>
                  </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Prihal : {{ List.perihal }}</div>
                  <div class="text-sm text-gray-500">{{ List.tujuan }} |  {{ List.jenisSurat }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ List.statusKirim }}
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ List.noSurat }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Tanggal surat : {{ List.tglSurat }} <br>
                Tanggal agenda : {{ List.tglAgenda }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
              </td>
        </tr>
  
      </tbody>
  </table>


  </div>
</template>