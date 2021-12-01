function mudarCorVermelha() {
    document.querySelector("#texto").style.color = "red"
}
function mudarCorAzul() {
    document.querySelector("#texto").style.color = "blue"
}
function mudarCorPreto() {
    document.querySelector("#texto").style.color = "black"
}


function mudarFundoPreto() {
    document.querySelector("#texto").style.background = "black"
}
function mudarFundoAmarelo() {
    document.querySelector("#texto").style.background = "yellow"
}
function mudarFundoBranco() {
    document.querySelector("#texto").style.background = "white"
}



function alterarFonte() {
    let valor = document.getElementById("fonte").value;
    document.getElementById("texto").style.fontSize = valor+"px";
}


function mudandoDiv() {
    document.getElementById("texto").style.width = 
    document.getElementById("dividendo").value;
}
