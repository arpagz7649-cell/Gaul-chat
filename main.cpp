#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>

using namespace std;

// Membuat cetakan (Class) untuk Karakter Game
class Karakter {
private:
    string nama;
    int hp;
    int attackPower;

public:
    // Constructor: Dijalankan pertama kali saat karakter dibuat
    Karakter(string namaKarakter, int healthPoint, int attack) {
        nama = namaKarakter;
        hp = healthPoint;
        attackPower = attack;
    }

    // Fungsi untuk menyerang target
    void serang(Karakter &target) {
        // Menghitung damage acak (critical hit sederhana)
        int damageAkhir = attackPower + (rand() % 10); 
        
        cout << "\n[⚔️] " << nama << " menyerang " << target.getNama() 
             << " dan memberikan " << damageAkhir << " Damage!" << endl;
             
        target.terimaDamage(damageAkhir);
    }

    // Fungsi untuk menerima serangan
    void terimaDamage(int damage) {
        hp -= damage;
        if (hp < 0) {
            hp = 0; // HP tidak boleh minus
        }
        cout << "     -> Sisa HP " << nama << ": " << hp << " \x03" << endl;
    }

    // Fungsi untuk mengecek apakah karakter sudah mati
    bool isMati() {
        return hp <= 0;
    }

    // Fungsi untuk mengambil nama (karena variabel nama itu private)
    string getNama() {
        return nama;
    }
};

// --- PROGRAM UTAMA DIMULAI DI SINI ---
int main() {
    srand(time(0)); // Mengacak sistem agar damage selalu berbeda

    cout << "===================================" << endl;
    cout << "     SIMULASI BATTLE RPG C++      " << endl;
    cout << "===================================\n" << endl;

    // Membuat dua karakter yang akan bertarung
    Karakter player("Hero Master", 150, 25);
    Karakter boss("Naga Gelap", 200, 18);

    int ronde = 1;

    // Pertarungan akan terus berjalan SELAMA keduanya belum mati
    while (!player.isMati() && !boss.isMati()) {
        cout << "--- RONDE " << ronde << " ---" << endl;
        
        // Giliran Player Menyerang
        player.serang(boss);
        
        // Cek apakah bos mati setelah diserang
        if (boss.isMati()) {
            cout << "\n[🏆 VICTORY] " << boss.getNama() << " telah tumbang!" << endl;
            cout << "Selamat, lu berhasil memenangkan pertarungan!" << endl;
            break; // Hentikan pertarungan
        }

        // Giliran Boss Menyerang Balik
        boss.serang(player);

        // Cek apakah player mati setelah diserang bos
        if (player.isMati()) {
            cout << "\n[💀 DEFEAT] " << player.getNama() << " kehabisan darah..." << endl;
            cout << "Game Over. Coba lagi lain kali." << endl;
            break; // Hentikan pertarungan
        }
        
        cout << "-----------------------------------\n";
        ronde++;
    }

    cout << "\nTekan Enter untuk keluar...";
    cin.get(); // Menahan layar agar tidak langsung tertutup

    return 0; // Menandakan program selesai tanpa error
}

