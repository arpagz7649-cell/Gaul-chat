// INI ADALAH GUDANG PENGETAHUAN (Kamus Pintar Gaul Chat)
// Lu bisa masukin informasi sebanyak-banyaknya di sini dengan rapi!
const gudangPengetahuan = {
    // Pengetahuan Matematika Dasar
    "1+1": "Ya 2 lah tolol! Pertanyaan anak TK lu bawa ke sini.",
    "5x5": "25! Gitu doang nanya, kalkulator di HP lu rusak apa gimana?",
    "100/4": "25. Udah ah, jangan ngetes matematika mulu, gue AI bukan kalkulator pasar!",
    
    // Pengetahuan Umum / Sejarah
    "ibukota indonesia": "Jakarta lah anjir. Tapi bentar lagi pindah ke IKN tuh di Kalimantan.",
    "siapa penemu lampu": "Thomas Alva Edison. Belajar sejarah makanya jangan main game mulu!",
    "siapa presiden pertama": "Ir. Soekarno. Ini sih pertanyaan bocah SD.",
    
    // Pengetahuan Coding (Biar kelihatan pinter)
    "html itu apa": "HTML itu kerangka website lu. Ibarat rumah, dia batu batanya.",
    "css itu apa": "CSS itu tukang catnya. Biar web lu gak burik hitam putih doang.",
    
    // Kata kunci rahasia
    "password": "Gak usah nyoba-nyoba ngehack sistem gue ya!"
};

// Logika buat ngelepasin informasinya:
function cariJawaban(pertanyaanUser) {
    // AI nyari apakah pertanyaan lu ada di "Gudang Pengetahuan"
    for (let kunci in gudangPengetahuan) {
        if (pertanyaanUser.includes(kunci)) {
            return gudangPengetahuan[kunci]; // Melepaskan informasi
        }
    }
    
    // Kalau informasinya GAK ADA di gudang:
    return "Pertanyaan lu gak penting, jadi gak ada di memori gue. Nanya yang lain aja!";
}
