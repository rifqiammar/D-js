const box = document.getElementsByClassName("box")[0];

box.addEventListener("click", function() {
    let satu = 'size';
    let dua = 'caption';
    
    if(this.classList.contains(satu)) {
        // let temp = '';

        // temp = satu ; 
        // satu = dua; 
        // dua =  temp; 
        

        [satu, dua] = [dua, satu];
    }


    this.classList.toggle(satu);
    
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});



