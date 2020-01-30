function challenge01() {
  var myVar;
  console.log(
    "Como declaro uma variável chamada `myvar`, sem valor? \nAssim: var myVar\n"
  );
  var soma = 15 + 8;
  console.log("Como atribuo valor para myVar? \nAssim: var soma = 15 + 8;\n");
  soma++;
  console.log(
    "Como atribuo à variável soma todo o valor dela, somando 1," +
      "usando o operador de soma abreviado? \nAssim: soma++;\n"
  );
  soma *= 3;
  console.log(
    "Como atribuo à variável soma todo o valor dela, multiplicando por 3," +
      "usando o operador de multiplicação abreviado? \nAssim: soma*=3;\n"
  );
  console.log("Qual o valor da variável soma até aqui?", soma, "\n");
  var souninja = true;
  console.log(
    "Como declaro a variável souninja e atribuo o valor booleando que representa verdadeiro? " +
      "Assim: var souninja = true;\n"
  );
  var comida = ["arroz", "feijão", "ovo"];
  console.log(
    "Como crio uma variável comida que possua um array com os valoreS: 'arroz', 'feijão' e 'ovo'?" +
      "\nAssim: var comida = ['arroz', 'feijão', 'ovo'];"
  );
  console.log(comida[1]);
  console.log(
    "Como imprimo o valor de feijão que está na variável comida? " +
      "\nAssim: console.log(comida[1]);\n"
  );
  soma === myVar;
  console.log(
    "Como verifico se soma é igual a myVar? \nAssim: soma === myVar; "
  );
  myVar <= soma;
  console.log(
    "Como verifico se myvar é menor ou igual que a variável soma? \nAssim: myVar <= soma;"
  );
  return function divisao(x, y) {
    return x / y;
  };
}

challenge01(4, 5);
