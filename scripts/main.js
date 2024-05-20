// My vars
const { clock: myClock } = {
    clock: document.querySelector(".clock")
}

// Comentario añadido.
setInterval(() => {
    
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let period = (hours < 12) ? "AM" : "PM";

    hours = hours > 12 ? hours - 12 : hours; 
    let time = `${hours}:${minutes}:${seconds} ${period}`;

    myClock.textContent = time;

}, 1000)