const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');
const text = 'Hi, Welcome to DevGems'; // Text you want to display

let index = 0;

function typing() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typing, 50); // Increase or decrease typing speed (milliseconds)
    } else {
        cursor.style.display = 'none'; // Hide cursor after typing
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typing();
});