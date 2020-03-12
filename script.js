const MENU = document.getElementById("menu");
const BUTTON = document.getElementById("btn");
const CLOSE_BUTTON = document.getElementById("close-btn");

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    function toAnchor(anchor) {
        window.location = "#" + anchor;
    }
    window.onclick = function () { toAnchor("home"); };
    window.onclick = function () { toAnchor("Our-services"); };
    window.onclick = function () { toAnchor("portfolio"); };
    window.onclick = function () { toAnchor("about-us"); };
    window.onclick = function () { toAnchor("get-quote"); };
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