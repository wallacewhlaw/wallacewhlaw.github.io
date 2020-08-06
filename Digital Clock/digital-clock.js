function clock() {
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var date = document.getElementById('date');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var y = new Date().getFullYear();
    var n = new Date().getMonth();
    var d = new Date().getDate();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    year.innerHTML = y;
    month.innerHTML = n+1;
    date.innerHTML = d;
}

var interval = setInterval(clock, 1000)

