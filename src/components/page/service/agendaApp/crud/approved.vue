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
  <div class="pb-10 overflow-x-auto bg-gray-50">

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
      <tbody class="bg-white divide-y divide-gray-200">

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
                              1672026473647 | Rika Sari
                          </div>
                          <div class="text-sm text-gray-500">
                              rikas21@gmail.com | 0821362736273
                          </div>
                      </div>
                  </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Prihal : acara dinas</div>
                  <div class="text-sm text-gray-500">Pengdam | BP (PUSAT)</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      ACC
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                B/12/III/2026
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  16/11/2025
              </td>
              <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
              </td>
        </tr>
  
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
                            1672026473647 | Rika Sari
                        </div>
                        <div class="text-sm text-gray-500">
                            rikas21@gmail.com | 0821362736273
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Prihal : acara dinas</div>
                <div class="text-sm text-gray-500">Pengdam | BP (PUSAT)</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    ACC
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              B/12/III/2026
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                16/11/2025
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a 
                  href="#" 
                  class="
                    text-indigo-600 
                    hover:text-indigo-900
                  "
                >View</a>
            </td>
      </tr>

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
                            1672026473647 | Rika Sari
                        </div>
                        <div class="text-sm text-gray-500">
                            rikas21@gmail.com | 0821362736273
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Prihal : acara dinas</div>
                <div class="text-sm text-gray-500">Pengdam | BP (PUSAT)</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    ACC
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            B/12/III/2026
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                16/11/2025
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
            </td>
        </tr>

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
                            1672026473647 | Rika Sari
                        </div>
                        <div class="text-sm text-gray-500">
                            rikas21@gmail.com | 0821362736273
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Prihal : acara dinas</div>
                <div class="text-sm text-gray-500">Pengdam | BP (PUSAT)</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    ACC
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              B/12/III/2026
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                16/11/2025
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
            </td>
        </tr>


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
                            1672026473647 | Rika Sari
                        </div>
                        <div class="text-sm text-gray-500">
                            rikas21@gmail.com | 0821362736273
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Prihal : acara dinas</div>
                <div class="text-sm text-gray-500">Pengdam | BP (PUSAT)</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    ACC
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              B/12/III/2026
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                16/11/2025
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
            </td>
        </tr>
  
      </tbody>
  </table>


  </div>
</template>