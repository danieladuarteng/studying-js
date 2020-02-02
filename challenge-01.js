function challenge01() {
  let myVar; // usamos let aqui porque estou inicializando sem valor

  console.log(
    "Como declaro uma variável chamada `myVar`, sem valor? \nAssim: let myVar\n"
  );

  myVar = 10;
  
  console.log("Como atribuo valor a myVar? \nAssim: myVar = 10;\n")


  let soma = 15 + 8;

  console.log("Como declaro uma variável chamada soma que some os valores 15 e 8? \nAssim: let soma = 15 + 8;\n");


  soma++;

  console.log(
    "Como atribuo à variável soma todo o valor dela, somando 1, " +
      "usando o operador de soma abreviado? \nAssim: soma++;\n"
  );


  soma *= 3;

  console.log(
    "Como atribuo à variável soma todo o valor dela, multiplicando por 3, " +
      "usando o operador de multiplicação abreviado? \nAssim: soma*=3;\n"
  );


  console.log("Qual o valor da variável soma até aqui?", soma, "\n");


  const souninja = true;

  console.log(
    "Como declaro a variável souninja e atribuo o valor booleando que representa verdadeiro? " +
      "Assim: const souninja = true;\n"
  );


  const comida = ["arroz", "feijão", "ovo"];

  console.log(
    "Como crio uma variável chamada comida que possua um array com os valoreS: 'arroz', 'feijão' e 'ovo'?" +
      "\nAssim: const comida = ['arroz', 'feijão', 'ovo'];\n"
  );


  console.log(comida[1]);

  console.log(
    "Como imprimo o valor de feijão que está na variável comida? " +
      "\nAssim: console.log(comida[1]);\n"
  );


  soma === myVar;
  
  console.log(
    "Como verifico se soma é igual a myVar? \nAssim: soma === myVar; \n"
  );


  myVar <= soma;
  console.log(
    "Como verifico se myvar é menor ou igual que a variável soma? \nAssim: myVar <= soma;\n"
  );


  return function divisao(x, y) {
    return console.log('Retorno da função divisão: 10 / 5 =', x / y);
  };
}

challenge01()(10, 5);
