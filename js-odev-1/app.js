let userName = document.getElementById("myName")
let pageTime = document.getElementById("time")

let yourName = prompt("Isminiz nedir?")
userName.innerHTML = yourName


function updateClock() {
    let now = new Date()
    months = ['January', 'February', '...']
    time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '        ' + now.getDay() + '-' + months[now.getMonth()] + '-' + now.getFullYear()
    pageTime.innerHTML = time;
    setTimeout(updateClock, 1000);
}

updateClock();

