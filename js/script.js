// Typing Text

function typeText(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra,i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 75 * i);
    });
    console.log(textArray)
}

const title = document.querySelector("h1");



