<script setup lang="ts">
import { reactive, ref } from 'vue';
import { storeStatus } from '../../../../interface/surat';
import SelectOption from '../../../../ui desain/selectOption.vue';
import { useMenu1Store } from '../../../../store/menu';

const statusAgenda = ref('');
const Menu1Store = useMenu1Store();

const statusOption = ref([
  { value: 'Sudah Selesai', text: 'Sudah Selesai' },
  { value: 'Masih Proses', text: 'Masih Proses' },
  { value: 'Disposisi', text: 'Disposisi' },
]);


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

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Jane Doe</td>
            <td class="px-6 py-4 whitespace-nowrap">jane@example.com</td>
            <td class="px-6 py-4 whitespace-nowrap">Admin</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
          
              <SelectOption
                class="pt-3 pb-3 w-45" 
                id="tujuanSurat" 
                label="-- Tujuan Surat --" 
                :modelValue="statusAgenda" 
                @update:modelValue="statusAgenda = $event" 
                :options="statusOption" 
                @click.native="TambahPelanggan();"
              /> 

            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
            <td class="px-6 py-4 whitespace-nowrap">john@example.com</td>
            <td class="px-6 py-4 whitespace-nowrap">User</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap w-95">
              <SelectOption
                class="pt-3 pb-3 w-45" 
                id="tujuanSurat" 
                label="-- Tujuan Surat --" 
                :modelValue="statusAgenda" 
                @update:modelValue="statusAgenda = $event" 
                :options="statusOption" 
                @click.native="TambahPelanggan();"
              />   
            </td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>