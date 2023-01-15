/*
        This pada Arrow Function
*/ 

// Konsep this pada Arrow Function

/* 

constructor function

const Mahasiswa = function() 
{
    this.nama = 'Rifqi';
    this.umur = 25;
    this.sayHello = function(){
        console.log(`Assalamu'alaikum, nama Saya ${this.nama}, dan Saya ${this.umur} tahun.`);
    }

}

const ammar = new Mahasiswa();
*/


// Arrow function tidak memiliki konsep this



// 
const Mahasiswa = function () {
    this.nama = 'rifqi';
    this.angka = 1;
    this.sayHello = function () {
        console.log(`Halo, Nama saya ${this.nama}, dan saya ${umur} tahun.`);
    }


    // setiap setengah detik umur bertambah 1
    setInterval(() => {
        console.log(this.angka++);
    }, 500);
}

// const ammar = new Mahasiswa;

