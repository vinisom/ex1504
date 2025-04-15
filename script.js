// Função que realiza o cálculo da soma
function somar() {
    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
    var num1 = parseFloat(document.getElementById("num1").value);

    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
    var num2 = parseFloat(document.getElementById("num2").value);

    // Criação da variável 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
    var soma = num1 + num2;

    // Verificação para garantir que os valores são números válidos
    if (isNaN(soma)) {
        // Exibe mensagem de erro se os valores não forem numéricos
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        // Atualiza o parágrafo com o resultado da soma
        document.getElementById("resultado").innerHTML = "A soma é: " + soma;
    }
}

// Função que realiza a subtração
function subtrair() {
    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
    var num1 = parseFloat(document.getElementById("num1").value);

    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
    var num2 = parseFloat(document.getElementById("num2").value);

    // Criação da variável 'resultadoSub' para armazenar o resultado da subtração de 'num1' e 'num2'
    var resultadoSub = num1 - num2;

    // Verificação para garantir que os valores são números válidos
    if (isNaN(resultadoSub)) {
        // Exibe mensagem de erro se os valores não forem numéricos
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        // Atualiza o parágrafo com o resultado da subtração
        document.getElementById("resultado").innerHTML = "A subtração é: " + resultadoSub;
    }
}

// Função que realiza a multiplicação
function multiplicar() {
    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
    var num1 = parseFloat(document.getElementById("num1").value);

    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
    var num2 = parseFloat(document.getElementById("num2").value);

    // Criação da variável 'produto' para armazenar o resultado da multiplicação de 'num1' e 'num2'
    var produto = num1 * num2;

    // Verificação para garantir que os valores são números válidos
    if (isNaN(produto)) {
        // Exibe mensagem de erro se os valores não forem numéricos
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        // Atualiza o parágrafo com o resultado da multiplicação
        document.getElementById("resultado").innerHTML = "O produto é: " + produto;
    }
}

// Função que realiza a divisão
function dividir() {
    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
    var num1 = parseFloat(document.getElementById("num1").value);

    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificação se o segundo número é zero para evitar divisão por zero
    if (num2 === 0) {
        document.getElementById("resultado").innerHTML = "Não é possível dividir por zero.";
        return;
    }

    // Criação da variável 'divisao' para armazenar o resultado da divisão de 'num1' por 'num2'
    var divisao = num1 / num2;

    // Verificação para garantir que os valores são números válidos
    if (isNaN(divisao)) {
        // Exibe mensagem de erro se os valores não forem numéricos
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        // Atualiza o parágrafo com o resultado da divisão
        document.getElementById("resultado").innerHTML = "A divisão é: " + divisao;
    }
}
