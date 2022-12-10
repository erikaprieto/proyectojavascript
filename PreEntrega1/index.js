
let altura = parseInt(prompt("Ingrese su altura en centimetros."))
let i = 1 ;

while ((!altura && altura !== 0 ) && i < 3) {
    i = i + 1;
    altura= parseInt(prompt("error! Debe ingresar un numero."))
}

let peso = parseInt(prompt("Ingrese su peso en kg."))
let n = 1 ;

while ((!peso && peso !== 0 ) && n < 3) {
    n = n + 1;
    peso= parseInt(prompt("error! Debe ingresar un numero."))
    
}

let centimetrosAMetros = altura / 100;
console.log(centimetrosAMetros);

let IMC = peso / centimetrosAMetros ** 2;


if (IMC < 18.5){
    IMC = alert( IMC + " " + "Peso inferior al normal.");
}else if ( IMC > 18.5 && IMC < 24.9){
    IMC = alert( IMC + " " + "Peso normal.");
}else if ( IMC > 25 && IMC < 29.9){
    IMC = alert( IMC + " " + "Peso superior al normal.");
}else if ( IMC > 30){
    IMC = alert( IMC + " " + "Obesidad.");
}








 



