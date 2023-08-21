//Crie uma função que retorne o maior valor entre três números.
import { prompt } from "../index.js";

export function maiorNumero() {
  let num1 = prompt("Digite o primeiro número: ");
  let num2 = prompt("Digite o segundo número: ");
  let num3 = prompt("Digite o terceiro número: ");

  if (Number(num1) > Number(num2) && Number(num1) > Number(num3)) {
    console.log("O número " + Number(num1) + " é o maior entre eles");
  } else if (Number(num2) > Number(num1) && Number(num2 )> Number(num3)) {
    console.log("O número " + Number(num2) + " é o maior entre eles");
  } else {
    console.log("O número " + Number(num3) + " é o maior entre eles");
  }
}
