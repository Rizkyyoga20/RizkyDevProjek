<script setup lang="ts">
import { reactive, ref } from 'vue';
import FromBottem from '../../../../../ui desain/FromBottem.vue';
import InputText from '../../../../../ui desain/InputText.vue';
import TextArea from '../../../../../ui desain/TextArea.vue';
import { bukuAgenda } from '../../../../../interface/surat';
import SelectOption from '../../../../../ui desain/selectOption.vue';
import InputDate from '../../../../../ui desain/InputDate.vue';
import { useSuratStore } from '../../../../../store/surat';

const SuratAgendaStore = useSuratStore();


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


const payloadAddSurat = reactive<Omit<bukuAgenda, 'idAgenda' | 'tglAgenda'>>({
  noSurat: '',
  nik: '',
  tglSurat: '',
  jenisSurat: '',
  pengirim: '',
  perihal: '',
  tujuan: '',
  statusKirim: 'Belum'
})

async function TambahSurat() {
  try {
    // 2. Kirim langsung, tanpa .value
    await SuratAgendaStore.tambahAgenda(payloadAddSurat)
    
    // Reset form pake Object.assign
    Object.assign(payloadAddSurat, {
      noSurat: '',
      nik: '',
      tglSurat: '',
      jenisSurat: '',
      pengirim: '',
      perihal: '',
      tujuan: '',
      statusKirim: 'Belum'
    })
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>

<div class="w-[100%] p-2">
  <InputText
    id="noSurat" 
    label="noSurat" 
    v-model="payloadAddSurat.noSurat" 
    placeholder="Nomor Surat" 
  />

  <div class="pb-10">
    <TextArea 
      id="perihal" 
      label="perihal" 
      placeholder="Perihal Surat" 
      v-model="payloadAddSurat.perihal" 
    />

    <InputText
      id="pengirim" 
      label="pengirim" 
      v-model="payloadAddSurat.pengirim" 
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
    <p
      class="ml-3" 
      style="font-weight:500; font-size:15px; text-align:left;"
    >* Tanggal surat</p>
    <InputDate 
      id="tglSurat" 
      label="Tanggal Surat" 
      v-model="payloadAddSurat.tglSurat" 
    />
    
    <div class="w-[100%]">
      <FromBottem 
        class="float-end" 
        id="agenda" 
        label="Save"
        @click="TambahSurat"
      />
    </div>
  </div>
</div>


</template>