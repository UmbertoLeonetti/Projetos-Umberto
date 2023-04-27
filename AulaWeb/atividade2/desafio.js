const secretWord = "hello";

// Verifica se uma letra está contida na palavra secreta
function isLetterCorrect(letter, index) {
    return secretWord.includes(letter) && secretWord.indexOf(letter) !== index;
}

// Verifica se a palavra informada está correta
function checkWord() {
    const wordInput = document.querySelector(".word-input");
    const word = wordInput.value.toLowerCase();
    const feedback = document.querySelector(".feedback");

    // Verifica se a palavra informada tem o tamanho correto
    if (word.length !== 5) {
        feedback.innerText = "Word must have 5 letters";
        feedback.classList.add("red");
        return;
    }

    let allLettersCorrect = true;
    let allLettersChecked = true;

    // Verifica cada letra da palavra informada
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        // Se a letra estiver correta e na posição correta, adiciona a classe green
        if (letter === secretWord[i]) {
            feedback.innerHTML += `<span class="feedback green">${letter}</span>`;
        }
        // Se a letra estiver correta, mas na posição errada, adiciona a classe yellow
        else if (isLetterCorrect(letter, i)) {
            feedback.innerHTML += `<span class="feedback yellow">${letter}</span>`;
            allLettersCorrect = false;
        }
        // Se a letra estiver incorreta, adiciona a classe red
        else {
            feedback.innerHTML += `<span class="feedback red">${letter}</span>`;
            allLettersCorrect = false;
        }

        // Verifica se todas as letras foram checadas
        if (letter === "") {
            allLettersChecked = false;
        }
    }
}