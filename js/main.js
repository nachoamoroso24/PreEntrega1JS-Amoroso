const opciones = ["piedra", "papel", "tijera"];

function obtenerOpcionComputadora() {
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function determinarResultado(jugador, computadora) {
    if (jugador === computadora) {
        return "empate";
    } else if (jugador === "piedra") {
        if (computadora === "tijera") {
            return "ganaste";
        } else {
            return "perdiste";
        }
    } else if (jugador === "papel") {
        if (computadora === "piedra") {
            return "ganaste";
        } else {
            return "perdiste";
        }
    } else if (jugador === "tijera") {
        if (computadora === "papel") {
            return "ganaste";
        } else {
            return "perdiste";
        }
    }
}

function jugar() {
    let resultados = {
        ganadas: 0,
        perdidas: 0,
        empates: 0
    };

    for (let i = 0; i < 10; i++) {
        let opcionJugador = prompt("Ingresa tu elección (piedra, papel o tijera):").toLowerCase();

        while (!opciones.includes(opcionJugador)) {
            opcionJugador = prompt("Entrada incorrecta. Por favor, ingresa piedra, papel o tijera:").toLowerCase();
        }

        const opcionComputadora = obtenerOpcionComputadora();
        const resultado = determinarResultado(opcionJugador, opcionComputadora);

        console.log(`Ronda ${i + 1}: Jugador elige ${opcionJugador}, BOT elige ${opcionComputadora}. Resultado: ${resultado}`);
        alert(`Ronda ${i + 1}: Jugador elige ${opcionJugador}, BOT elige ${opcionComputadora}. Resultado: ${resultado}`);

        if (resultado === "ganaste") {
            resultados.ganadas++;
        } else if (resultado === "perdiste") {
            resultados.perdidas++;
        } else {
            resultados.empates++;
        }
    }

    mostrarResultadoFinal(resultados);
}

function mostrarResultadoFinal(resultados) {
    console.log("Resultados finales:");
    console.log(`Ganadas: ${resultados.ganadas}`);
    console.log(`Perdidas: ${resultados.perdidas}`);
    console.log(`Empates: ${resultados.empates}`);
    alert(`Resultados finales:\nGanadas: ${resultados.ganadas}\nPerdidas: ${resultados.perdidas}\nEmpates: ${resultados.empates}`);
    if (resultados.ganadas > resultados.perdidas && resultados.ganadas > resultados.empates) {
        alert("Ganaste");
        window.location.href = "ganaste.html"; 
    } else if (resultados.perdidas > resultados.ganadas && resultados.perdidas > resultados.empates) {
        alert("Perdiste");
        window.location.href = "perdiste.html"; 
    } else if (resultados.empates > resultados.ganadas && resultados.empates > resultados.perdidas) {
        alert("Empate");
        window.location.href = "empate.html"; 
    }
}

jugar();