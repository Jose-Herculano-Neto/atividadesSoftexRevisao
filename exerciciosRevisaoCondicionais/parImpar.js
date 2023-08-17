import { prompt } from "../index.js";

export function parImpar() {
  
  let num1 = prompt("Digite um número: "); 

  if (num1 % 2 == 0) {
    console.log("O número " + num1 + " é par");
  } else {
    console.log("O número " + num1 + " é ímpar");
  }
}
