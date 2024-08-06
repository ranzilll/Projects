let hr = document.getElementById('hour');
let min = document.getElementById('min');
let cd = document.getElementById('currday');
let cde = document.getElementById('currdate');
let ct = document.getElementById('currtime');


function displayTime(){
    let date = new Date();
    // console.log(date);

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let hh = date.getHours();
    let mm = date.getMinutes();
    let dd = days[date.getDay()];
    let mo = months[date.getMonth()];
    let dy = date.getDate();
    // console.log(dy);
    let ye = date.getFullYear();
    let tm = date.getTime();
    // let hh = date.gethh();
    // let minutes = date.getMinutes();
    // console.log(tm)
    

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;

    cd.innerHTML = dd;

    cde.innerHTML = `${mo} ${dy},${ye}`;

    const ampm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12;
    hh = hh ? hh : 12; // the hour '0' should be '12'
    mm = mm.toString().padStart(2, '0');
    // console.log(hh);
    // console.log(mm);
    const tc = `${hh}:${mm} <span class="ampm">${ampm}<span/>`;
    // return tc;
    
    ct.innerHTML = tc;

}
setInterval(displayTime,1000)
