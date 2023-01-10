/*
        Closure

    Kenapa menggunakan Closure?

    - Untuk membuat function Factory
    - Untuk membuat Private Method




  "Closure merupakan kombinasi antara function dan lingkungan leksical (lexical scope) 
   di dalam function tersebut."  -MDN mozila
   

   "Closure adalah sebuah function ketika memiliki akses ke parent scoope-nya,
    meskipun parent scopenya sudah selesai di eksekusi." -w3school

    "Closure adalah sebuah function yang sebelumnya sudah
     memiliki data, hasil dari function yang lain" - techsith
   
*/ 

/*
   - Inner function bisa  memiliki akses ke parent variablenya hingga ke global object / window disebut dengan Lexical Scope

   - begitu kasus ini terjadi Inner Function membutuh kan variable yang ada di parent scopenya maka inner function ini di sebut dengan 
     Closure

*/ 

// Lexical Scope
function init() 
{
    let nama = 'Ammar'; // local variable

    function tampilNama() { // inner function (closure*)
        console.log(nama); // akses ke parent variable || Jika variable nama tidak ada maka ia akan mencari trs ke atas hingga ke global scope
    }
    
    tampilNama();
}

init();







// [==================================================]
function iniit() 
{
    return function (nama) {
        console.log(nama);
    }
}


let panggilNama = iniit();

panggilNama('Rifqi');

// console.dir(panggilNama);
// iniit()('Ramadhan');



// ====================================================  example
 function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenakan!`);
    }
 }

 let selamaPagi = ucapkanSalam(`pagi`);
 let selamaSiang = ucapkanSalam(`siang`);
 let selamaMalam = ucapkanSalam(`malam`);

 selamaSiang(`Ammar`);

 // ====================================================  example

 let add = (function () { // di bungkus dengan immedietly invoke function (fn(){..})()

     let counter = 0;

    return function() {

       return ++counter;
    }
 })()


 console.log(add());
 console.log(add());
 console.log(add());