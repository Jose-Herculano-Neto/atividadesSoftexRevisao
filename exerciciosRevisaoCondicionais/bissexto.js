//Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).
import { prompt } from "../index.js";

export function bissexto(){
    let ano = 365;

    if(ano % 4 == 0 && ano % 100 != 0){
        console.log("é bissexto")
    }

}