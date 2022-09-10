
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

