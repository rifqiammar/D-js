// Object.Create()
/* 
    Object.create() sama saja seperti let mhs = {} (membuat Object), Bedanya kita bisa menyimpan 
    Parameter di dalamnya, parameternya mengacu kepada Parent Objectnya

    Bikin Object sambil membawa property dan Method pada Object lain

    tanpa harus mendefinisikan method2 Aktivitas dan tidur di dalam Object Mahasiswa


*/

let MethodMahasiswa = {
    tidur : function (jam) {
        this.energy += jam*2
        return `Selamat Tidur ${this.nama}`;
    },
    aktivitas : function (jam) {
        this.energy -= jam
        return `Selamat Beraktivitas ${this.nama}`;
    }
}

function Mahasiswa(nama, energy){
    
    let mhs = Object.create(MethodMahasiswa); // Sama seperti KonsepPewarisan / Inheritance di dalam Konsep OOP 
    mhs.nama = nama;
    mhs.energy = energy;

    return mhs;

}

/* 
   Problemnya adalah : Kita hanya butuh 1 Object yaitu mahasiswa saja tidak membutuh kan Object lain
   agar tidak bekerja 2 kali.

   maka solusinya adalah prototype
*/    
