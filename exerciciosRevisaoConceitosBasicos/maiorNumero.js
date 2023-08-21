//Crie uma função que retorne o maior valor entre três números.
import { prompt } from "../index.js";

export function maiorNumero() {
  let num1 = prompt("Digite o primeiro número: ");
  let num2 = prompt("Digite o segundo número: ");
  let num3 = prompt("Digite o terceiro número: ");

  if (num1 > num2 && num1 > num3) {
    console.log("O número " + num1 + " é o maior entre eles");
  } else if (num2 > num1 && num2 > num3) {
    console.log("O número " + num2 + " é o maior entre eles");
  } else {
    console.log("O número " + num3 + " é o maior entre eles");
  }
}
