const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const menuHolder = document.querySelector(".navbar-menu-container");

menu.addEventListener('click', function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    menuHolder.classList.toggle("actives");
})

const cb = document.querySelector('#checkbox');
const month = document.querySelector("#monthly");
const year = document.querySelector("#yearly");
const four = document.querySelector("#four");
const twelve = document.querySelector("#twelve");
const seven = document.querySelector("#seven");

function yearly() {
    four.innerHTML = "$43";
    twelve.innerHTML = "$129";
    seven.innerHTML = "$75";
    document.querySelector("#planfour").innerHTML = "/yr";
    document.querySelector("#plantwelve").innerHTML = "/yr";
    document.querySelector("#planseven").innerHTML = "/yr";
}

function monthly() {
    four.innerHTML = "$4";
    twelve.innerHTML = "$12";
    seven.innerHTML = "$7";
    document.querySelector("#planfour").innerHTML = "/mo";
    document.querySelector("#plantwelve").innerHTML = "/mo";
    document.querySelector("#planseven").innerHTML = "/mo";
}

cb.addEventListener('click', function () {
    /*console.log(cb.checked);*/
    if (cb.checked == true) {
        /*console.log("yearly will be bold");*/
        year.classList.toggle("p-bold");
        month.classList.toggle("p-bold");
        yearly();
    }
    else {
        /*console.log("monthly will be bold");*/
        month.classList.toggle("p-bold");
        year.classList.toggle("p-bold");
        monthly();
    }
})