//codigo del cuadrado
function perimetrocuadrado(ladocuadrado){
    return ladocuadrado*4
}

function areacuadrado(ladocuadrado) {
    return ladocuadrado*ladocuadrado
} 

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
}

function areaTriangulo(baseTriangulo,alturaTriangulo){
   return (baseTriangulo*alturaTriangulo)/2
}

//codigo circulo
function diametroCirculo(radio){
    return radio*2
}

function perimetroCirculo(radio){
    return diametroCirculo(radio)*Math.PI
}

function areaCirculo(radio){
    return (Math.pow(radio,2)*Math.PI)
}

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value

    const perimetro = perimetrocuadrado(value)
    alert(`El perímetro es: ${perimetro}`)
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value

    const area = areacuadrado(value)
    alert(`El área es: ${area}`)
}

