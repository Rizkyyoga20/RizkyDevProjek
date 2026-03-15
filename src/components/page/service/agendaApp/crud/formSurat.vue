<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useMenu1Store } from '../../../../store/menu';
import FromBottem from '../../../../ui desain/FromBottem.vue';
import InputText from '../../../../ui desain/InputText.vue';
import InputNumber from '../../../../ui desain/InputNumber.vue';
import TextArea from '../../../../ui desain/TextArea.vue';
import { bukuAgenda } from '../../../../interface/surat';
import SelectOption from '../../../../ui desain/selectOption.vue';


const Menu1Store = useMenu1Store();
const maxId = Menu1Store.dataPelanggan.length === 0 ? 0 : 
              Math.max(...Menu1Store.dataPelanggan.map(
                (
                  item: bukuAgenda
                ) => item.noSurat
              ));
const newId = maxId + 1;

const tujuanSurat = ref('');
const tujuanOption = ref([
  { value: 'Pangdam', text: 'Pangdam' },
  { value: 'Kesdam', text: 'Kesdam' },
  { value: 'Aspers', text: 'Aspers' },
]);

const payload = reactive<bukuAgenda>({
  noSurat: newId,
  nik:'',
  tglAgenda:'',
  jenisSurat:'',
  pengirim:'',
  perihal:'',
  tujuan:'',
  statusKirimrn:'',
  nomorTelepon:'',
  email:'',
});


async function TambahPelanggan() {
  try {
    const agenda: bukuAgenda = {
      noSurat: Number(payload.noSurat),
      nik: String(payload.nik),
      tglAgenda: String(payload.tglAgenda),
      jenisSurat: String(payload.jenisSurat),
      pengirim: String(payload.pengirim),
      perihal: String(payload.perihal),
      tujuan: String(payload.tujuan),
      statusKirimrn: String(payload.statusKirimrn),
      nomorTelepon: String(payload.nomorTelepon),
      email: String(payload.email),


    };
   await agenda;
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <div class="pb-10">
    <TextArea 
      id="perihal" 
      label="perihal" 
      placeholder="Perihal Surat" 
      v-model="payload.perihal" 
    />

    <InputText
      id="pengirim" 
      label="pengirim" 
      v-model="payload.pengirim" 
      placeholder="Pengirim" 
    />

    <SelectOption
      class="pt-3 pb-3" 
      id="tujuanSurat" 
      label="-- Tujuan Surat --" 
      :modelValue="tujuanSurat" 
      @update:modelValue="tujuanSurat = $event" 
      :options="tujuanOption" 
    />

    <InputText
      id="jenisSurat" 
      label="jenisSurat" 
      v-model="payload.jenisSurat" 
      placeholder="Jenis Surat" 
    />

    <InputText
      id="email" 
      label="email" 
      v-model="payload.email" 
      placeholder="Email" 
    />

    <InputNumber 
      id="nomorTelepon" 
      label="nomorTelepon" 
      v-model="payload.nomorTelepon" 
      placeholder="Nomor Telepon" 
    />

    <div class="w-[100%]">
      <FromBottem 
        class="float-end" 
        id="agenda" 
        label="Save" 
        @click.native="TambahPelanggan();"
      />
    </div>
  </div>
</template>