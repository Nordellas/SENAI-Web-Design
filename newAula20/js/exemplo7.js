// function calculadora() {
//     document.getElementById("result").value = parseFloat
//     (document.getElementById("num1").value) + parseFloat
//     (document.getElementById("num2").value);
// }

function coletarDados() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    somar(num1,num2);
}

function somar(num1, num2) {
    let res = num1 + num2;
    imprimirDados(res);
}

function imprimirDados(res) {
    document.getElementById("result").value = res;
}