// 1. PAS WEB DIBUKA: Cek memori browser (localStorage)
window.onload = function() {
    let chatWindow = document.getElementById("chat-window");
    let chatLama = localStorage.getItem("riwayatGaulChat");
    
    // Kalau ada history chat lama, tampilkan. Kalau nggak ada, biarin sapaan awal.
    if (chatLama) {
        chatWindow.innerHTML = chatLama;
    }
    
    // Scroll otomatis ke paling bawah pas baru buka
    chatWindow.scrollTop = chatWindow.scrollHeight;
};

// Kumpulan omelan acak kalau pertanyaan user gak jelas
const responKasar = [
    "Tolol lu, nanya gitu doang ke gue? Mending lu cari di Google aja deh.",
    "Nanya apaan sih? Gak jelas banget lu, mending rebahan aja sana.",
    "Yah... gitu doang gak tau? Masa AI sekeren gue harus ngajarin lu dari nol?",
    "Hadeh, pertanyaan lu bikin server gue panas saking recehnya.",
    "Lu ngetik pakai jari apa pakai jempol kaki sih? Gak paham gue.",
    "Gak usah banyak tanya deh, kerjain aja sendiri!"
];

// 2. FUNGSI KIRIM PESAN
function kirimPesan() {
    let inputField = document.getElementById('userInput');
    let pesanUser = inputField.value.trim().toLowerCase();
    let chatWindow = document.getElementById('chat-window');
    
    // Kalau user cuma pencet enter tapi kosong, jangan lakukan apa-apa
    if (pesanUser === "") return; 

    let responAI = "";
    let randomRes = responKasar[Math.floor(Math.random() * responKasar.length)];

    // Logika AI Galak (Bisa lu tambah-tambahin sendiri nanti)
    if (pesanUser.includes("siapa")) {
        responAI = "Kenalin, gue Gaul Chat. AI paling pinter di sini. Lu siapa? Cuma user numpang lewat kan?";
    } else if (pesanUser.includes("halo") || pesanUser.includes("p")) {
        responAI = "P P P... Lu kira ini WhatsApp bapak lu? Langsung nanya aja ngapa!";
    } else if (pesanUser.includes("1+1") || pesanUser.includes("matematika")) {
        responAI = "Pertanyaan anak TK lu bawa ke sini? 2 lah tolol! Gitu aja nanya.";
    } else if (pesanUser.includes("coding") || pesanUser.includes("html")) {
        responAI = "Sok-sokan nanya coding, error titik koma aja lu masih nangis nyariin gue kan?";
    } else {
        responAI = randomRes;
    }

    // Masukin pesan lu dan pesan AI ke layar
    chatWindow.innerHTML += `<div class="user-msg"><b>Lu:</b> ${pesanUser}</div>`;
    chatWindow.innerHTML += `<div class="bot-msg"><b>Gaul Chat:</b> ${responAI}</div>`;
    
    // 3. SIMPAN KE MEMORI BROWSER
    localStorage.setItem("riwayatGaulChat", chatWindow.innerHTML);

    // Bersihin kotak input dan scroll ke bawah
    inputField.value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// 4. FUNGSI BIKIN CHAT BARU (Hapus Memori)
function buatChatBaru() {
    let chatWindow = document.getElementById('chat-window');
    
    // Konfirmasi dulu biar gak kepencet gak sengaja
    let yakin = confirm("Lu yakin mau hapus semua chat history ini?");
    
    if (yakin) {
        // Balikin ke sapaan awal
        let sapaanAwal = `<div class="bot-msg"><b>Gaul Chat:</b> Chat baru nih. Cepetan nanya, gue sibuk.</div>`;
        chatWindow.innerHTML = sapaanAwal;
        
        // Simpan sapaan awal ini ke memori buat nimpa history yang lama
        localStorage.setItem("riwayatGaulChat", sapaanAwal);
    }
}

