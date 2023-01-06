/*
    Prototype
*/  

function Mahasiswa(nama, energy){ // Menggunakan Function Constructor
    
    this.nama = nama;
    this.energy = energy;  

}

/* 
   Jika ingin membuat Method / function cukup Memanfaatkan prototypenya 
   tanpa harus membuat Object yang baru.
*/   
Mahasiswa.prototype.makan = function(porsi){
    this.energy += porsi;
    return `Halo ${this.nama}, Selamat Makan!`
}

Mahasiswa.prototype.aktifitas = function(jam){
    this.energy -= jam;
    return `Halo ${this.nama}, Selamat Beraktivitas!`
}
   
Mahasiswa.prototype.tidur = function(jam){
    this.energy += jam*2;
    return `Halo ${this.nama}, Selamat Beristirahat!`
}


let ammar = new Mahasiswa("Ammar", 25);








/*
    Secara Default Constructor Function memiliki sebuah parent yang bernama prototype.

    Dengan Prototype kita bisa membuat Method / Function secara efektif dan efisien tanpa harus menghabiskan banyak resource.

*/ 



/* 
Yang di lakukan oleh Constructor di belakang layar adalah

    function Mahasiswa(nama, energy){ // Menggunakan Function Constructor
        
        let this = Object.create(Mahasiswa.prototype);

        this.nama = nama;
        this.energy = energy;  

        return this;
    }

    let ammar = Mahasiswa("Ammar", 25);
    let ramadhan = Mahasiswa("ramadhan", 35);

*/ 


/*
    Javascript versi OOP walaupun di belakang layar tetap menggunakan prototype
*/ 

/*

class Mahasiswaa {
    
    constructor(nama, energy){
        this.nama = nama;
        this.energy = energy;
    }

    makan(porsi){

        this.energy += porsi;
        return `Halo ${this.nama}, Selamat Makan!`
    }

    aktivitas(jam){

        this.energy -= jam;
        return `Halo ${this.nama}, Selamat Ber Aktifitas!`
    }

    tidur(jam){

        this.energy += jam*2;
        return `Halo ${this.nama}, Selamat Tidur!`
    }
}

let ammaar = new Mahasiswaa('Ammar', 25);

*/