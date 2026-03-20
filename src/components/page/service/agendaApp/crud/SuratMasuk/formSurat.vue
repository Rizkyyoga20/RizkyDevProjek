<script setup lang="ts">
import { reactive, ref } from 'vue';
import FromBottem from '../../../../../ui desain/FromBottem.vue';
import InputText from '../../../../../ui desain/InputText.vue';
import TextArea from '../../../../../ui desain/TextArea.vue';
import { bukuAgenda } from '../../../../../interface/surat';
import SelectOption from '../../../../../ui desain/selectOption.vue';

const tujuanSurat = ref('');
const jenisSurat = ref('');
const tujuanOption = ref([
  { value: 'Pangdam', text: 'Pangdam' },
  { value: 'Kesdam', text: 'Kesdam' },
  { value: 'Aspers', text: 'Aspers' },
]);

const jenisOption = ref([
  { value: 'BP(PUSAT)', text: 'BP(PUSAT)' },
  { value: 'BM', text: 'BM' },
  { value: 'BU', text: 'BU' },
  { value: 'ST', text: 'ST' },
  { value: 'KEP', text: 'KEP' },
  { value: 'SPRINT', text: 'SPRINT' },
  { value: 'SPENG', text: 'SPENG' },
  { value: 'ND/SE/SI', text: 'ND/SE/SI' },
  { value: 'UNDANGAN', text: 'UNDANGAN' },
]);



const payload = reactive<bukuAgenda>({
  noSurat:'',
  nik:'',
  tglAgenda:'',
  jenisSurat:'',
  pengirim:'',
  perihal:'',
  tujuan:'',
  statusKirimrn:'',
});


async function TambahPelanggan() {
  try {
    const agenda: bukuAgenda = {
      noSurat: String(payload.noSurat),
      nik: String(payload.nik),
      tglAgenda: String(payload.tglAgenda),
      jenisSurat: String(payload.jenisSurat),
      pengirim: String(payload.pengirim),
      perihal: String(payload.perihal),
      tujuan: String(payload.tujuan),
      statusKirimrn: String(payload.statusKirimrn),
    };
   await agenda;
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>

<div class="w-[100%] p-2">
  <InputText
    id="noSurat" 
    label="noSurat" 
    v-model="payload.noSurat" 
    placeholder="Nomor Surat" 
  />

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

    <SelectOption
      class="pt-3 pb-3" 
      id="jenisSurat" 
      label="-- Jenis Surat --" 
      :modelValue="jenisSurat" 
      @update:modelValue="jenisSurat = $event" 
      :options="jenisOption" 
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
</div>


</template>