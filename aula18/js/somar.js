function somarNumeros(){
    let soma1 = parseFloat(document.getElementById('num1').value)
    let soma2 = parseFloat(document.getElementById('num2').value)
    let somafinal;

    somafinal = soma1+soma2

    document.getElementById('somaFinal').value = somafinal
}