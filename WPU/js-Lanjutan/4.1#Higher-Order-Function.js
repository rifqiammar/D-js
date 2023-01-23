/*
        Higher Order Function
*/  

/*
        "Function yang beroperasi pada function yang lain,
        Baik itu digunakan dalam argument, maupun sebagai
        return value."

        foreach((e) => { return e })  | function dalam Argument
        
        * Function sebagai return

        function tampilKata(){
            return function() {
                console.log('Hallo');
            }
        }

       
  
 Di dalam Javascript function itu di sebut dengan first class function

 "Javascript memperlakukan function sebagai Object"   | Object = sebuah value , {} seperti int dan str ("bismillah"), (123)


*/ 

// Function Sebagai Argument

function kerjakanTugas(matakuliah, selesai){ // function ini di sebut dengan Higher Order Function
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
    
    selesai(); // callback
}

function selesai() { // function ini Di sebut dengan Callback
    console.log(`Selesai Mengerjakan tugas!`);
}

kerjakanTugas('Pemrograman Web', selesai); // 'Selesai' callback


setTimeout(function () {console.log('Hello World')}, 1000);






// Function Return Valuenya adalah function

function ucapkanSalam(waktu){ // higher order function
    return function (nama) {
        console.log(`Assalamu'alaikum mas ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let SelamatSiang = ucapkanSalam(`Siang`);

console.dir(SelamatSiang('Ammar'));

// Kenapa harus menggunakan Higher Order function
/*
        Alasanya adalah

        - Abstraksi  | Untuk membuat agar Kode yang kita buat bisa lebih sederhana / simple
                       karena dengan menggunakan function dapat menyembunyikan kerumitan program trsbt

                       "Semakin besar sebuah program, semakin tinggi kompleksitas, 
                       semakin membingungkan programmernya. ada baiknya kita pisahkan menjadi function2 sendiri"       
        
        

        "Ada dua cara untuk merancang sebuah software: Cara per tama adalah untuk membuat programnya se-sederhana
        mungkin sehingga jelas-jelas tidak ada kekuranganya, dan cara lainya adalah untuk membuat programnya
        se-kompleks mungkin sehingga tidak ada kekurangan yang jelas." - C.A.R. Hoare, 1980 ACM Turing Award Lecture


        - Functional Programming

*/