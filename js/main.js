const opciones = ["piedra", "papel", "tijera"];
let rondaActual = 0;
let resultados = {
    ganadas: 0,
    perdidas: 0,
    empates: 0
};

function obtenerOpcionComputadora() {
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function determinarResultado(jugador, computadora) {
    if (jugador === computadora) {
        return "empate";
    } else if (jugador === "piedra" && computadora === "tijera" ||
               jugador === "papel" && computadora === "piedra" ||
               jugador === "tijera" && computadora === "papel") {
        return "ganaste";
    } else {
        return "perdiste";
    }
}

function jugar() {
    if (rondaActual < 10) {
        const opcionJugador = document.getElementById('playerChoice').value;
        const opcionComputadora = obtenerOpcionComputadora();
        const resultado = determinarResultado(opcionJugador, opcionComputadora);

        const resultadoTexto = `Ronda ${rondaActual + 1}: Tú eliges ${opcionJugador}, BOT elige ${opcionComputadora}. Resultado: ${resultado}`;
        document.getElementById('resultado').innerText = resultadoTexto;

        if (resultado === "ganaste") {
            resultados.ganadas++;
        } else if (resultado === "perdiste") {
            resultados.perdidas++;
        } else {
            resultados.empates++;
        }

        rondaActual++;
    }

    if (rondaActual === 10) {
        mostrarResultadosFinales();
    }
}

function mostrarResultadosFinales() {
    if (resultados.ganadas > resultados.perdidas && resultados.ganadas > resultados.empates) {
        window.location.href = "ganaste.html"; 
    } else if (resultados.perdidas > resultados.ganadas && resultados.perdidas > resultados.empates) {
        window.location.href = "perdiste.html"; 
    } else {
        window.location.href = "empate.html"; 
    }
}