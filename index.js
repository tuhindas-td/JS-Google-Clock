setInterval(() => {
    var date = new Date();
    var hourTime = date.getHours();
    var minuteTime = date.getMinutes();
    var secondTime = date.getSeconds();
    var hourHandRotation = (30 * hourTime) + (minuteTime / 2);
    var minuteHandRotation = 6 * minuteTime;
    var secondHandRotation = 6 * secondTime;
    hour.style.transform = `rotate(${hourHandRotation}deg)`;
    minute.style.transform = `rotate(${minuteHandRotation}deg)`;
    second.style.transform = `rotate(${secondHandRotation}deg)`;
    var digitalClock = document.getElementById("display");
    var session = "AM";
    if (hourTime > 12) {
        hourTime -= 12;
        session = "PM"
    }
    hourTime = (hourTime < 10) ? "0" + hourTime : hourTime;
    minuteTime = (minuteTime < 10) ? "0" + minuteTime : minuteTime;
    secondTime = (secondTime < 10) ? "0" + secondTime : secondTime;
    var time = hourTime + ":" + minuteTime + ":" + secondTime + " " + session;
    digitalClock.innerText = time;
}, 1000);