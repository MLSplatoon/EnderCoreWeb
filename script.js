const phrases = ["Rápido", "Fácil", "Multi-Plataforma", "Open Source", "Ender Core"];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 80;
const deletingSpeed = 50;
const delayBetweenPhrases = 5000; // ! Tiempo que dura antes de cambiar a la siguiente

// ! Escribir el texto
function typeWriter() {
    const typewriterText = document.querySelector('.typewriter-text');
    const currentPhrase = phrases[phraseIndex];
    
    if (charIndex < currentPhrase.length) {
        typewriterText.innerHTML += currentPhrase.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(deleteText, delayBetweenPhrases);
    }
}
// ! Borrar el texto
function deleteText() {
    const typewriterText = document.querySelector('.typewriter-text');
    const currentPhrase = phrases[phraseIndex];
    
    if (charIndex > 0) {
        typewriterText.innerHTML = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, typingSpeed);
    }
}

// * Iniciar la Function
window.onload = function() {
    setTimeout(typeWriter, typingSpeed);
};

// ? Puede fallar si la function no se inicia junto con la primera?


// ! Hecho por MA_Dev
// * I spent 20 minutes making it work and I finally did it :)

