<script setup lang="ts">
//import { reactive } from 'vue';
//import { storeStatus } from '../../../../interface/surat';
//import SelectOption from '../../../../ui desain/selectOption.vue';

//const statusAgenda = ref('');
/*
const statusOption = ref([
  { value: 'Sudah Selesai', text: 'Sudah Selesai' },
  { value: 'Masih Proses', text: 'Masih Proses' },
  { value: 'Disposisi', text: 'Disposisi' },
]);



const payload = reactive<storeStatus>({
  id: 0,
  idAgenda: 0,
  status:'',
  time:'',
});


async function TambahPelanggan() {
  try {
    const statusAgenda: storeStatus = {
      id: Number(payload.id),
      idAgenda: Number(payload.idAgenda),
      status: String(payload.status),
      time: String(payload.time),
    };
   await statusAgenda;
  } catch (error) {
    console.error(error);
  }
}
*/

</script>

<template>
  
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
          > ID Produk </th>
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
          > Nama Produk </th>
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
          > Stok </th>
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
          > Total Penjualan </th>
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
            style="width:200px;"
          > Keterangan </th>
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
          > Action </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">

        <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">
                        P-00001
                    </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">
                        Matcha Latte
                    </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span 
                    class="
                        px-2 
                        inline-flex 
                        text-xs 
                        leading-5 
                        font-semibold 
                        rounded-full 
                        bg-red-100 
                        text-red-800
                    "
                >
                    100
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div class="text-sm text-gray-500">
                    80
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div class="text-sm text-gray-500">
                    Matcha Latte disajikan dengan 100 ml air panas, Larutan tengah, 10 cube es batu
                    100 ml susu low fat, Lapisan atas,1 sachet (2 gram) Nescafe Americano, 100 ml air
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Opsi</a>
              </td>
        </tr>
  
      </tbody>
  </table>


  </div>
</template>