let s = ''
for (let x = 0; x < 9; x++) {
    for(let y = 0; y < 9; y++){
        if( x == 0){

            s += '*';
        }else if(x == 8){
            s += '*';

        }else if(y==0){
            s += '*';
        }else if(y==0){
            s += '*';
        }else if(y==8){
            s += '*';
        }else if(x == 4){
            s += '*';
        }else{
            s += ' ';

        }

        console.log(s);
    }
    
    console.log('\n');
}

