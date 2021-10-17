/*Funciones*/ //para que me pregunte que quiero sumar lo hago con el prompt
/*function calcular(){
    let num = 89;
    let num2 = 250;
*/
function calcular(){

    let num = Number(prompt("Ingrese el primer numero"));
    let num2 = Number(prompt("Ingrese el segundo numero"));
    let op = prompt("Elija el tipo de operacion: \n + Para sumar \n - Para restar \n * Para multiplicar \n / para Dividir")
    let resultado = 0;

    let elemento = document.getElementById("principal");
    if(op === "+"){
        resultado = num + num2;
        elemento.innerHTML+="<p> El resultado de la suma de "+num+" y "+num2+" es: " +resultado+ "</p>"; 
    }else if(op === "-"){
        resultado = num - num2;
        elemento.innerHTML+="<p> El resultado de la resta de "+num+" y "+num2+" es: " +resultado+ "</p>";
    }else if(op === "*"){
        resultado = num * num2;
        elemento.innerHTML+="<p> El resultado de la multiplicación de "+num+" y "+num2+" es: " +resultado+ "</p>";
    }else if(op === "/"){
        resultado = num / num2;
        elemento.innerHTML+="<p> El resultado de la división de "+num+" y "+num2+" es: " +resultado+ "</p>";
    }else{
        elemento.innerHTML+="El valor para la operacion es incorrecto!";
    }



}