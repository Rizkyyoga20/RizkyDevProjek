<script setup lang="ts">
import { reactive } from 'vue';
import { useMenu1Store } from '../../../../store/menu';
import { AddPelanggan } from '../../../../interface/data';
import InputText from '../../../../ui desain/InputText.vue';
import InputNumber from '../../../../ui desain/InputNumber.vue';
import TextArea from '../../../../ui desain/TextArea.vue';
import FromBottem from '../../../../ui desain/FromBottem.vue';

const props = defineProps({
    idPelanggan: { type: Number, required: true },
});

const Menu1Store = useMenu1Store();

const payload = reactive<AddPelanggan>({
  id: 0,
  nama: '',
  alamat: '',
  noTelepon: '',
  email: '',
});


async function EditPelanggan() {
  try {
    const pelanggan: AddPelanggan = {
      id: Number(payload.id),
      nama: String(payload.nama),
      alamat: String(payload.alamat),
      noTelepon: String(payload.noTelepon),
      email: String(payload.email),
    };
    await Menu1Store.handleUpdateDataPelanggan(props.idPelanggan, pelanggan);
  } catch (error) {
    console.error(error);
  }
}


</script>

<template>

          <div 
            class="w-[100%] p-2 text-center" 
          >
           
          <div class="pb-10">
            <InputText
              id="nama_pelanggan" 
              label="nama_pelanggan" 
              v-model="payload.nama" 
              placeholder="Nama Pelanggan" 
            />
        
            <InputText
              id="email" 
              label="email" 
              v-model="payload.email" 
              placeholder="Email" 
            />
        
            <InputNumber 
              id="no_telepon" 
              label="no_telepon" 
              v-model="payload.noTelepon" 
              placeholder="Nomor Telepon" 
            />
        
            <TextArea 
              id="alamat" 
              label="alamat" 
              placeholder="Alamat Pelanggan" 
              v-model="payload.alamat" 
            />
        
            <div class="w-[100%]">
              <FromBottem 
                class="float-end" 
                id="pelanggan" 
                label="Save" 
                @click.native="EditPelanggan();"
              />
            </div>
          </div>
        
          </div>

</template>
