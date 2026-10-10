interface dataProduk{
  id?: string;
  namaProduk: string;
  stokProduk: number;
  keteranganProduk: string;
}

interface dataPenjaulan{
  id?: number;  
  idProduk?: string;
  idPelanggan: string;
  jumlahPesanan: string;
  keteranganPesanan: string;
  time: string;
}

interface Pelanggan {
  id?: string;
  namaPelanggan: string;
  password: string;
  status_akses: string;
  nomorTelepon: string;
  email: string;
}

interface Diskon{
    id?: string;
    status: string;
    maxPembayaran: string;
    potoganDiskon: string;
}

interface Catatan {
    id?: number;
    idPelanggan?: string;
    idProduk?: string;
    catatan: string;
    penilaian: string;
    time: string;
}

interface subCatatan {
    id?: number;
    idCatatan?: string;
    idPelanggan?: string;
    catatan: string;
    penilaian: string;
    time: string;
}


export type { 
  dataProduk,
  dataPenjaulan,
  Pelanggan,
  Diskon,
  Catatan, 
  subCatatan, 
}

