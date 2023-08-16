//Crie um loop que imprima a sequência de Fibonacci até o 10º termo.

export function fibon() {
  let num1 = 0;
  let num2 = 1;
  let num3 = 0;

  while (num3 <= 100) {
    console.log(num3);
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }
}
