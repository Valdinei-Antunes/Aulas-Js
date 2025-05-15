// operados aritméticos

let numero = 2;

console.log(numero + 2); //adição
console.log(numero - 2); // subtração
console.log(numero * 2); // multiplicação
console.log(numero / 2); // divisão
console.log(numero % 2); // resto da divisao
console.log(numero ** 2); // exponenciação

// operadores de atribuição

console.log(numero += 1); //soma e atribui
console.log(numero -= 2); //subtrai e atribui
console.log(numero *= 2); // multiplica e atribui
console.log(numero /= 2); // divide e atribui
console.log(numero %= 2); // resto da divisão e atribui

//comparação

console.log(5 == 5); //igual (sem verificar tipo)
console.log(5 === 5); //Estritamente igual (valor e tipo)
console.log(5 != 5); //Diferente
console.log(5 !== 5); //Estritamente diferente (valor e tipo)
console.log(5 > 5); //maior que
console.log(5 < 5); //menor que
console.log(5 >= 5); //<aior ou igual
console.log(5 <= 5); //Menor ou igual

//operadores logicos

5 && 6; // E
5 || 6; // OU
if(!5 < 6){
    console.log("Esse é o NÃO");
}; //NOT

// Incremento e Decremento

let a = 5;
a++;
console.log(a);

a--;
console.log(a);

// Operador Ternário

let idade = 18;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status);