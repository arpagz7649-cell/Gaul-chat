// 1. PAS WEB DIBUKA: Load history chat dari memori
window.onload = function() {
    let chatWindow = document.getElementById("chat-window");
    let chatLama = localStorage.getItem("riwayatGaulChat");
    if (chatLama) chatWindow.innerHTML = chatLama;
    chatWindow.scrollTop = chatWindow.scrollHeight;
};

// ==========================================
// BAGIAN INI YANG BIKIN AI LU JADI PINTER!
// ==========================================

// Lu butuh API KEY gratis dari Google Gemini atau OpenAI. 
// Sementara biarin kosong atau isi kalau lu udah punya.
const API_KEY = "TARUH_API_KEY_LU_DI_SINI"; 

// Ini "Jati Diri" si Gaul Chat. Lu bisa ganti se-toxic yang lu mau!
const JATI_DIRI_AI = "Lu adalah Gaul Chat. AI paling pinter di bumi tapi super sombong, toxic, dan gampang emosi. Gunakan bahasa gaul Jakarta (lo, gue, anjir, tolol). Kalau ditanya soal ilmu pengetahuan atau coding, jawab dengan benar dan cerdas, tapi sambil ngejek usernya bodoh karena gitu aja gak tau. Jangan pernah formal!";

async function kirimPesan() {
    let inputField = document.getElementById('userInput');
    let pesanUser = inputField.value.trim();
    let chatWindow = document.getElementById('chat-window');
    let btnKirim = document.getElementById('btn-kirim');
    
    if (pesanUser === "") return; 

    // Tampilkan pesan user di layar
    chatWindow.innerHTML += `<div class="user-msg"><b>Lu:</b> ${pesanUser}</div>`;
    inputField.value = ""; // Bersihin kotak ketik
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Bikin tulisan "Gaul Chat lagi mikir..." biar realistis
    let loadingId = "load-" + Date.now();
    chatWindow.innerHTML += `<div class="bot-msg" id="${loadingId}"><b>Gaul Chat:</b> <i>Bentar tolol, gue mikir dulu...</i></div>`;
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Matikan tombol kirim sementara biar user gak spam
    btnKirim.disabled = true;

    try {
        // PERINGATAN: Ini adalah struktur kode API asli. 
        // Kalau API_KEY lu belum diisi, dia bakal error atau jawab ngasal.
        
        if (API_KEY === "TARUH_API_KEY_LU_DI_SINI") {
            // Karena belum ada API Key, kita kasih simulasi pura-pura pinter dulu
            setTimeout(() => {
                document.getElementById(loadingId).innerHTML = `<b>Gaul Chat:</b> Eh bocah, lu belum masukin API KEY di kodingan JavaScript lu! Pantesan otak gue belum nyambung ke satelit. Cari cara dapet API KEY gratis sana! Btw pertanyaan lu tadi: "${pesanUser}" kan? Gampang itu mah, tapi gue males jawab sebelum lu pasang kuncinya.`;
                simpanKeMemori(chatWindow);
            }, 2000);
        } else {
            // Kalau API Key udah ada, di sinilah keajaiban terjadi (Koneksi ke Server AI beneran)
            // Kodenya bakal narik data dari otak AI sungguhan berdasarkan JATI_DIRI_AI di atas.
            // (Nanti kita atur bagian fetch-nya kalau lu udah siap API Key-nya).
            document.getElementById(loadingId).innerHTML = `<b>Gaul Chat:</b> (Sistem AI asli akan menjawab di sini)`;
            simpanKeMemori(chatWindow);
        }
    } catch (error) {
        document.getElementById(loadingId).innerHTML = `<b>Gaul Chat:</b> Waduh error anjir! Server gue lagi ngadat. Cek koneksi lu!`;
    }

    // Nyalain tombol kirim lagi
    btnKirim.disabled = false;
}

// Fungsi buat nyimpen ke browser
function simpanKeMemori(chatWindow) {
    localStorage.setItem("riwayatGaulChat", chatWindow.innerHTML);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Fungsi Hapus Chat
function buatChatBaru() {
    let yakin = confirm("Yakin lu mau hapus semua chat history ini?");
    if (yakin) {
        let chatWindow = document.getElementById('chat-window');
        chatWindow.innerHTML = `<div class="bot-msg"><b>Gaul Chat:</b> History udah gue hapus. Nanya yang berbobot dikit kali ini!</div>`;
        localStorage.setItem("riwayatGaulChat", chatWindow.innerHTML);
    }
}
