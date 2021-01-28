function timeCheck(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function displayLocationTimeTokyo() {
    let dateTime = new Date().toLocaleString("en-UK", { timeZone: "Asia/Tokyo" });
    dateTime = new Date(dateTime);
    let location = "Tokyo";
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    hours = timeCheck(hours);
    minutes = timeCheck(minutes);
    seconds = timeCheck(seconds);
    document.getElementById("locationTime").innerHTML = hours + ":" + minutes + ":" + seconds + "  " + location;
}
function displayLocationTimeLondon() {
    let dateTime = new Date().toLocaleString("en-UK", { timeZone: "Europe/London" });
    dateTime = new Date(dateTime);
    let location = "London";
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    hours = timeCheck(hours);
    minutes = timeCheck(minutes);
    seconds = timeCheck(seconds);
    document.getElementById("locationTime").innerHTML = hours + ":" + minutes + ":" + seconds + "  " + location;
}

function displayLocationTimeIstanbul() {
    let dateTime = new Date().toLocaleString("en-UK", { timeZone: "Europe/Istanbul" });
    dateTime = new Date(dateTime);
    let location = "Istanbul";
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    hours = timeCheck(hours);
    minutes = timeCheck(minutes);
    seconds = timeCheck(seconds);
    document.getElementById("locationTime").innerHTML = hours + ":" + minutes + ":" + seconds + "  " + location;
}
function currentTimeLocation() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    hours = timeCheck(hours);
    minutes = timeCheck(minutes);
    seconds = timeCheck(seconds);
    document.getElementById("locationTime").innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(currentTimeLocation, 15000);