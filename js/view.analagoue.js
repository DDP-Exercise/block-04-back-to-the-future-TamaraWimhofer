"use strict";

function analagoueClock(TIME){
    const SDEGREE = TIME.seconds * 6;
    const MDEGREE = TIME.seconds * 6;
    const HDEGREE = (TIME.hours % 12) * 30 + (TIME.minutes * 0.5);

    const SHAND = document.getElementById("sec-hand");
    const MHAND = document.getElementById("min-hand");
    const HHAND = document.getElementById("hour-hand");

    if (SHAND) SHAND.style.transform = "rotate(" + SDEGREE + "deg)";
    if (MHAND) MHAND.style.transform = "rotate(" + MDEGREE + "deg)";
    if (HHAND) HHAND.style.transform = "rotate(" + HDEGREE + "deg)";
}