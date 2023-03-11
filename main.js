let digitalclock = () =>{
let date = new Date();
let hoursone = date.getHours();
let minutesone = date.getMinutes();
let secondsone = date.getSeconds();
let amorpm = hoursone <= 12 ? 'am' : 'pm';

 let hours = document.getElementById("hours")
 hours.innerHTML = hoursone
let minutes = document.getElementById("minutes")
// console.log(minutes)
minutes.innerHTML = minutesone

let seconds = document.getElementById("seconds")
// console.log(seconds)
seconds.innerHTML = secondsone
let ampm =  document.getElementById("ampm")
ampm.innerHTML = amorpm

 setTimeout(digitalclock,500);




}
digitalclock()
