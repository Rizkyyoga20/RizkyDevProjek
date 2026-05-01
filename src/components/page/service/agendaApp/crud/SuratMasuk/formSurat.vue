<script setup lang="ts">
import { reactive, ref } from 'vue';
import FromBottem from '../../../../../ui desain/FromBottem.vue';
import InputText from '../../../../../ui desain/InputText.vue';
import TextArea from '../../../../../ui desain/TextArea.vue';
import { bukuAgenda } from '../../../../../interface/surat';
import SelectOption from '../../../../../ui desain/selectOption.vue';
import InputDate from '../../../../../ui desain/InputDate.vue';
import { useSuratStore } from '../../../../../store/surat';
import InputNumber from '../../../../../ui desain/InputNumber.vue';

const SuratAgendaStore = useSuratStore();
const maxId = SuratAgendaStore.ListAgenda.length === 0 ? 0 : 
              Math.max(...SuratAgendaStore.ListAgenda.map(
                (
                  item: bukuAgenda
                ) => item.id
              ));
const newId = maxId + 1;

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
  id: newId ,
  noSurat: '',
  nik: '',
  tglSurat: '',
  jenisSurat: '',
  pengirim: '',
  perihal: '',
  tujuan: '',
  statusKirim: ''
})

async function TambahSurat() {
  try {
    await SuratAgendaStore.tambahAgenda(payloadAddSurat)
    Object.assign(payloadAddSurat, {
        id: Number(payloadAddSurat.id),
        noSurat: String(payloadAddSurat.noSurat),
        nik: String(payloadAddSurat.nik),
        tglSurat: String(payloadAddSurat.tglSurat),
        jenisSurat: String(payloadAddSurat.jenisSurat),
        pengirim: String(payloadAddSurat.pengirim),
        perihal: String(payloadAddSurat.perihal),
        tujuan: String(payloadAddSurat.tujuan),
        statusKirim: String(payloadAddSurat.statusKirim),
    })

  } catch (error) {

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

    <InputNumber
      id="nik" 
      label="nik" 
      v-model="payloadAddSurat.nik" 
      placeholder="Nik Pengirim" 
    />

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
      :modelValue="payloadAddSurat.tujuan" 
      @update:modelValue="payloadAddSurat.tujuan = $event" 
      :options="tujuanOption" 
    />

    <SelectOption
      class="pt-3 pb-3" 
      id="jenisSurat" 
      label="-- Jenis Surat --" 
      :modelValue="payloadAddSurat.jenisSurat" 
      @update:modelValue="payloadAddSurat.jenisSurat = $event" 
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


</template>