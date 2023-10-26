const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
function clock(){
    const time = new Date()
    const hours = time.getHours();
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    if(hours < 10){
        hour.innerHTML = "0" + hours
    }
    else{
        hour.innerHTML = hours;
    }
    if(minutes < 10){
        minute.innerHTML = "0" + minutes
    }
    else{
        minute.innerHTML = minutes;
    }
    if(seconds < 10){
        second.innerHTML = "0" + seconds
    }
    else{
        second.innerHTML = seconds;
    }
    // second.innerHTML = seconds
}
setInterval(clock, 1000)