<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from 'vue';
import { useModalPopUp } from '../../../../store/ModalPopUp';
import { useMenu1Store } from '../../../../store/menu';
import FromBottem from '../../../../ui desain/FromBottem.vue';
import { Pesanan } from '../../../../interface/data';
import HargaProduk from '../produk/hargaProduk.vue';
import RadioButtomStyle from '../../../../ui desain/radioButtomStyle.vue';
import RadioButtom from '../../../../ui desain/radioButtom.vue';

const Modal = useModalPopUp();
const Menu1Store = useMenu1Store();
const selectedPelanggan = ref(null);

const IDPeesanan = Menu1Store.dataMenus.length === 0 ? 0 : 
              Math.max(...Menu1Store.dataMenus.map(
                (
                  item: Pesanan
                ) => item.id
              ));
const newIDPesanan = IDPeesanan + 1;

const props = defineProps({
    ModalID: { type: Number, required: true },
});

const pesananOption = ref([
  { value: 'Belum Dibayar', text: 'Belum Dibayar' },
  { value: 'Lunas', text: 'Lunas' },
]);

//const isChecked = ref(pesananOption.value[0].value);

const payload = reactive<Pesanan>({
  id: newIDPesanan,
  idProdukPesanan: props.ModalID,
  jumlah: 0,
  status: '' as string,
  totalBayar: 0,
  idPelanggan: 0,
  time: new Date().toISOString(),
});


const Produks = computed(() => {
  return Menu1Store.ReadProduksByIdProduk(Number(props.ModalID))[0];
});

const harga = ref(0);


watchEffect(() => {
  if (Produks.value && Produks.value.harga) {
    harga.value = parseInt(Produks.value.harga);
    console.log('harga.value:', harga.value);
  } else {
    harga.value = 0;
  }
});

function Tambah() {
  payload.jumlah += 1;
  payload.totalBayar = Math.round(payload.jumlah * harga.value);
  console.log('payload.totalBayar:', payload.totalBayar);
}

function Kurang() {
  if (payload.jumlah > 0) {
    payload.jumlah -= 1;
    payload.totalBayar = Math.round(payload.jumlah * harga.value);
    console.log('payload.totalBayar:', payload.totalBayar);
  }
}


function refresh() {
  window.history.go(0);
}

async function PesanMenu() {
  try {
    const pesanMenu: Pesanan = {
      id: Number(payload.id),
      idProdukPesanan: Number(props.ModalID),
      idPelanggan: Number(payload.idPelanggan),
      jumlah: Number(payload.jumlah),
      totalBayar: Number(payload.totalBayar),
      status: String(pesananOption.value[0].value),
      time: String(payload.time)
    };
    await Menu1Store.handleCreateDataMenus(pesanMenu);
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
    <div 
        id="modalPesanan" 
        class="
            fixed 
            right-0 
            top-1/2 
            transform -translate-y-1/2 z-50 
            lg:w-1/2
            w-full 
            bg-white 
            bg-opacity-200 
            overflow-y-auto 
            h-screen 
            px-4
        "
    >
      <div class="relative top-5 bottom-5">
        <div class="flex justify-end p-2">
            <button 
                @click="refresh(); Modal.closeModal('modalPesanan')"
                type="button" 
                class="
                    text-gray-400 
                    bg-transparent 
                    hover:bg-gray-200 
                    hover:text-gray-900 
                    rounded-lg 
                    text-sm 
                    p-1.5 
                    ml-auto 
                    inline-flex 
                    items-center
                "
            >
            <svg 
                class="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="flex justify-center items-center">
            <div class="text-center" v-for="(List, index) in Menu1Store.ReadMenusById(props.ModalID)" :key="index">
              <div>
                <p>ID : {{List.idMeal}}</p>
                <img :src="''+List.strMealThumb" class="lg:w-1/2 w-[80%] mx-auto"/>
                <p>{{List.strMeal}}</p>
                <HargaProduk :idProduk="List.idMeal as any" />              

                <p class="text-gray-500 text-sm">
                  <button   
                    @click.prevent="Tambah" 
                    style="font-weight:500;" 
                    class="
                      pl-2 
                      pr-2 
                      m-1 
                      rounded-sm 
                      bg-blue-800 
                      text-white
                    "
                  >+</button>
                  <input 
                    v-model="payload.jumlah" 
                    class="
                      rounded-sm 
                      border 
                      border-black 
                      text-center 
                      w-10
                    " 
                    type="text" 
                  />
                  <button 
                    @click.prevent="Kurang" 
                    style="font-weight:500;" 
                    class="
                      pl-2 
                      pr-2 
                      m-1 
                      rounded-sm 
                      bg-blue-800 
                      text-white
                    "
                  >-</button>                
                </p>
                total Bayar : <b>Rp.{{ payload.totalBayar }}</b>
                <RadioButtomStyle v-model="payload.status" :options="pesananOption" title="Status Pembayaran" />
                                        
                <div 
                    v-for="(List, index) in Menu1Store.dataPelanggan" 
                    :key="index" 
                    class="
                        text-left 
                        p-1 
                        bg-slate-300 
                        m-1 
                        rounded-md 
                    "
                    style="font-size:12px;"
                >
                  <Action :idPelanggan="List.id"/>
                    <RadioButtom 
                    :type="'radio'" 
                    :value="List.id" 
                    :modelValue="selectedPelanggan" 
                    @update:modelValue="selectedPelanggan = $event; payload.idPelanggan = Number($event)" 
                    :name="'pelanggan'" 
                  />
                  
                  
                        <div class="p-1">
                          <b>Nama : </b> {{ List.nama }} |
                          <b>No.Telepon : </b> {{ List.noTelepon }}<br>
                        </div>
                </div>

                <FromBottem
                  @click.native="PesanMenu();" 
                  id="pesanMenu" 
                  label="Pesan" 
                />
              </div>
            </div>
        </div>
          


      </div>
    </div>
</template>