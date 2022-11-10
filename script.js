document.getElementById("btn-calc").onclick = function () {

    const inic = document.getElementById("capital").value;
    const jur = document.getElementById("juros").value;
    const temp = document.getElementById("periodo").value;
    const apor = document.getElementById("aporte").value;

    const resultado = (parseFloat(inic) * ((1 + (parseFloat(jur) / 100)) ** parseInt(temp))) + (parseFloat(apor) * (((((1 + (parseFloat(jur) / 100))) ** parseInt(temp)) - 1) / (parseFloat(jur) / 100)));

    const result = document.getElementById("result");
    result.innerHTML = resultado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}