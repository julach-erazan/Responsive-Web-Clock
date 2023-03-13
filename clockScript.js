//Set Mode
function setMode1(){
    document.getElementById('black_id').style.background = "url(m1.png)";
    document.getElementById('black_id').style.backgroundSize = "cover";
    document.getElementById('black_id').style.backgroundPosition = "center";
    document.getElementById('black_id').style.backgroundRepeat = "no-repeat";

    document.getElementById('m1').style.transform = "scale(1.3,1.3)";

    document.getElementById('m2').style.transform = "scale(1,1)";
    document.getElementById('m3').style.transform = "scale(1,1)";
    document.getElementById('m4').style.transform = "scale(1,1)";
}

function setMode2(){
    document.getElementById('black_id').style.background = "url(m2.png)";
    document.getElementById('black_id').style.backgroundSize = "cover";
    document.getElementById('black_id').style.backgroundPosition = "center";
    document.getElementById('black_id').style.backgroundRepeat = "no-repeat";

    document.getElementById('m2').style.transform = "scale(1.3,1.3)";

    document.getElementById('m1').style.transform = "scale(1,1)";
    document.getElementById('m3').style.transform = "scale(1,1)";
    document.getElementById('m4').style.transform = "scale(1,1)";
}

function setMode3(){
    document.getElementById('black_id').style.background = "url(m3.png)";
    document.getElementById('black_id').style.backgroundSize = "cover";
    document.getElementById('black_id').style.backgroundPosition = "center";
    document.getElementById('black_id').style.backgroundRepeat = "no-repeat";


    document.getElementById('m3').style.transform = "scale(1.3,1.3)";

    document.getElementById('m1').style.transform = "scale(1,1)";
    document.getElementById('m2').style.transform = "scale(1,1)";
    document.getElementById('b4').style.transform = "scale(1,1)";
}

function setMode4(){
    document.getElementById('black_id').style.background = "url(m4.png)";
    document.getElementById('black_id').style.backgroundSize = "cover";
    document.getElementById('black_id').style.backgroundPosition = "center";
    document.getElementById('black_id').style.backgroundRepeat = "no-repeat";

    document.getElementById('m4').style.transform = "scale(1.3,1.3)";

    document.getElementById('m1').style.transform = "scale(1,1)";
    document.getElementById('m2').style.transform = "scale(1,1)";
    document.getElementById('m3').style.transform = "scale(1,1)";
}

//Set Color
function setRose(){
    document.getElementById('strap_id').style.backgroundColor = "#ff808b";

    document.getElementById('b1').style.transform = "scale(1.3,1.3)";

    document.getElementById('b2').style.transform = "scale(1,1)";
    document.getElementById('b3').style.transform = "scale(1,1)";
    document.getElementById('b4').style.transform = "scale(1,1)";
    document.getElementById('b5').style.transform = "scale(1,1)";
}

function setYellow(){

    document.getElementById('strap_id').style.backgroundColor = "#f7e948";

    document.getElementById('b2').style.transform = "scale(1.3,1.3)";
    
    document.getElementById('b1').style.transform = "scale(1,1)";
    document.getElementById('b3').style.transform = "scale(1,1)";
    document.getElementById('b4').style.transform = "scale(1,1)";
    document.getElementById('b5').style.transform = "scale(1,1)";
}

function setBlue(){

    document.getElementById('strap_id').style.backgroundColor = "#26b9c8";

    document.getElementById('b3').style.transform = "scale(1.3,1.3)";
    
    document.getElementById('b2').style.transform = "scale(1,1)";
    document.getElementById('b1').style.transform = "scale(1,1)";
    document.getElementById('b4').style.transform = "scale(1,1)";
    document.getElementById('b5').style.transform = "scale(1,1)";
}

function setGreen(){

    document.getElementById('strap_id').style.backgroundColor = "#aead0d";

    document.getElementById('b4').style.transform = "scale(1.3,1.3)";
    
    document.getElementById('b2').style.transform = "scale(1,1)";
    document.getElementById('b3').style.transform = "scale(1,1)";
    document.getElementById('b1').style.transform = "scale(1,1)";
    document.getElementById('b5').style.transform = "scale(1,1)";
}

