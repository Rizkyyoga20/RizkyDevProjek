<script setup lang="ts">
import { reactive } from 'vue';
import { storeStatus } from '../../../../interface/surat';
//import SelectOption from '../../../../ui desain/selectOption.vue';
import { useMenu1Store } from '../../../../store/menu';

//const statusAgenda = ref('');
const Menu1Store = useMenu1Store();

/*
const statusOption = ref([
  { value: 'Sudah Selesai', text: 'Sudah Selesai' },
  { value: 'Masih Proses', text: 'Masih Proses' },
  { value: 'Disposisi', text: 'Disposisi' },
]);
*/

const maxId = Menu1Store.dataPelanggan.length === 0 ? 0 : 
              Math.max(...Menu1Store.dataPelanggan.map(
                (
                  item: storeStatus
                ) => item.id
              ));
const newId = maxId + 1;

const payload = reactive<storeStatus>({
  id: newId ,
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

</script>

<template>
  <div class="pb-10">

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
          > Nome </th>
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
          > Produto </th>
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
          > Tipo </th>
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
          > Lote </th>
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
          > Quantidade </th>
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
          > Ações </th>
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
                          <img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="">
                      </div>
                      <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                              Mariangela Assis
                          </div>
                          <div class="text-sm text-gray-500">
                              mariangela21@gmail.com
                          </div>
                      </div>
                  </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Fresubin Energy 1000ML</div>
                  <div class="text-sm text-gray-500">Fresenius</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Entrada
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2AGAAA001D
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  16 UN
              </td>
              <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Ver detalhes</a>
                  
              </td>
          </tr>
  
  
  
          <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="">
                      </div>
                      <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                              Julia Lima
                          </div>
                          <div class="text-sm text-gray-500">
                             julia@santacasabh.org.br
                          </div>
                      </div>
                  </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Novasource Senior 1000ML</div>
                  <div class="text-sm text-gray-500">Nestle</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Saída
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  3596SPZA70
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2 UN
              </td>
              <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Ver detalhes</a>
                  <a href="#" class="ml-2 text-red-600 hover:text-red-900"></a>
              </td>
          </tr>
  
  
  
          <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="">
                      </div>
                      <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                              Miriam Alves
                          </div>
                          <div class="text-sm text-gray-500">
                              miriam@santacasabh.org.br
                          </div>
                      </div>
                  </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Nutren Control Chocolate 380G</div>
                  <div class="text-sm text-gray-500">Nestle</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Entrada
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2AGAAA001E	
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  100 UN
              </td>
              <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Ver detalhes</a>
                  <a href="#" class="ml-2 text-red-600 hover:text-red-900"></a>
              </td>
          </tr>
  
  
  
          <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="">
                      </div>
                      <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                              Isabel Gonçalves
                          </div>
                          <div class="text-sm text-gray-500">
                              isabel@santacasabh.org.br
                          </div>
                      </div>
                  </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Diben 1.5 1000ML</div>
                  <div class="text-sm text-gray-500">Fresenius</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Saída
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    SEPUAB009A
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5 UN
              </td>
              <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Ver detalhes</a>
                  <a 
                    href="#" 
                    class="ml-2 text-red-600 hover:text-red-900"
                    @click.native="TambahPelanggan();"
                  ></a>
              </td>
          </tr>
  
  
  
  
          <!-- More rows... -->
  
      </tbody>
  </table>


  </div>
</template>