console.log('Portfolio script loaded');

function showWelcomeMessage() {
    window.alert('Welcome sa portfolio ni Angel!!!!');
}

//Click my name to see the message =>
function clickHere() {
  document.getElementById("welcome-heading").innerHTML = "Hi! Welcome to my portfolio! I'm Angel <3";
}

//Dark modeee
function toggleTheme() {
    document.body.classList.toggle('dark');
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = document.body.classList.contains('dark') ? 'Light Mode ☀️' : 'Dark Mode 🌙';
    }
}
//change font styleeee sang contacts
document.getElementById("contact").style.fontFamily = "monospace, monospace";

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
