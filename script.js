function home() {
    document.documentElement.scrollTop = 0;
}
function about() {
    document.documentElement.scrollTop = 200;
}
function skills() {
    document.documentElement.scrollTop = 690;
}
function contact() {
    document.documentElement.scrollTop = 3000;
}

var o = document.getElementById('o')
var mob = document.getElementById('mob')
var nav = document.getElementById('navB')
mob.style = "display: none;"

o.addEventListener("click", function() {
    if (o.classList.contains("fa-bars")) {
        o.classList.remove("fa-bars")
        o.classList.add("fa-xmark")
        mob.style = "height: 100%;"
        nav.style = "height: 70%;"
    }
    else {
        o.classList.remove("fa-xmark")
        o.classList.add("fa-bars")
        mob.style = "display: none;"
        nav.style = "height: 5%;"
    }
})
