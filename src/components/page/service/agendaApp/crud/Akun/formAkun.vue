<script setup lang="ts">
import { reactive, ref } from 'vue';
import FromBottem from '../../../../../ui desain/FromBottem.vue';
import InputText from '../../../../../ui desain/InputText.vue';
import InputNumber from '../../../../../ui desain/InputNumber.vue';
import { Akun } from '../../../../../interface/surat';
import InputPassword from '../../../../../ui desain/InputPassword.vue';
import SelectOption from '../../../../../ui desain/selectOption.vue';


const statusAkses = ref('');

const aksesOption = ref([
  { value: 'Admin Pusat', text: 'Admin Pusat' },
  { value: 'Staff Pengirim', text: 'Staff Pengirim' },
  { value: 'Pimpinan', text: 'Pimpinan' },
]);

const payload = reactive<Akun>({
    nik:'',
    username:'',
    password:'',
    status_akses:'',
    nomorTelepon:'',
    email:'',
});

async function TambahAkun() {
  try {
    const akun: Akun = {
      nik: String(payload.nik),
      username: String(payload.username),
      password: String(payload.password),
      status_akses: String(payload.status_akses),
      nomorTelepon: String(payload.nomorTelepon),
      email: String(payload.email),
    };
   await akun;
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <div class="w-[100%] p-2">

    <InputNumber 
      id="nik" 
      label="nik" 
      v-model="payload.nik" 
      placeholder="NIK" 
    />

    <InputText
      id="username" 
      label="username" 
      v-model="payload.username" 
      placeholder="Username" 
    />

    <SelectOption
      class="pt-3 pb-3" 
      id="statusAkses" 
      label="-- Status Akses --" 
      :modelValue="statusAkses" 
      @update:modelValue="statusAkses = $event" 
      :options="aksesOption" 
    />

    <InputPassword
      id="password" 
      label="password" 
      v-model="payload.password" 
      placeholder="Password" 
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
        @click.native="TambahAkun();"
      />
    </div>
  </div>
</template>