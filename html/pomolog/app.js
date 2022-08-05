const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const stopBtn = document.getElementById("stopBtn");

const wm = document.getElementById("w_minutes");
const ws = document.getElementById("w_seconds");

const bm = document.getElementById("b_minutes");
const bs = document.getElementById("b_seconds");




// pseudo code

// function that will start the clock

let startTimer;

startBtn.addEventListener("click", function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000);
    } else {
        alert("The timer is already running");
    };
});


resetBtn.addEventListener("click", function() {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById("counter").innerText = 0;
    stopInterval();
    startTimer = undefined;

})

stopBtn.addEventListener("click", function(){
    stopInterval();
    startTimer = undefined;

})

function timer () {
    // Work timer countdown
    if (ws.innerText != 0){
        ws.innerText--;
    } else if (wm.innerText !=0 && ws.innerText == 0 ){
        ws.innerText = 59;
        wm.innerText--;
    
    };
    
    // Break timer countdown

    if (wm.innerText == 0 && ws.innerText == 0 ){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if (bm.innerText !=0 && bs.innerText == 0 ){
            bs.innerText = 59;
            bm.innerText--;
        
        };
    };

    // Increment counter by on eif one full cycle is completed
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText==0) {
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById("counter").innerText++;
    };
};

// Stop timer function 

function stopInterval(){
    clearInterval(startTimer);
}


