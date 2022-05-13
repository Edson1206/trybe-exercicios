// Exercício 1: Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados

let num1 = 10;
let num2 = 5;

let soma = num1 + num2;
  console.log(soma);

let subtracao = num1 - num2;
console.log(subtracao);

let multiplicacao = num1 * num2;
console.log(multiplicacao);

let divisao = num1 / num2;
console.log(divisao);

let modulo = num1 % num2;
console.log(modulo);

// Exercício 2: Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let n1 = 10;
let n2 = 15;

if (n1 > n2) {
  console.log(n1);
} else {
  console.log(n2);
}

// Exercício 3: Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let a1 = 3;
let a2 = 8;
let a3 = 15;

if (a1 > a2 && a1 >a3) {
  console.log(a1)
} else if (a2 > a1 && a2 > a3) {
  console.log(a2)
} else {
  console.log(a3)
}
  
// Exercício 4: Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = 0

if (valor > 0) {
  console.log("positive");
} else if (valor < 0) {
  console.log("negative");
} else {
  console.log("zero")
}

// Exercício 5: Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorn true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const ang1 = 30;
const ang2 = 60;
const ang3 = 90;

if (ang1 + ang2 + ang3 == 180) {
  console.log(true)
} else if (ang1 < 0 || ang2 < 0 || ang3 <0) {
  console.log("valor de ângulo inválido")
} else {
  console.log(false)
}

// Exercício 6: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let peca = "rainha"

switch (peca.toLowerCase()) {
  case "peão":
    console.log("Move-se apenas uma casa para frente")
    break;
    
  case "torre":
    console.log("Move-se em direção reta pelas colunas ou fileiras")
    break;

  case "cavalo":
    console.log("Move-se-se sempre em L, ou seja, duas casas para frente, para o lado ou para trás e uma para a esquerda ou direita")
    break;

  case "bispo":
    console.log("Move-se pela diagonal")
    break;
    
  case "rei":
    console.log("Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance")
    break;

  case "rainha":
    console.log("Move-se pelas colunas, fileiras e diagonais")
    break;

  default:
    console.log("nome da peça inválida")
}

//Exercício 7: Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

var nota = 50

if (nota >= 90 && nota <=100) {
  console.log("A")
} else if (nota >= 80 && nota < 90) {
  console.log("B")
} else if (nota >= 70 && nota < 80) {
  console.log("C")
} else if (nota >= 60 && nota < 70) {
  console.log("D")
} else if (nota >= 50 && nota < 60) {
  console.log("E")
} else if (nota < 50 && nota >= 0) {
  console.log("F")
} else {
  console.log("Digite uma nota de 0 a 100")
}

//Exercício 8: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const number1 = 3;
const number2 = 4;
const number3 = 7;

if (number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
  console.log(true)
} else {
  console.log(false)
}

//Exercício 9: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const numero1 = 2;
const numero2 = 3;
const numero3 = 7;

if (numero1 % 2 > 0 || numero2 % 2 > 0 || numero3 % 2 > 0) {
  console.log(true)
} else {
  console.log(false)
}

//Exercício 10: Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. Atente que, sobre o custo do produto, incide um imposto de 20%. Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero. O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo. valorCustoTotal = valorCusto + impostoSobreOCusto lucro = valorVenda - valorCustoTotal (lucro de um produto)

const valorCusto = 300;
const valorVenda = 600;
var produto = 1;
var quantidadeproduto = 1000
var impostoSobreOCusto = (valorCusto * 0.2);
var valorCustoTotal = (valorCusto + impostoSobreOCusto)
var lucro = (valorVenda - valorCustoTotal)
console.log(lucro * quantidadeproduto)

//Exercício 11: Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 10000;

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
  var descontoINSS = (salarioBruto * 0.08)
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  var descontoINSS = (salarioBruto * 0.09) 
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  var descontoINSS = (salarioBruto * 0.11)
} else {
  var descontoINSS = 570.88
}

var salarioINSS = (salarioBruto - descontoINSS)

if (salarioINSS > 4664.68) {
  var descontoIR = ((salarioINSS * 0.275) - 869.36)
} else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68) {
  var descontoIR = ((salarioINSS * 0.225) - 636.13)
} else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
  var descontoIR = ((salarioINSS * 0.15) - 354.80)
} else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
  var descontoIR = ((salarioINSS * 0.075) - 142.80) 
} else {
  var descontoIR = 0
}

var salarioLiquido = (salarioBruto - descontoINSS - descontoIR);
var arrendondado = parseFloat(salarioLiquido.toFixed(2));
console.log(arrendondado)
