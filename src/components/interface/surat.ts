interface bukuAgenda{
    noSurat?: number;
    nik: string;
    tglAgenda: string;
    jenisSurat: string;
    pengirim: string;
    perihal: string;
    tujuan: string;
    statusKirimrn: string;
    nomorTelepon: string;
    email: string;
}

interface storeStatus{
    id?: Number;  
    idAgenda?: Number;
    status: string;
    time: string;
}

interface Akun {
    nik?: string;
    username: string;
    password: string;
}

export type { 
    bukuAgenda,
    storeStatus,
    Akun
}
