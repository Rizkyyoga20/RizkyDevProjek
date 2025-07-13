interface DataMenu {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
}

interface UnsplasPhotos {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  user: string;
  alt_description: string;
}

interface AddPelanggan{
  id?: number;
  nama: string;
  alamat: string;
  noTelepon: string;
  email: string;
}

interface AddHarga{
  id?:number;  
  idProduk?: number;
  harga: string;
  stok: string;
}

interface Pesanan {
  id?:number;
  idProdukPesanan: number;
  idPelanggan: number;
  totalBayar: number;
  jumlah: number;
  status: string;
  time: string;
}

export type { 
  DataMenu,
  UnsplasPhotos,
  AddHarga,
  AddPelanggan,
  Pesanan
}
