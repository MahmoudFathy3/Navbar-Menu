let nav = document.querySelector("nav");
let menu = document.querySelector(".toggle");
let close = document.querySelector(".close");

menu.onclick = function(e) {
    nav.classList.add("open");
    document.body.style = 'background: rgba(0,0,0, .75)';
}

close.onclick = function() {
    nav.classList.remove("open");
    document.body.style = 'background: none';
}

document.onkeyup = function(e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
}