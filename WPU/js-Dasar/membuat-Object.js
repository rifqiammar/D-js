/*
    Membuat Object pada Javascript : 
      - Object Literal
      - Function Declaration
      - Constructor Function ( Keyword New )
      - Object.create()

*/ 

// Membuat Object Literal
let mhs = {
  nama : "Rifqi Ammar Ramadhan",
  nrp : 9115971,
  email : "rifqiammarr@gmail.com",
  jurusan : "Sistem Komputer",
}


let mhs2 = {
  nama : "Abdullah",
  nrp : 9113671,
  email : "Abdullah@gmail.com",
  jurusan : "Sistem Komputer",
}


// ===========================================================================

// function declaration
function buatObjectMhs(nama, email, nrp, jurusan) {
  let mhs = {};
  mhs.nama = nama;
  mhs.email = email;
  mhs.nrp = nrp;
  mhs.jurusan = jurusan;

  return mhs;
}

let mhs3 = buatObjectMhs('Abdurrazaq', 'abdurrazaq@gmail.com', 24488332, 'Informatika');

// console.log(mhs3.email);

//==================================================================================

// constructor Function | adalah function khusus untuk membuat Object
/* 
 - nama function di awali huruf besar
 - Menggunakan keyword this di dalam function
 - Menggunakan Keyword ( new ) untuk memanggilnya

*/

function Mahasiswa (nama, email, nrp, jurusan){ 
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

let mhs4 = new Mahasiswa('Abdurraheem', 2773363, 'abdurraheem@gmail.com', 'Tehknik Kimia');