function setParple(){

    document.getElementById('strap_id').style.backgroundColor = "#9575cd";

    document.getElementById('b5').style.transform = "scale(1.3,1.3)";
    
    document.getElementById('b2').style.transform = "scale(1,1)";
    document.getElementById('b3').style.transform = "scale(1,1)";
    document.getElementById('b4').style.transform = "scale(1,1)";
    document.getElementById('b1').style.transform = "scale(1,1)";
}

//Set Clock Face
function setClock1(){
    document.getElementById('anlgClock_id').style.background = "url(clock1.png)";
    document.getElementById('anlgClock_id').style.backgroundSize = "cover";

    document.getElementById('c1').style.transform = "scale(1.3,1.3)";
    document.getElementById('c2').style.transform = "scale(1,1)";
    document.getElementById('c3').style.transform = "scale(1,1)";
    document.getElementById('c4').style.transform = "scale(1,1)";

    document.getElementById('c1').style.backgroundColor = "black";
    document.getElementById('c1').style.border = "3px solid white";
    document.getElementById('c2').style.backgroundColor = "white";
    document.getElementById('c3').style.backgroundColor = "white";
    document.getElementById('c4').style.backgroundColor = "white";

}

function setClock2(){
    document.getElementById('anlgClock_id').style.background = "url(clock2.png)";
    document.getElementById('anlgClock_id').style.backgroundSize = "cover";

    document.getElementById('c2').style.transform = "scale(1.3,1.3)";
    document.getElementById('c1').style.transform = "scale(1,1)";
    document.getElementById('c3').style.transform = "scale(1,1)";
    document.getElementById('c4').style.transform = "scale(1,1)";

    document.getElementById('c2').style.backgroundColor = "black";
    document.getElementById('c2').style.border = "3px solid white";
    document.getElementById('c1').style.backgroundColor = "white";
    document.getElementById('c3').style.backgroundColor = "white";
    document.getElementById('c4').style.backgroundColor = "white";
}

function setClock3(){
    document.getElementById('anlgClock_id').style.background = "url(clock3.png)";
    document.getElementById('anlgClock_id').style.backgroundSize = "cover";

    document.getElementById('c3').style.transform = "scale(1.3,1.3)";
    document.getElementById('c2').style.transform = "scale(1,1)";
    document.getElementById('c1').style.transform = "scale(1,1)";
    document.getElementById('c4').style.transform = "scale(1,1)";

    document.getElementById('c3').style.backgroundColor = "black";
    document.getElementById('c3').style.border = "3px solid white";
    document.getElementById('c2').style.backgroundColor = "white";
    document.getElementById('c1').style.backgroundColor = "white";
    document.getElementById('c4').style.backgroundColor = "white";
}

function setClock4(){
    document.getElementById('anlgClock_id').style.background = "url(clock4.png)";
    document.getElementById('anlgClock_id').style.backgroundSize = "cover";

    document.getElementById('c4').style.transform = "scale(1.3,1.3)";
    document.getElementById('c2').style.transform = "scale(1,1)";
    document.getElementById('c3').style.transform = "scale(1,1)";
    document.getElementById('c1').style.transform = "scale(1,1)";

    document.getElementById('c4').style.backgroundColor = "black";
    document.getElementById('c4').style.border = "3px solid white";
    document.getElementById('c2').style.backgroundColor = "white";
    document.getElementById('c3').style.backgroundColor = "white";
    document.getElementById('c1').style.backgroundColor = "white";
}

function setClock4(){
    document.getElementById('anlgClock_id').style.background = "url(clock4.png)";
    document.getElementById('anlgClock_id').style.backgroundSize = "cover";

    document.getElementById('c4').style.transform = "scale(1.3,1.3)";
    document.getElementById('c2').style.transform = "scale(1,1)";
    document.getElementById('c3').style.transform = "scale(1,1)";
    document.getElementById('c1').style.transform = "scale(1,1)";

    document.getElementById('c4').style.backgroundColor = "black";
    document.getElementById('c4').style.border = "3px solid white";
    document.getElementById('c2').style.backgroundColor = "white";
    document.getElementById('c3').style.backgroundColor = "white";
    document.getElementById('c1').style.backgroundColor = "white";
}


setInterval(() => {

    //Analog Clock

    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
})

