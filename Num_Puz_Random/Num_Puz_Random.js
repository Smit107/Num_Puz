var arr = ['','','','','','','','','']; 
var a;
window.onload = reset()
function b1(k) {

    if( document.getElementById("b4").value == "" ){
        document.getElementById("b4").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b2").value == "" ){
        document.getElementById("b2").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }
    winner();
}

function b2(k) {

    if( document.getElementById("b1").value == "" ){
        document.getElementById("b1").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b5").value == "" ){
        document.getElementById("b5").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b3").value == "" ){
        document.getElementById("b3").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }
    winner();
}

function b3(k) {

    if( document.getElementById("b2").value == "" ){
        document.getElementById("b2").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b6").value == "" ){
        document.getElementById("b6").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }
    winner();
}

function b4(k) {

    if( document.getElementById("b1").value == "" ){
        document.getElementById("b1").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b5").value == "" ){
        document.getElementById("b5").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b7").value == "" ){
        document.getElementById("b7").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }
    winner();
}

function b5(k) {

    if( document.getElementById("b2").value == "" ){
        document.getElementById("b2").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b4").value == "" ){
        document.getElementById("b4").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b6").value == "" ){
        document.getElementById("b6").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b8").value == "" ){
        document.getElementById("b8").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }
    winner();
}

function b6(k) {

    if( document.getElementById("b3").value == "" ){
        document.getElementById("b3").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b5").value == "" ){
        document.getElementById("b5").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b9").value == "" ){
        document.getElementById("b9").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }
    winner();
}

function b7(k) {

    if( document.getElementById("b8").value == "" ){
        document.getElementById("b8").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b4").value == "" ){
        document.getElementById("b4").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }
    winner();
}

function b8(k) {

    if( document.getElementById("b7").value == "" ){
        document.getElementById("b7").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b5").value == "" ){
        document.getElementById("b5").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b9").value == "" ){
        document.getElementById("b9").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }
    winner();
}

function b9(k) {

    if( document.getElementById("b6").value == "" ){
        document.getElementById("b6").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }

    if( document.getElementById("b8").value == "" ){
        document.getElementById("b8").value = document.getElementById('b'+k).value;
        document.getElementById('b'+k).value = "";
    }
    winner();
}

function winner() {
    if( document.getElementById("b1").value == 1 &&
        document.getElementById("b2").value == 2 &&
        document.getElementById("b3").value == 3 &&
        document.getElementById("b4").value == 4 &&
        document.getElementById("b5").value == 5 &&
        document.getElementById("b6").value == 6 &&
        document.getElementById("b7").value == 7 &&
        document.getElementById("b8").value == 8 && 
        document.getElementById("b9").value == "")
    {
        document.getElementById("winner").innerHTML = 'Congretulation'+'<br>'+'You Are Win';
        var x =document.getElementById("winner");
        x.style.color='blue';
        ds();       
    }
}


function reset() {  
    for (var p = 1;p<= 9 ;p++){
        document.getElementById('b'+p).value = "";
        arr[p] = "";
    } 

    document.getElementById("winner").innerHTML = "";

    for(var j=1;j<=9;j++){
        while (true){
             a=Math.ceil(Math.random()*9)
            if(arr[a] == '')
            {   
                document.getElementById('b'+a).value = j;
                arr[a]=j;
                if(j == 9){
                    document.getElementById('b'+a).value = '';
                    arr[a]='';
                }
                break;
            } 
        }
    }       
}

function ds(){
    var x=document.getElementsByClassName('i1'); 
    for (let i = 0; i < x.length; i++) {
        x[i].disabled=true;
    }
}
    

