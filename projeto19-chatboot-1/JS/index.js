// toggle chatbox 

const chatboxToggle = document.querySelector('.chatbox-toggle');
const chatboxMessage = document.querySelector('.chatbox-message-wrapper');

chatboxToggle.addEventListener('click', function () {
    chatboxMessage.classList.toggle('show');
});

// toggle dot (config)

const dotToggle = document.querySelector('.chatbox-message-dropdown-toggle');
const dotConfig = document.querySelector('.chatbox-message-dropdown-menu');

dotToggle.addEventListener('click', function () {
    dotConfig.classList.toggle('show');
});

document.addEventListener('click', function(e) {
    if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
        dotConfig.classList.remove('show');
    }
});