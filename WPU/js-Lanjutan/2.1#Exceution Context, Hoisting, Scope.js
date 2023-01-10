/*
    Exceution Context, Hoisting, Scope


    Di Dalam Javascript terdapat 2 fase pada Execution Context ( Saat Program Di jalankan)

    1. Creation
    2. Execution
    
*/ 

/*
    Saat Program Di jalankan yang terjadi adalah ada sesuatu yang di sebut dengan
    Creation Phase / Fase Pembentukan
*/ 

console.log(nama); // di dalam memory isinya Undefined karena var nama di isi undifined pada creatin Phase  jadi var nama = undefined;
var nama = "Rifqi Ammar R"; // Setelah Creation phase selesai maka var nama = "Rifqi Ammar R"
// console.log(nama); isinya nama = "Rifqi Ammar R" 


// Creation phase pada Global Context (scope Global)
/*
        yang terjadi pada fase ini Javascript akan mengecek apakah ada variable / function dalam kodinganya
        jika ada membuat nama variable di isi dengan Undifined,
        jika ada function akan di isi kode function itu sendiri

        - creation phase
        - mengisi variable dengan undefined  var nama = undifined
        - function = fn() / isinya adalah script functionya
        - Konsep tersebut disebut dengan hoisting
        - window = global object
        - this = window

        - executin Phase | Setelah Creation Phase baru meng eksekusi seluruh programnya satu per satu dari atas ke bawah
          mengeksekusi console.log(nama);
           
*/ 

// - Sebelum mengeksekusi program javascrip melakukan Creation Phase, Hoisting

// sayHello(); Jika Function di jalan kan di atas variable tsb makan isinya masi undifined

var namaa = 'rifqi';           
var umur = 26;

console.log(sayHello()); // jika function di jalankan di bawah variable maka isinya bukan undifined

function sayHello(){
    // console.log(`Hallo, Nama Saya ${nama}, Saya ${umur} tahun.`);

    return  `Hallo, Nama Saya ${nama}, Saya ${umur} tahun.`;

    // return function harus mengembalikan nilai agar tidak undifined di console.log
}


// untuk mengetahui visualisasinya bisa di lihat di https://pythontutor.com/javascript.html


var namaaa = "Rifqi"
var umurr = 25

console.log(sayHelloo())

function sayHelloo(){
  return `Hallo, namaaa saya ${namaaa}, Saya ${umurr} tahun.`
}

// Function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase

//  Selain bisa mengakses windows
// Bisa juga mengakses Arguments
// Hoisting



var name = 'Rifqi Ammar R';
var username = '@rifqiammarr';

function cetakURL(username) {
    // local Excecution Context
    var instagramURL = `http://instagram.com/`;
    return instagramURL + username;
};

console.log(cetakURL(username));