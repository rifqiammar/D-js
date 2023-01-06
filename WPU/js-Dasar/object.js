// Array Bertipe Object di Javascript

/*
    Object pada Javascript adalah kumpulan nilai, yang memiliki nama

    "Array adalah variable yang lebih sakti"
    "Object adalah Array yang lebih sakti"

            "In Javascript, Object are king.
            If you understand Object, You understand Javascript."
    
    Yang sama seperti Object di javascript pada bahasa pemrograman lain :
    
        - PHP : Array Assosiative
        - Python : Dictionaries
        - Java : Hash Maps
        - C : Hash Table

        
*/ 

console.log("Bismillah");

let mahasiswa = {
        nama : "Rifqi Ammar Ramadhan",
        IPSemester : [2.90, 3.10, 3.25, 2.88, 3.04],

        IPKumulatif : function (){
            let total = 0;
            let ips = this.IPSemester;
            
            for(let i = 0; i < ips.length; i++){
                total += ips[i];
            }
            
            return total/ips.length;
        },
        
        lulus : function () {
                let ipk = this.IPKumulatif();
                let lulus = "";
    
                if(ipk > 2.50){
                    lulus = true;
                }else {
                    lulus = false;
                };
               return lulus;         
        },
    };

    
let mhs = {
        nama : "Rifqi Ammar Ramadhan",
        nrp : 9115971,
        email : "rifqiammarr@gmail.com",
        jurusan : "Sistem Komputer",
        universitas : () => {return 'Gunadarma'}
}

console.log(`Assalamu'alaikum, Perkenalkan nama saya adalah ${mhs.nama}, 
Saya berkuliah di ${mhs.universitas()}, dan Jurusan saya adalah ${mhs.jurusan}`);















// let Mahasiswa = function(nama, energy){
//     let mhs = {};
//     mhs.nama = nama;
//     mhs.energy = energy;

//     mhs.makan = function(porsi){
//         this.energy += porsi;
//         console.log(`Selamat Makan ${this.nama}`);
//     }

//     mhs.aktivitas = function (jam){

//         if(this.energy > 5){
//             this.energy -= jam;
//             console.log(`Selamat Beraktivitas ${this.nama}`);
//             if(this.energy < 10){
//                 console.log(`Anda Sudah mulai lelah, Jangan lupa Beristirahat ya`);
//             }
//         }else{
//             console.log("energy anda sudah terkuras, anda harus beristirahat");
//         }
//     }
    
//     return mhs;
// }

// let ammar = Mahasiswa("Ammar", 20);