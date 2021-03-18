// Contains the result of button presses

var resArea = document.createElement('div');
resArea.id = 'res';
document.body.appendChild(resArea);

// A button container that displays all eight calculator buttons
var divBtns = document.createElement('div');
divBtns.id = 'btns';
document.body.appendChild(divBtns);


// btn0 , btn1 , btnClr , btnEql 

var btns = [];
for( var i=0 ; i<8 ; i++) {
    var btn = document.createElement('button');
    document.getElementById('btns').appendChild(btn);
    btns.push( btn );
}

btns[0].id = 'btn0'   , btns[1].id = 'btn1';
btns[2].id = 'btnClr' , btns[3].id = 'btnEql';
btns[4].id = 'btnSum' , btns[5].id = 'btnSub';
btns[6].id = 'btnMul' , btns[7].id = 'btnDiv';

btns[0].innerHTML = '0' , btns[1].innerHTML = '1';
btns[2].innerHTML = 'C' , btns[3].innerHTML = '=';
btns[4].innerHTML = '+' , btns[5].innerHTML = '-';
btns[6].innerHTML = '*' , btns[7].innerHTML = '/';