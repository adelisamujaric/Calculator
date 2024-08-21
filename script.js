function dateAndTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();

    document.getElementById("timerText").textContent = dateTimeString;
}
dateAndTime();
setInterval(dateAndTime, 1000);

