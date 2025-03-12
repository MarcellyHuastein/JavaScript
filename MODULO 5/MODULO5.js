// 1. Função para calcular o tempo restante até uma data futura
const calcularTempoRestante = (dataFutura) => {
    const agora = new Date(); // Data e hora atuais
    const diferenca = dataFutura - agora; // Diferença em milissegundos

    // Verifica se a data futura já passou
    if (diferenca <= 0) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    // Calcula dias, horas, minutos e segundos restantes
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
};

// 2. Função para atualizar o temporizador na tela
const atualizarTemporizador = (dataFutura) => {
    const tempoRestante = calcularTempoRestante(dataFutura);

    // Exibe o tempo restante no console
    console.log(
        `Tempo restante: ${tempoRestante.dias} dias, ${tempoRestante.horas} horas, ${tempoRestante.minutos} minutos, ${tempoRestante.segundos} segundos`
    );

    // Verifica se o tempo acabou
    if (
        tempoRestante.dias === 0 &&
        tempoRestante.horas === 0 &&
        tempoRestante.minutos === 0 &&
        tempoRestante.segundos === 0
    ) {
        console.log("Tempo esgotado!");
        clearInterval(intervalo); // Para o temporizador
    }
};

// 3. Define a data futura (exemplo: 31 de dezembro de 2023, 23:59:59)
const dataFutura = new Date("2023-12-31T23:59:59");

// 4. Atualiza o temporizador a cada segundo
const intervalo = setInterval(() => atualizarTemporizador(dataFutura), 1000);

// Inicia o temporizador imediatamente
atualizarTemporizador(dataFutura);