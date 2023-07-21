
    
function b1(k) {
    var b1 = document.getElementById("b1").value
    var b4 = document.getElementById("b4").value
    var b2 = document.getElementById("b2").value

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
    var b5 = document.getElementById("b5").value
    var b3 = document.getElementById("b3").value
    var b2 = document.getElementById("b2").value

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
    var b3 = document.getElementById("b3").value
    var b2 = document.getElementById("b2").value
    var b6 = document.getElementById("b6").value

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
    var b4 = document.getElementById("b4").value
    var b1 = document.getElementById("b1").value
    var b5 = document.getElementById("b5").value
    var b7 = document.getElementById("b7").value

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
    var b2 = document.getElementById("b5").value
    var b1 = document.getElementById("b2").value
    var b4 = document.getElementById("b4").value
    var b6 = document.getElementById("b6").value
    var b8 = document.getElementById("b8").value

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
    var b6 = document.getElementById("b6").value
    var b3 = document.getElementById("b3").value
    var b5 = document.getElementById("b5").value
    var b9 = document.getElementById("b9").value

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
    var b7 = document.getElementById("b7").value
    var b8 = document.getElementById("b8").value
    var b4 = document.getElementById("b4").value

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
    var b8 = document.getElementById("b8").value
    var b7 = document.getElementById("b7").value
    var b5 = document.getElementById("b5").value
    var b9 = document.getElementById("b9").value

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
    
    var b9 = document.getElementById("b9").value
    var b6 = document.getElementById("b6").value
    var b8 = document.getElementById("b8").value

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
    for (var i = 1;i<= 9 ;i++){
        document.getElementById('b'+i).value = "";
    } 
    document.getElementById("winner").innerHTML = "";
    document.getElementById('b1').value = "1";
    document.getElementById('b2').value = "2";
    document.getElementById('b3').value = "3";
    document.getElementById('b4').value = "4";
    document.getElementById('b5').value = "5";
    document.getElementById('b6').value = "";
    document.getElementById('b7').value = "7";
    document.getElementById('b8').value = "8";
    document.getElementById('b9').value = "6";

    var x=document.getElementsByClassName('i1'); 
    for (let i = 0; i < x.length; i++) {
        x[i].disabled=false;
    }
}

function ds(){
    var x=document.getElementsByClassName('i1'); 
    for (let i = 0; i < x.length; i++) {
        x[i].disabled=true;
    }
}
    

