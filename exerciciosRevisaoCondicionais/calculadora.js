//Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /).
import { prompt } from "../index.js";

export function calculadora() {  
  let num1 = prompt("Digite o primeiro número: ");
  let operacao = prompt("Digite a operacao: ");  
  let num2 = prompt("Digite o segundo número: ");
  switch (operacao) {    

    case "+":
      console.log(Number(num1) + Number(num2));
      break;

    case "-":
      console.log(Number(num1) - Number(num2));
      break;

    case "*":
      console.log(Number(num1) * Number(num2));
      break;

    case "/":
      console.log(Number(num1) / Number(num2));
      break;
  }
}
