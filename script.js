const MENU = document.getElementById("menu");
const MENU_PORTFOLIO = document.getElementById("menu-portfolio");
const BUTTON = document.getElementById("btn");
const CLOSE_BUTTON = document.getElementById("close-btn");
const PORTFOLIO = document.getElementById("portfolio-grid");
const ONSUBMIT = document.getElementById("onsubmit");
const iphone1 = document.querySelector(".iphone1");
const iphone2 = document.querySelector(".iphone2");
const offscreen1 = document.querySelector(".offscreen1");
const offscreen2 = document.querySelector(".offscreen2");
const CHEV_LEFT = document.querySelector(".chev_left");
const CHEV_RIGHT = document.querySelector(".chev_right");
let slider = document.getElementsByClassName("slider");
let screenoff1 = false;
let screenoff2 = false;

CHEV_LEFT.addEventListener('click', (e) => {
    plusSlides(-1);
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
});

CHEV_RIGHT.addEventListener('click', (e) => {
    plusSlides(1);
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
});

iphone1.addEventListener('click', (e) => {
    screenoff1 = !screenoff1;
    screenoff1 ? offscreen1.style.display = "block" : offscreen1.style.display = "none";
});

iphone2.addEventListener('click', (e) => {
    screenoff2 = !screenoff2;
    screenoff2 ? offscreen2.style.display = "block" : offscreen2.style.display = "none";
});

ONSUBMIT.addEventListener('submit', (e) => {
    e.preventDefault();
    return false;
});

MENU_PORTFOLIO.addEventListener('click', (event) => {
    MENU_PORTFOLIO.querySelectorAll('p').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
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
    if (document.getElementById('name').value !== '' && document.getElementById('email').value !== '') {
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

        document.getElementById('body').classList.add('hide');
        document.getElementById('message-block').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result1').innerText = '';
    document.getElementById('result2').innerText = '';
    document.getElementById('result3').innerText = '';
    document.getElementById('body').classList.remove('hide');
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