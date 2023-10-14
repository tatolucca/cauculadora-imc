document.addEventListener('DOMContentLoaded', function () {
    // Esta função calcula o IMC
    function calcularIMC() {
        var peso = parseFloat(document.getElementById("peso").value);
        var altura = parseFloat(document.getElementById("altura").value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert("Por favor, insira um peso e altura válidos.");
            return;
        }

        // Calcular IMC
        var imc = peso / (altura * altura);

        // Mostrar o IMC
        document.getElementById("imc-valor").innerText = imc.toFixed(2);

        // Interpretar o IMC
        interpretarIMC(imc);
    }

    // Esta função interpreta o IMC
    function interpretarIMC(imc) {
        var resultado = document.getElementById("imc-classificacao");

        if (imc < 18.5) {
            resultado.innerText = "Você está abaixo do peso (magro).";
        } else if (imc < 24.9) {
            resultado.innerText = "Seu peso está dentro da faixa saudável.";
        } else if (imc < 29.9) {
            resultado.innerText = "Você está com sobrepeso.";
        } else {
            resultado.innerText = "Você está obeso.";
        }
    }

    // Adicionar um evento ao botão de calcular
    var calcularButton = document.getElementById("calcular");
    calcularButton.addEventListener("click", function () {
        calcularIMC();
    });
});
