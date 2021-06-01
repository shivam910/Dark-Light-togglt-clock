function toggleClass()
{
    const body = document.querySelector("body");
    body.classList.toggle("light")
}

const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() =>{
    let day = new Date();
    let hour = day.getHours() * 30;
    let minute = day.getMinutes() * deg;
    let second = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hour) + (minute / 12)}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${second}deg)`;
})