
function show() {
    let elem = document.getElementById("input-travel").value;
    if (elem == "travel") {
        document.getElementById("travel-link").style.display = "inline";
        document.getElementById("output").style.display = "none";
        document.getElementById("form-travel").style.display = "none";
    } else {
        document.getElementById("output").style.color = "rgb(54, 53, 53)";
        document.getElementById("input-travel").value = "";
        document.getElementById("output").innerHTML = "رمز وارد شده اشتباه است.لطفا از مدیر وب سایت رمز را دریافت نمایید";
    }
}


function showinfo() {
    let elem = document.getElementById("input-info").value;
    if (elem == "information") {
        document.getElementById("info-link").style.display = "inline";
        document.getElementById("output-info").style.display = "none";
        document.getElementById("form-info").style.display = "none";
    } else {
        document.getElementById("output-info").style.color = "rgb(54, 53, 53)";
        document.getElementById("input-info").value = "";
        document.getElementById("output-info").innerHTML = "رمز وارد شده اشتباه است.لطفا از مدیر وب سایت رمز را دریافت نمایید";
    }
}


function showrest() {
    let elem = document.getElementById("input-rest").value;
    if (elem == "restourantalireza") {
        document.getElementById("link-rest").style.display = "inline";
        document.getElementById("output-rest").style.display = "none";
        document.getElementById("form-rest").style.display = "none";
    } else {
        document.getElementById("output-rest").style.color = "rgb(54, 53, 53)";
        document.getElementById("input-rest").value = "";
        document.getElementById("output-rest").innerHTML = "رمز وارد شده اشتباه است.لطفا از مدیر وب سایت رمز را دریافت نمایید";
    }
}


function showblock() {
    let elem = document.getElementById("input-blockchain").value;
    if (elem == "blockchain") {
        document.getElementById("link-block").style.display = "inline";
        document.getElementById("output-block").style.display = "none";
        document.getElementById("form-block").style.display = "none";
    } else {
        document.getElementById("output-block").style.color = "rgb(54, 53, 53)";
        document.getElementById("input-blockchain").value = "";
        document.getElementById("output-block").innerHTML = "رمز وارد شده اشتباه است.لطفا از مدیر وب سایت رمز را دریافت نمایید";
    }
}

$(document).ready(function () {
    $("#ul-navbar li").first().fadeIn(1000, function nextitem() {
        $(this).next("li").fadeIn(1000, nextitem);
    });
});

let triggerbutton = document.querySelector(".dark-mode-trigger");
triggerbutton.addEventListener("click", function () {
    let mybody = document.querySelector("body");
    mybody.classList.toggle("dark");
    if (mybody.classList.contains("dark")) {
        triggerbutton.innerHTML = " <span class='material-symbols-outlined yellow' title='حالت روز'>sunny</span >";
    } else {
        triggerbutton.innerHTML = "<span class='material-symbols-outlined white' title='حالت شب'>bedtime_off</span>";
    }
});



function gregorian_to_jalali(gy, gm, gd) {
    var g_d_m, jy, jm, jd, gy2, days;
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    gy2 = (gm > 2) ? (gy + 1) : gy;
    days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
    jy = -1595 + (33 * ~~(days / 12053));
    days %= 12053;
    jy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
        jy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
    }
    if (days < 186) {
        jm = 1 + ~~(days / 31);
        jd = 1 + (days % 31);
    } else {
        jm = 7 + ~~((days - 186) / 30);
        jd = 1 + ((days - 186) % 30);
    }
    return [jy, jm, jd];
}

MyDate = new Date();
Year = MyDate.getFullYear();
Month = MyDate.getMonth() + 1;
Day = MyDate.getDate();

var Result = document.getElementById("result");

Tarikh_Shamci = gregorian_to_jalali(Year, Month, Day);
Result.innerHTML = Tarikh_Shamci[0] + '/' + Tarikh_Shamci[1] + '/' + Tarikh_Shamci[2];




function ShowTime() {
    var MyDate = new Date();
    var My_Hour = MyDate.getUTCHours();
    var My_Minute = MyDate.getUTCMinutes();
    var My_Second = MyDate.getUTCSeconds();
    var Result = document.getElementById("result-time");
    Result.innerHTML = My_Hour + ":" + My_Minute + ":" + My_Second;
}

setInterval(ShowTime, 10);


function videoone() {
    document.getElementById("videotwo").pause();
    document.getElementById("videothree").pause();
    document.getElementById("videofour").pause();
}
function videotwo() {
    document.getElementById("videoone").pause();
    document.getElementById("videothree").pause();
    document.getElementById("videofour").pause();
} function videothree() {
    document.getElementById("videoone").pause();
    document.getElementById("videotwo").pause();
    document.getElementById("videofour").pause();
} function videofour() {
    document.getElementById("videoone").pause();
    document.getElementById("videotwo").pause();
    document.getElementById("videothree").pause();
}

