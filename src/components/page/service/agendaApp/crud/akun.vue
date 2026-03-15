<script setup lang="ts">
import { reactive } from 'vue';
import FromBottem from '../../../../ui desain/FromBottem.vue';
import InputText from '../../../../ui desain/InputText.vue';
import InputNumber from '../../../../ui desain/InputNumber.vue';
import { Akun } from '../../../../interface/surat';
import InputPassword from '../../../../ui desain/InputPassword.vue';

const payload = reactive<Akun>({
    nik:'',
    username:'',
    password:'',
});


async function TambahPelanggan() {
  try {
    const akun: Akun = {
      nik: String(payload.nik),
      username: String(payload.username),
      password: String(payload.password),


    };
   await akun;
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <div class="pb-10">

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

    <InputPassword
      id="password" 
      label="password" 
      v-model="payload.password" 
      placeholder="Password" 
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