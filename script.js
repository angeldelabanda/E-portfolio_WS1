console.log('Portfolio script loaded');

function showWelcomeMessage() {
    window.alert('Welcome sa portfolio ni Angel!!!!');
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = document.body.classList.contains('dark') ? 'Light Mode ☀️' : 'Dark Mode 🌙';
    }
}

window.onload = function () {
    showWelcomeMessage();
    console.log('Page loaded successfully');
};

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
