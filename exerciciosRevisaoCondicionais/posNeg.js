//Verifique se um número é positivo, negativo ou zero usando declarações if, else if e else.
export function positivoNegativo(){
    let num = 0; //Altere aqui o número para saber se é positivo, negativo ou zero

    if(num > 0 ){
        console.log("O número é Positivo");
    }else if(num < 0 ){
        console.log("O número é Negativo");
    }else{
        console.log("O número é Zero");
    }
}