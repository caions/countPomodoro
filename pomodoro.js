var inputRef = document.querySelector('div#app input');
var buttonRef = document.querySelector('div#app button');

function convertHour() {
    let f0 = inputRef.value.split(":");
    value.innerHTML = ((Number(f0[0])*60)+Number(f0[1]))/25 + " Pomodoros";
    return 0;
    }

