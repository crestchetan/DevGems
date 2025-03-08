const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const clock = setInterval(
    function time() {
        const the_date = new Date(); // get the current date and time

        let hr = the_date.getHours();
        let min = the_date.getMinutes();
        let sec = the_date.getSeconds();

        hr = hr.toString().padStart(2, "0");
        min = min.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");

        hours.textContent = hr;
        minutes.textContent = min;
        seconds.textContent = sec;
    },
    1000
);