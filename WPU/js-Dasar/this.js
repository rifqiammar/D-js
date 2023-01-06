// Function Declaration
// Pada Function Declaration THIS mengembalikan Object Global

function say(say){
    let obj = {};
    obj.hello = say;
    return obj;
}

const hello = say("Bismillah").hello;

console.log(hello)




// Object Literal
// This Mengembalikan Object window / global
let obj = {a : 10, nama : "Ammar"};
obj.hello = () => {console.log(`Assalamu'alaikum, ${this}`);};

obj.hello();




// Constractor Function
function Mobil(warna, brand, asal, kecepatan, bahanBakar)
{
    this.warna = warna;
    this.brand = brand;
    this.asal = asal;
    this.kecepatan = kecepatan;
    this.bahanBakar = bahanBakar; 
}

// This Mengembalikan Object yang baru di buat ( Ferrari )
let ferrari = new Mobil("Merah", "Ferrari", "Italy", "300Km/j", "Bensin");

console.log(`${ferrari.brand}, ${ferrari.asal}, ${ferrari.bahanBakar} `);