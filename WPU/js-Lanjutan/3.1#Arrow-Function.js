/*
        Arrow Function

        Bentuk lain yang lebih ringkas dari Function Expression -MDN
*/ 
// Function Expression
let tampilNama = function (nama){
    alert(`Hallo ${nama}`);
}

tampilNama('Rifqi Ammar Ramadhan');
// =================================

// Arrow Function
// let tampilNamaa = nama => { return `Hallo ${nama}`; }; // Jika Parameternya 1 tidak perlu pakai kurung ()
let tampilNamaa = nama =>  `Hallo ${nama}`; // implisit return| tanpa harus menuliskan return dan kurung kurawal jika isinya hanya return saja

let salam = (nama, waktu) => {return `Assalamu'alaikum ${nama}, Selamat ${waktu}`}; // Jika parameter lebih dari satu menggunakan kurung ()


console.log(tampilNamaa('ammar'));
console.log(salam('ammar', 'siang'));



// Jika fn tanpa parameter maka wajib tanda kurung ()
const siang = () => `Selamat Siang`;
console.log(siang());
// ==========================================================================================================================
// Contoh menggunakan function map, untuk memetakan sebuah function kedalam array

let mahasiswa = ['rifqi', 'ammar', 'ramadhan'];

let jumlahHuruf = mahasiswa.map( (nama) => nama.length ); // menghitung jumlah huruf pada elemen array


// Mengembalikan nilainya menjadi Object
// Untuk mereturn menjadi Object maka harus dibunggkus dengan () jadi ({})
let jumlahHuruff = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }));

console.table(jumlahHuruff);











