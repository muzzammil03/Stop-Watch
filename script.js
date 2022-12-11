let seconds = 00;
let tenS = 00;
let minute = 00;
let getseconds = document.querySelector('.seconds');
let gettenS = document.querySelector('.tenS');
let getminute = document.querySelector('.minute');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnreset = document.querySelector('.btn-reset');
let interval;


btnStart.addEventListener('click', () => {
    start = setInterval(startTimer, 0)

})

btnStop.addEventListener('click', () => {
    clearInterval(start);

})
btnreset.addEventListener('click', () => {
    clearInterval(start);
    tenS = "00"
    seconds = "00"
    minute = "00"
    getseconds.innerHTML = seconds;
    gettenS.innerHTML = tenS;
    getminute.innerHTML = minute;
})



function startTimer() {
    tenS++;
    if (tenS < 9) {
        gettenS.innerHTML = '0' + tenS;
    }
    if (tenS > 9) {
        gettenS.innerHTML = tenS;
    }

    if (tenS > 99) {
        seconds++;
        gettenS.innerHTML = "0" + seconds;
        tenS = 0;
        gettenS.innerHTML = "0" + 0;
    }
    if (seconds > 0) {
        getseconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minute++;
        getminute.innerHTML = '0' + minute;
        seconds = 0;
        getseconds.innerHTML = "0" + 0;
    }
    if (mins > 9) {
        getseconds.innerHTML = minute;
    }
}
