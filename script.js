const list = document.querySelectorAll(".list")
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));




let checkbox = document.querySelector('.checkbox');
let check = document.querySelector('.check');
let title =  document.querySelectorAll('.title');
checkbox.addEventListener('click', function () {
    document.body.style.backgroundColor = "#f5fffa";
    check.style.color ="#fff";
    title.forEach((item) => item.style.color = "Black");
    if (checkbox.checked) {
        document.body.style.backgroundColor = "#10131c";
        title.forEach((item) => item.style.color = "#fff");
        check.style.color ="#10131c";
    }
})



let menubutton = document.getElementById('menubutton');
let menuu = document.querySelector('.menuu');
menubutton.onclick = function () {
    menuu.classList.toggle('active');
}

let bt1 = document.querySelector('.bt1');
let card1 = document.querySelector('.card1');
bt1.onclick = function () {
    card1.classList.toggle('active');
}
let bt2 = document.querySelector('.bt2');
let card2 = document.querySelector('.card2');
bt2.onclick = function () {
    card2.classList.toggle('active');
}
let bt3 = document.querySelector('.bt3');
let card3 = document.querySelector('.card3');
bt3.onclick = function () {
    card3.classList.toggle('active');
}