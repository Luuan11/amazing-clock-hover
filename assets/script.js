// alert("oi") test

function updateClock() {
    let now = new Date();
    let dname = now.getDay(),
        month = now.getMonth(),
        dnum = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        period = "am";


if (hour >- 12){
    period = "pm";
}
if (hour == 0){
    hour = 12;
}
if (hour > 12){
    hour - hour - 12;
}

Number.prototype.pad = function(digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
}

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];

let values = [week[dname], months[month], dnum.pad(2), year, hour.pad(2), min.pad(2), sec.pad(2), period];

for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function Clock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}
