import { defineStore } from 'pinia'
import { ref } from 'vue'
import { AddHarga } from '../interface/data'

export const useStore = defineStore('store', () => {

  const menusStore = localStorage.getItem('m')
  const produkStore = localStorage.getItem('p')
  const pelangganStore = localStorage.getItem('pel')

  const dataMenus = ref(menusStore ? JSON.parse(menusStore) : [])
  const dataProduks = ref(produkStore ? JSON.parse(produkStore) : [])
  const dataPelanggan = ref(pelangganStore ? JSON.parse(pelangganStore) : [])

  
  //menu
  function createDataMenus(newData: any) {
    dataMenus.value.push(newData)
    localStorage.setItem('m', JSON.stringify(dataMenus.value))
  }

  function readDataMenus() {
    return dataMenus.value
  }

  function updateDataMenus(index: number, updatedData: any) {
    dataMenus.value[index] = updatedData
    localStorage.setItem('m', JSON.stringify(dataMenus.value))
  }

  function deleteDataMenus(index: number) {
    dataMenus.value.splice(index, 1)
    localStorage.setItem('m', JSON.stringify(dataMenus.value))
  }

  //produk
  function createDataProduks(newData: any) {
    dataProduks.value.push(newData)
    localStorage.setItem('p', JSON.stringify(dataProduks.value))
  }

  function readDataProduks() {
    return dataProduks.value
  }

  function updateDataProduks(idProduk: number, updatedData: AddHarga) {
    const data = (dataProduks.value as AddHarga[]).find((item: AddHarga) => item.idProduk === idProduk);
    if (data) {
      data.stok = updatedData.stok;
      data.harga = updatedData.harga;
    }
    localStorage.setItem('p', JSON.stringify(dataProduks.value));
  }
        
  function deleteDataProduks(index: number) {
    dataProduks.value.splice(index, 1)
    localStorage.setItem('p', JSON.stringify(dataProduks.value))
  }

  //pelanggan
  function createDataPelanggan(newData: any) {
    dataPelanggan.value.push(newData)
    localStorage.setItem('pel', JSON.stringify(dataPelanggan.value))
  }

  function readDataPelanggan() {
    return dataPelanggan.value
  }

  function updateDataPelanggan(index: number, updatedData: any) {
    dataPelanggan.value[index] = updatedData
    localStorage.setItem('pel', JSON.stringify(dataPelanggan.value))
  }

  function deleteDataPelanggan(index: number) {
    dataPelanggan.value.splice(index, 1)
    localStorage.setItem('pel', JSON.stringify(dataPelanggan.value))
  }


  return { 
    dataMenus, createDataMenus, readDataMenus, updateDataMenus, deleteDataMenus, 
    dataProduks, createDataProduks, readDataProduks, updateDataProduks, deleteDataProduks, 
    dataPelanggan, createDataPelanggan, readDataPelanggan, updateDataPelanggan, deleteDataPelanggan 
  }

})
