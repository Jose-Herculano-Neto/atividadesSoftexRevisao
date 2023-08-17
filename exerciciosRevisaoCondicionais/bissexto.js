//Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).
import { prompt } from "../index.js";

export function bissexto(){
    let ano = prompt("Digite a quantidade de dias do ano: ");
    console.log(typeof Number(ano))

    if(Number(ano) % 4 === 0 && Number(ano) % 100 != 0 || Number(ano) % 400 === 0){
        console.log("é bissexto")
    }else{
        console.log("não é bissexto")
    }
}