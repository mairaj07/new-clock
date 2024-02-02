function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Months are 0-based
    var year = now.getFullYear();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;

    var timeString = hours + ":" + minutes + ":" + seconds;
    var dateString = day + "/" + month + "/" + year;

    
    document.getElementById("clock").innerHTML = timeString + "<br>" + dateString;
}

setInterval(updateClock, 1000);

updateClock();