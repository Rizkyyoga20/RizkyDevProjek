interface bukuAgenda{
    noSurat?: string;
    nik: string;
    tglAgenda: string;
    jenisSurat: string;
    pengirim: string;
    perihal: string;
    tujuan: string;
    statusKirimrn: string;
}

interface storeStatus{
    id?: Number;  
    idAgenda?: Number;
    status: string;
    keterangan: string;
    time: string;
}

interface Akun {
    nik?: string;
    username: string;
    password: string;
    status_akses: string;
    nomorTelepon: string;
    email: string;
}

export type { 
    bukuAgenda,
    storeStatus,
    Akun
}
