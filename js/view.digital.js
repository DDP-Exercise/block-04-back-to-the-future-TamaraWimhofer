"use strict";

function digitalClock(TIME) {
    const DISPLAY = document.getElementById("digitalClock");

    if (DISPLAY){
    const H = String(TIME.hours).padStart(2, "0");
    const M = String(TIME.minutes).padStart(2, "0");
    const S = String(TIME.seconds).padStart(2, "0");

        DISPLAY.innerText = H + ":" + M + ":" + S;
    }
}