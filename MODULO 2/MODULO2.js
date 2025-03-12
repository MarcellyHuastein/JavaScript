// 1. Função de soma
const Soma = (num1, num2) => num1 + num2;

// 2. Função de subtração
const Subtrai = (num1, num2) => num1 - num2;

// 3. Função de multiplicação
const Multiplica = (num1, num2) => num1 * num2;

// 4. Função de divisão
const Divide = (num1, num2) => num1 / num2;

// 5. Função que mostra o resultado de todas as operações
const MostraResultado = (num1, num2) => {
    console.log(`Soma entre ${num1} e ${num2}:`, Soma(num1, num2));
    console.log(`Subtração entre ${num1} e ${num2}:`, Subtrai(num1, num2));
    console.log(`Multiplicação entre ${num1} e ${num2}:`, Multiplica(num1, num2));
    console.log(`Divisão entre ${num1} e ${num2}:`, Divide(num1, num2));
};

// Exemplo de uso
MostraResultado(10, 5);