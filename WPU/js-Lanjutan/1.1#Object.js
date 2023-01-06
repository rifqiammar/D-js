// Membuat Object pada javascript

// Object Literal | Di pakai jika hanya menggunakan 1 object saja
// Problem : Tidak efektif untuk Object yang banyak
let mahasiswa = {
    nama : "Rifqi Ammar Ramadhan",
    energy : 10,

    makan: function (porsi){
        this.energy += porsi;
        console.log(`Selamat Makan ${this.nama}`);
        console.log(`Energy Bertambah : ${this.energy}`);
    }

};



// Object Function Declaration 

// Obeject Untuk Method
let MethodMahasiswa = {
    tidur : function (jam) {
        this.energy += jam*2
        return `Selamat Tidur ${this.nama}`;
    }
}

// Object Function Declaration
let Mahasiswa = function(nama, energy){
    let mhs = {};
    mhs.nama = nama;
    mhs.energy = energy;
    mhs.tidur = MethodMahasiswa.tidur;



    
    mhs.makan = function(porsi){
        this.energy += porsi;
        console.log(`Selamat Makan ${this.nama}`);
    }
 
    mhs.aktivitas = function (jam){
        
            this.energy -= jam;
            console.log(`Selamat Beraktivitas ${this.nama}`);
    }
    /*
        Jika melakukan cara ini ( Object Function Declaration) dibelakang layar ketika melakukan
        instansiasi pada objectnya 2 Method di atas ini akan di buat mau di pakai atau tidak akan tetap di buat di dalam memory
        maka yang terjadi akan menambah banyak resource yang di buat / di pakai di dalam memory.

        duplikat pada masing2 Object
         let ammar = Mahasiswa('ammar', '15');
         let rifqi = Mahasiswa('rifqi', '30');

         Solusinya Dengan Cara membuat Object terpisah pada Methodnya  agar di jalan kan hanya sekali methodnya
         contoh : Method tidur


          Problemnya kita harus mengelola 2 Object

          Solusi terbaik adalah menggunakan Object.create()

    */ 

        
    return mhs;
}



// Constructor Function
// 
function Mahasiswaa(nama, energy){
    
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi){
        this.energy += porsi;
        console.log(`Selamat Makan ${this.nama}`);
    }

    this.aktivitas = function (jam){
        
            this.energy -= jam;
            console.log(`Selamat Beraktivitas ${this.nama}`);
    }
        
   
}


let ammar = new Mahasiswaa("Ammar", 20);