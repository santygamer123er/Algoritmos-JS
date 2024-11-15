function saludar(){
    console.log("Hola Mundo");
    alert("Hola mundo")
}

//Algoritmo que realice una suma entre dos valores ingresados por el usuario

function sumar(){
    //declarar las variables necesarias para la ejecución del algoritmo
    let n1 =0;
    let n2 =0;
    let suma =0;
    //solicitar y capturar los valores ingresados por el usuario 
    n1 = parseInt(prompt('Por favor ingrese el primer valor a sumar'));
    n2 = parseInt(prompt('Por favor ingrese el segundo vlor a sumar'));
    //realizar el procedimiento
    suma = n1 + n2 
    //Imprimir el resultado en pantalla al usuario
    console.log('El resultado de la suma es ' + suma)
    alert('El rresultado de la suma es ' + suma)
}

//Algoritmo que realice una suma, resta, multiplicación y división ingresados por el usuario

function operaciones(){
    let v1 = 0;
    let v2 = 0;
    let operacion = 0;

    v1 = parseInt(prompt('Por favor ingrese el primer valor a operar'));
    v2 = parseInt(prompt('Por favor ingrese el segundo valor a operar'))
    operacion = v1 + v2;
    alert('El resultado de la suma es ' + operacion);

    operacion = v1 - v2;
    alert('El resultado de la resta es ' + operacion);

    operacion = v1 * v2;
    alert('El resultado de la multiplicación es ' + operacion);

    operacion = v1 / v2;
    alert('El resultado de la división es ' + operacion);

}

//Algoritmo que determine el cuadrado de un numero

function cuadrado(){
    let b1 = 0;
    let cuadrado = 0;

    v1 = parseInt(prompt('Por favor ingrese el primer valor a operar'));
    
    cuadrado = v1 **2 ;
    alert('El resultado del cuadrado del número es ' + cuadrado);
    console.log('El resultado del cuadrado del número es ' + cuadrado)

}

//Algoritmo que determine el area de un triangulo apartir de su base y altura

function area(){
    let c1 = 0;
    let c2 = 0;
    let area = 0;

    c1 = parseInt(prompt('Por favor ingrese la base del triángulo'));
    c2 = parseInt(prompt('Por favor ingrese la altura del triángulo'));

    area = c1 * c2 / 2;
    alert('El resultado del área es ' + area);
    console.log('El resultado del área es ' + area)
}

//Algoritmo que determine la medida en km, metros y cm de un valor dado en pulgadas

function conversion(){
    let plg = 0
    let km = 0
    let cm = 0
    let m = 0

    plg = parseInt(prompt("Por favor ingrese la medida en dm "))

    cm = plg * 2.54
    m = plg * 0.0254
    km = plg * 0.0000254

    alert("La conversion en centimetros es " + cm)
    console.log("La conversion en centimetros es " + cm)
    alert("La conversion en kilometros es " + km)
    console.log("La conversion en kilometros es " + km)
    alert("La conversion en metros es " + m)
    console.log("La conversion en metros es " + m)
}

//Algoritmo que pregunte al usuario a que moneda quiere convetir el peso colombiano entre dolar euro y yenes (usamos el switch case )

function monedas(){
    let peso = 0
    let dolar = 0
    let euro = 0
    let yen = 0
    let mon =""

    mon = prompt("Por favor ingrese a que moneda desea convertir (dolar, euro, yen)")
    peso = parseInt(prompt("Por favor ingrese el valor que desea converitir en pesos"))

    switch (mon) {
        case "euro":
            euro = peso * 0.00028
            alert("La conversio total es "+ euro)
            console.log("La conversio total es "+ euro)
            break;
        case "dolar":
            dolar = peso * 0.00025
            alert("La conversion total es " + dolar)
            console.log("La conversion total es " + dolar)
            break;
        case"yen":
            yen = peso * 0.037
            alert("La conversion total es " + yen)
            console.log("La conversion total es " + yen)
            break;
        default:
            alert("Escriba bien la Moneda (dolar euro o yen)")
            break;
    }
}
//Algoritmo que determine si un numero es par o impar

