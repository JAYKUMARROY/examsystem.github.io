setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    if (htime>12) {
      hour1 = htime-12;
    }
    else{
      hour1 = htime
    }
    if (htime<12) {
        document.getElementById("meridian").innerHTML="AM"
    }
    else{
      document.getElementById("meridian").innerHTML="PM"
    }
    if (hour1<10) {
      hour2 = 0 + ""+ hour1
    } else {
      hour2 = htime
    }
    if (mtime<10) {
      minute1 = 0 + ""+ mtime
    } else {
      minute1 = mtime
    }
    if (stime<10) {
      second1 = 0 + ""+ stime
    } else {
      second1 = stime
    }
  document.getElementById("hour1").innerHTML=hour2
  document.getElementById("minute1").innerHTML=minute1
  document.getElementById("second1").innerHTML=second1

    
}, 1000);


function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function myFunction1() {
    var x = document.getElementById("myInput");
    if (x.type === "text") {
      x.type = "password";
    } else {
      x.type = "text";
    }
  }
//   let img = document.getElementById("img");
// img.addEventListener('onmouseup', () =>{
//   var x = document.getElementById("myInput");
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
// })
// document.onkeyup = function(e){
//   keyCode = e.keyCode;
//   console.log(keyCode)
//     alert("you have pressed"+" "+"'"+keyCode+"'");
// }
    let milisecond = 0;
setInterval(() => {
milisecond++;
document.getElementById("time_taken").value=milisecond/100
}, 10);