//Verifique se um número é positivo, negativo ou zero usando declarações if, else if e else.
import { prompt } from "../index.js";

export function positivoNegativo(){
    let num = prompt("Digite um número: ");
    if(num > 0 ){
        console.log("O número " + num + " é positivo");
    }else if(num < 0 ){
        console.log("O número " + num + " é negativo");
    }else{
        console.log("O número é Zero");
    }
}