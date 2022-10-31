// const daysE1 = document.getElementById('days');
// const hoursE1 = document.getElementById('hours');
// const minsE1 = document.getElementById('mins');
// const secondsE1 = document.getElementById('seconds');

// const newYears = '1 Jan 2023';


// function countDown(){
//     const newYearsDate = new Date(newYears);
//     const currentDate = new Date();

//     const totalseconds = (newYearsDate- currentDate) / 1000;

//     const days  = Math.floor(totalseconds / 3600 / 24);
//     const hours  = Math.floor(totalseconds / 3600) % 24;
//     const min = Math.floor(totalseconds / 60) % 60;
//     const seconds = Math.floor(totalseconds) % 60 ;
//     console.log(days,hours, minutes, seconds);

//     daysE1.innerHTML = days;
//     hoursE1.innerHTML = hours;
//     minsE1.innerHTML = min;
//     secondsE1.innerHTML = seconds; 

// }

// function formatTime(time){
//     return time <10 ? `0${time`} : time 
// }

// //initial call
// countDown();


// setInterval(countDown , 1000)



const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
