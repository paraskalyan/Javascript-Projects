var counter = 1;
function putValue(id){
    counter = counter+1;
    var box = document.getElementById(id);
    if (counter%2 == 0){
        box.innerHTML = '0';
    }
    else{
        box.innerHTML = 'X'
    }
    var box = document.querySelectorAll('.box');
    // for(var i = 0;i<box.length; i++){
    //     if(box[i].innerHTML != ' '){
    //         alert('OOPS! No one won. Play again.')
    //     }
    // }


    var b1 = document.querySelector('#r1c1').innerHTML;
    var b2 = document.querySelector('#r1c2').innerHTML;
    var b3 = document.querySelector('#r1c3').innerHTML;
    var b4 = document.querySelector('#r2c1').innerHTML;
    var b5 = document.querySelector('#r2c2').innerHTML;
    var b6 = document.querySelector('#r2c3').innerHTML;
    var b7 = document.querySelector('#r3c1').innerHTML;
    var b8 = document.querySelector('#r3c2').innerHTML;
    var b9 = document.querySelector('#r3c3').innerHTML;

    if((b1 == '0' && b2 == '0' && b3 == '0') || (b1 == 'X' && b2 == 'X' && b3 == 'X') ){
        alert('Player '+ b1+' won');
    }
    if((b4 == '0' && b5 == '0' && b6 == '0') || (b4 == 'X' && b5 == 'X' && b6 == 'X') ){
        alert('Player '+ b4+' won');
    }
    if((b7 == '0' && b8 == '0' && b9 == '0') || (b7 == 'X' && b8 == 'X' && b9 == 'X') ){
        alert('Player '+ b7+' won');
    }

    if((b1 == '0' && b4 == '0' && b7 == '0') || (b1 == 'X' && b4 == 'X' && b7 == 'X') ){
        alert('Player '+ b1+' won');
    }
    if((b2 == '0' && b5 == '0' && b8 == '0') || (b2 == 'X' && b5 == 'X' && b8 == 'X') ){
        alert('Player '+ b2+' won');
    }
    if((b3 == '0' && b6 == '0' && b9 == '0') || (b3 == 'X' && b6 == 'X' && b9 == 'X') ){
        alert('Player '+ b3+' won');
    }

    if((b1 == '0' && b5 == '0' && b9 == '0') || (b1 == 'X' && b5 == 'X' && b9 == 'X') ){
        alert('Player '+ b1+' won');
    }
    if((b3 == '0' && b5 == '0' && b7 == '0') || (b3 == 'X' && b5 == 'X' && b7 == 'X') ){
        alert('Player '+ b3+' won');
    }




    
}

function resetBox(){
    var box = document.querySelectorAll('.box');
    for(var i = 0;i<box.length; i++){
        box[i].innerHTML = ' ';
    }
}