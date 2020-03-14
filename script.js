const MENU = document.getElementById("menu");
const MENU_PORTFOLIO = document.getElementById("menu-portfolio");
const BUTTON = document.getElementById("btn");
const CLOSE_BUTTON = document.getElementById("close-btn");
const PORTFOLIO = document.getElementById("portfolio-grid");
const ONSUBMIT = document.getElementById("onsubmit");
const iphone1 = document.querySelector(".iphone-button1");
const iphone2 = document.querySelector(".iphone-button2");
const iphone3 = document.querySelector(".iphone-button3");
const offscreen1 = document.querySelector(".offscreen1");
const offscreen2 = document.querySelector(".offscreen2");
const offscreen3 = document.querySelector(".offscreen3");
const CHEV_LEFT = document.querySelector(".chev_left");
const CHEV_RIGHT = document.querySelector(".chev_right");
const GRID_ITEM = document.querySelectorAll(".grid-item");
let slider = document.getElementsByClassName("slider");
let screenoff1 = false;
let screenoff2 = false;
let screenoff3 = false;

CHEV_LEFT.addEventListener('click', () => {
    plusSlides(-1);
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
});

CHEV_RIGHT.addEventListener('click', () => {
    plusSlides(1);
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
});

iphone1.addEventListener('click', () => {
    screenoff1 = !screenoff1;
    screenoff1 ? offscreen1.style.display = "block" : offscreen1.style.display = "none";
});

iphone2.addEventListener('click', () => {
    screenoff2 = !screenoff2;
    screenoff2 ? offscreen2.style.display = "block" : offscreen2.style.display = "none";
});

iphone3.addEventListener('click', () => {
    screenoff3 = !screenoff3;
    screenoff3 ? offscreen3.style.display = "block" : offscreen3.style.display = "none";
});

ONSUBMIT.addEventListener('submit', (e) => {
    e.preventDefault();
    return false;
});

MENU_PORTFOLIO.addEventListener('click', (event) => {
    MENU_PORTFOLIO.querySelectorAll('p').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    if (event.target.classList[1] == 'b1') {
        GRID_ITEM[0].classList.remove('last-item');
        GRID_ITEM[1].classList.remove('last-item');
        GRID_ITEM[2].classList.remove('last-item');
    };
    if (event.target.classList[1] == 'b2') {
        GRID_ITEM[0].classList.remove('last-item');
        GRID_ITEM[1].classList.remove('last-item');
        GRID_ITEM[2].classList.remove('last-item');
        GRID_ITEM[0].classList.add('last-item');
    };
    if (event.target.classList[1] == 'b3') {
        GRID_ITEM[0].classList.remove('last-item');
        GRID_ITEM[1].classList.remove('last-item');
        GRID_ITEM[2].classList.remove('last-item');
        GRID_ITEM[0].classList.add('last-item');
        GRID_ITEM[1].classList.add('last-item');
    };
    if (event.target.classList[1] == 'b4') {
        GRID_ITEM[0].classList.add('last-item');
        GRID_ITEM[1].classList.add('last-item');
        GRID_ITEM[2].classList.add('last-item');
    };
});

PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

BUTTON.addEventListener('click', (e) => {
    if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()) {
        e.preventDefault();
        const subject = document.getElementById('subject').value.toString();
        const project = document.getElementById('project').value.toString();
        document.getElementById('result1').innerText = 'Письмо отправлено';

        if (subject !== '') {
            document.getElementById('result2').innerText = 'Тема: ' + subject;
        }
        else { document.getElementById('result2').innerText = 'Без темы'; }

        if (project !== '') {
            document.getElementById('result3').innerText = 'Описание: ' + project;
        }
        else { document.getElementById('result3').innerText = 'Без описания'; }

        document.getElementsByTagName('body')[0].classList.add('hide');
        document.getElementById('message-block').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result1').innerText = '';
    document.getElementById('result2').innerText = '';
    document.getElementById('result3').innerText = '';
    document.getElementsByTagName('body')[0].classList.remove('hide');
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    offscreen1.style.display = "none";
    screenoff1 = false;
    offscreen2.style.display = "none";
    screenoff2 = false;
    offscreen3.style.display = "none";
    screenoff3 = false;
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}