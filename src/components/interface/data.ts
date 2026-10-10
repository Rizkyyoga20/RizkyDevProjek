interface DataMenu {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface UnsplasPhotos {
  id?: string;
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
  id?: string;
  nama: string;
  alamat: string;
  noTelepon: string;
  email: string;
}

interface AddHarga{
  id?: string;  
  idProduk?: string ;
  harga: string;
  stok: string;
}

interface Pesanan {
  id?: string;
  idProdukPesanan?: string;
  idPelanggan?: number;
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
