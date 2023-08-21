//Converta uma temperatura de Celsius para Fahrenheit usando funções.
import { prompt } from "../index.js";
export function conveteGraus() {
  let temperaturaG = prompt("Digite qual a temperatura em C° que deseja converter: ");

  let conversao = (temperaturaG * 1.8 + 32);
  console.log("Temperatura em Fahrenheit: " + conversao + "°")
}
