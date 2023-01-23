/*
        Filter, Map & Reduce

        Konsep Higher Order function yang sering di gunakan adalah :

        - array.protorype.filter()
        - array.protorype.map() | petakan / potong
        - array.protorype.reduce()
*/ 



const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Filter
//Mencari angka yang lebih besar dari 3
//for loop
const angka2 = []; // const dapat mengisi array tapi tidak bisa mengganti nilainya

 for(let i = 0; i < angka.length; i++){
  if(angka[i] >= 3 ){
        angka2.push(angka[i]);
  }
 }

 console.log(angka2);

 //Filter
 const newAngka = angka.filter(e => e >= 3)

 console.log(newAngka);



 //==========================================================================
 // Map | memetakan tiap2 elemenya dengan fungsi yang baru
// kalikan semua angka dengan 2
const number = angka.map(a => a*2); // fungsinya bisa a+2 bisa menambah karakter, bisa mengubah warna dll

console.log(number);


//===========================================================================
// Reduce 
// Menjumlahkan seluruh elemen pada Array
//0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9;
const num = angka.reduce((accumulator, currentValue) => 
        accumulator + currentValue//, 0 | secara defafault nilai awalnya adalah 0
)

console.log(num);



/* 
        CurrentValue adalah element Array yang sedang di looping nya [1, 2, 3]
        accumulator adalah hasil dari prosesnya

        
       0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9;     | 0 adalah nilai awal bisa di ubah sesuai kebutuhan
        0 + -1  
          -1 = accumulator
          -1 + 8 = 7   | 7 = accumulator


*/


//==========================================================================================================================
// Method Chaining
// Method Chaning menggabungkan fungsi2 pada Higher Order Function dalam satu eksekusi tanpa harus memasukan kedalam variable

/*
                - Cari angka > dari 5
                - kali 3
                - jumlahkan
*/
// Method Chaining
const hasil = angka.filter(a => a > 5) // 8,9,9
  .map(a => a * 3) // 24, 27, 27
  .reduce((acc, cur) => acc + cur, 0); // 78

  console.log(hasil);


  

//   Bisa di tulis berulang2
const hasil2 = angka.filter(a => a > 5) // 8,9,9
  .map(a => a * 3) // 24, 27, 27
  .map(a => a / 2) 
  .map(a => a * 5) 
  .reduce((acc, cur) => acc + cur, 0); // 78