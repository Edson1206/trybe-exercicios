//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index of numbers) {
  console.log(index);
}

//2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0
for (var index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma);

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;

for (let index = 0; index < numbers.length; index+=1) {
  soma += numbers[index];
}
  var media = (soma / numbers.length) 
  console.log(media);

//4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;

for (let index = 0; index < numbers.length; index+=1) {
  soma += numbers[index];
}
  var media = (soma / numbers.length) 
  if (media > 20) {
    console.log('valor maior que 20');
  } else {
    console.log('valor menor ou igual a 20');
  }

//5 - 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var maior = 0;
for (var index = 0; i < numbers.length; index += 1) {
   if (numbers[index] > maior ) {
    maior = numbers[index];
   }
}
console.log(maior)

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var impares = 0
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
      impares += 1;
    }
}

if (impares === 0) {
  console.log('nenhum valor ímpar encontrado'); 
  } else {
    console.log(impares)
  }

//7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0]
for (let i = 1; i < numbers.length; i+=1) {
   if (numbers[i] <= menorValor) {
      menorValor = numbers[i]
   }
}
console.log(menorValor);

//8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numeros = [];

for (let i = 1; i < 26; i +=1) {
   numeros.push(i);
}

console.log(numeros);

//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numeros = [];

for (let i = 1; i < 26; i +=1) {
   numeros.push(i/2);

}

console.log(numeros);

//BÔNUS - Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:

// for (let index = 1; index < array.length; index += 1) {
//    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//      if (array[index] < array[secondIndex]) {
//        let position = array[index];
//        array[index] = array[secondIndex];
//        array[secondIndex] = position;
//      }
//    }
//  }

//Com base na leitura que fez, considere o array numbers abaixo e faça os exercícios:

//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
     if (numbers[index] < numbers[secondIndex]) {
       let position = numbers[index];
       numbers[index] = numbers[secondIndex];
       numbers[secondIndex] = position;
     }
   }
 }

console.log(numbers);

//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
     if (numbers[index] > numbers[secondIndex]) {
       let position = numbers[index];
       numbers[index] = numbers[secondIndex];
       numbers[secondIndex] = position;
     }
   }
 }

console.log(numbers);

//Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let i = 0; i < numbers.length; i += 1) {
   if(i < numbers.length -1) {
      novoArray.push(numbers[i] * numbers[i + 1]);
   } else {
      novoArray.push(numbers[i] * 2);
   }
}
console.log(novoArray);