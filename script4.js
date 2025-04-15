function converterMoeda() {
    const valorBRL = parseFloat(document.getElementById("valor").value);
    const moedaDestino = document.getElementById("moeda").value;

    if (isNaN(valorBRL)) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
        return;
    }

    const taxas = {
        USD: 5.10,
        EUR: 5.50,
        GBP: 6.30
    };

    const valorConvertido = valorBRL / taxas[moedaDestino];

    const simbolos = {
        USD: "US$",
        EUR: "€",
        GBP: "£"
    };

    document.getElementById("resultado").innerText =
        `Valor convertido: ${simbolos[moedaDestino]} ${valorConvertido.toFixed(2)}`;
}
