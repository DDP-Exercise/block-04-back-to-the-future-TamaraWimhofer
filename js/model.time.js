"use strict";
function timeNow() {
    let date = new Date();

    return{
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}
