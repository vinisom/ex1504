function converterTemperatura() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    let resultado = "";

    if (!isNaN(celsius)) {
        const fahrenheitConvertido = (celsius * 9 / 5) + 32;
        resultado = `Temperatura em Fahrenheit: ${fahrenheitConvertido.toFixed(2)} °F`;
    }
    else if (!isNaN(fahrenheit)) {
        const celsiusConvertido = (fahrenheit - 32) * 5 / 9;
        resultado = `Temperatura em Celsius: ${celsiusConvertido.toFixed(2)} °C`;
    } else {
        resultado = "Por favor, insira um valor válido.";
    }

    document.getElementById("resultado").innerText = resultado;
}
