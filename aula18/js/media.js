function calMedia(){
    let med1 = parseFloat(document.getElementById('media1').value)
    let med2 = parseFloat(document.getElementById('media2').value)
    let med3 = parseFloat(document.getElementById('media3').value)
    let med4 = parseFloat(document.getElementById('media4').value)

    let medFinal;

    medFinal = (med1+med2+med3+med4)/4
    document.getElementById('result').value = medFinal;
}