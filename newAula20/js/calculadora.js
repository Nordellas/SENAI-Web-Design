function calcularIMC () {
    let name = document.getElementById("name").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let hight = parseFloat(document.getElementById("hight").value);

    let result = peso/(hight*hight);

    document.getElementById("saida").innerHTML = "Nome: "+name+" imc: "+result;
}