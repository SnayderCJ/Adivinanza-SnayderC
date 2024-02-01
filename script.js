const numeroEntrada = document.getElementById("numeroEntrada");
const mensaje = document.getElementById("mensaje");
const intento = document.getElementById("intento");

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentosRealizados = 0;

function resultado() {
    const numeroIngresado = parseInt(numeroEntrada.value);

    intentosRealizados++;

    intento.textContent = intentosRealizados;

    if (numeroIngresado == numeroAleatorio) {
        mensaje.textContent = `¡Felicidades! Adivinaste el número en ${intentosRealizados} intentos.`;
        mensaje.style.color = 'green';
    } else if (numeroIngresado < numeroAleatorio) {
        mensaje.textContent = "Pista: El número es mayor. Intenta de nuevo.";
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = "Pista: El número es menor. Intenta de nuevo.";
        mensaje.style.color = 'yellow';
    }

   numeroEntrada.value = ''
}

numeroEntrada.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        resultado();
    }
});