document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typed-text");
    const strings = ["Front-End Developer", "Backend Developer", "Python Fullstack Developer"];
    let currentIndex = 0;
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let isTyping = true;

    function type() {
        if (isTyping) {
            textElement.textContent = "I am a " + strings[currentIndex].slice(0, currentCharIndex);
            currentCharIndex++;
            if (currentCharIndex > strings[currentIndex].length) {
                isTyping = false;
                setTimeout(erase, 600); // Delay before erasing
            } else {
                setTimeout(type, 50); // Typing speed (adjust as needed)
            }
        }
    }

    function erase() {
        textElement.textContent = "I am a " + strings[currentIndex].slice(0, currentCharIndex);
        currentCharIndex--;
        if (currentCharIndex === 0) {
            currentIndex = (currentIndex + 1) % strings.length;
            isTyping = true;
            setTimeout(type, 300); // Delay before typing the next string
        } else {
            setTimeout(erase, 50); // Erasing speed (adjust as needed)
        }
    }

    // Start the typing animation
    type();
});



// Define a function to update the message in the contact div
function updateMessage(message) {
    var contactDiv = document.getElementById("contactmessage");
    var messageHeader = contactDiv.querySelector("h2");
    messageHeader.textContent = message;
}

// Define a function to handle the button click event
function contact() {
    updateMessage("Your message has been sent successfully!");
}

