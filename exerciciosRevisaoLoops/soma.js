//Calcule a soma dos números de 1 a 100 utilizando um loop --while

export function soma() {
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  console.log(soma);
}