function parImpar(){
    let numero = 0

    numero = parseInt(prompt("Porfavor ingrese el numero"))
    if (numero % 2 ==0){
        alert("El numero es par")
        console.log("El numero es par")
    }
    else{
        alert("El numero es impar")
        console.log("El numero es impar")
    }
        
}
//Algoritmo que determine el mayor entre dos numero (usamos el if)

function numeroMayor(){
    let numero1 = 0
    let numero2 = 0

    numero1 = parseInt(prompt("Por favor ingrese el primer numero para saber el mayor"))
    numero2 =parseInt(prompt("Por favor ingrese el segundo numero para saber el mayor"))

    if(numero1 > numero2){
        alert("El numero mayor es " + numero1)
        console.log("El numero mayor es " + numero1)
    }
    else{
        alert("El numero mayor es " + numero2)
        console.log("El numero mayor es " + numero2)
    }
}
//Algoritmo que determine el menor entre tres numeros ingresados por el usuario

function numeroMenor(){
    let numero1 = 0
    let numero2 = 0
    let numero3 = 0

    numero1 = parseInt(prompt("Por favor ingrese el primero numero para saber el menor"))
    numero2 = parseInt(prompt("Por favor ingrese el segundo numero para saber el menor"))
    numero3 = parseInt(prompt("Por favor ingrese el tercer numero para saber el menor"))

    if(numero1 < numero2 && numero1 < numero3){
        alert("El numero menor es " + numero1)
        console.log("El numero menor es " + numero1)
        
    }
    else if(numero2 < numero1 && numero2 < numero3){
        alert("El numero menor es " + numero2)
        console.log("El numero menor es " + numero2)
    }
    else if(numero3 < numero1 && numero3 < numero2){
        alert("El numero menor es " + numero3)
        console.log("El numero menor es " + numero3)
    }

    }
    

//El colegio ABC requiere un sistema que le permite validar a X estudiante si aprobo o reprobo X materia  teniendo en cuenta que que son 9 notas del 1 al 10 y se aprueba con una nota de 6.1 en adelante

function promedionotas(){

    let nota1 = 0
    let nota2 = 0
    let nota3 = 0
    let nota4 = 0
    let nota5 = 0
    let nota6 = 0
    let nota7 = 0
    let nota8 = 0
    let nota9 = 0
    let nota10 = 0
    let promedio = 0

    nota1 = parseFloat(prompt("Por favor ingrese la nota 1 del estudiante"))
    nota2 = parseFloat(prompt("Por favor ingrese la nota 2 del estudiante"))
    nota3 = parseFloat(prompt("Por favor ingrese la nota 3 del estudiante"))
    nota4 = parseFloat(prompt("Por favor ingrese la nota 4 del estudiante"))
    nota5 = parseFloat(prompt("Por favor ingrese la nota 5 del estudiante"))
    nota6 = parseFloat(prompt("Por favor ingrese la nota 6 del estudiante"))
    nota7 = parseFloat(prompt("Por favor ingrese la nota 7 del estudiante"))
    nota8 = parseFloat(prompt("Por favor ingrese la nota 8 del estudiante"))
    nota9 = parseFloat(prompt("Por favor ingrese la nota 9 del estudiante"))
    nota10 = parseFloat(prompt("Por favor ingrese la nota 10 del estudiante"))

    promedio = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10)/10
    if (promedio >= 6.1) {
        alert("El estudiante paso la materia con un total de "+ promedio )
        console.log("El estudiante paso la materia con un total de "+ promedio )
    }
    else{
        alert("El estudiante PERDIO la materia con un total de "+ promedio )
    }

}
//Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de N numero de años teniendo en cuenta qure el banco paga un interes mensual del 0.7%

function banco(){
    let capital = 0
    let anos = 0
    let total = 0

    capital = parseInt(prompt("Ingrese el capital"))
    anos = parseInt(prompt("Ingrese los años que desea saber su capital"))

    total= (anos * 12 )*(capital * 0.7)

    alert("El capital total ganada sera de " + total + " en " + anos + "Años")
    console.log("El capital total ganada sera de " + total + " en " + anos + " Años")
}