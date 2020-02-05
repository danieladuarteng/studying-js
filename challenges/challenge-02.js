function challenge02() {
  function soma(x, y) {
    return x + y;
  }

  const resultado = soma(2, 4) + 5;
  console.log(
    "Criei uma função chamada soma, que recebe dois parâmetros e retorna sua soma.\n" +
      "Como declaro uma variável que recebe a invocação da função soma, passando dois números como argumentos e somando 5?\n" +
      "Assim: const resultado = soma(2,4) + 5;\n"
  );

  console.log("Qual o valor dessa variável?", resultado, "\n");

  let variavelSemValor;

  function colocandoValor() {
    variavelSemValor = "Agora tenho valor";
    return "O valor da variável agora é: ", variavelSemValor + "\n";
  }

  console.log(
    "Como crio uma variável sem valor? \nUtilizando o let:  let variavelSemValor;\n"
  );

  console.log(
    "Agora criei uma função para colocar valor na minha variável, qual o valor dela?",
    colocandoValor()
  );

  function multiplicacao(x, y, z) {
    if (x === undefined || y === undefined || z === undefined) {
      return "Preencha os valores corretamente!";
    }
    return (x * y * z) + 2;
  }

  console.log("Função multiplicação sem um dos valores", multiplicacao(1, 2));
  console.log(
    "Função multiplicação com todos os valores",
    multiplicacao(1, 2, 3),
    "\n"
  );

  function checaArgumentos(x, y, z) {
    if (x !== undefined && y === undefined && z === undefined) {
      return x;
    } else if (x !== undefined && y !== undefined && z === undefined) {
      return x + y;
    } else if (x !== undefined && y !== undefined && z !== undefined) {
      return (x + y) / z;
    } else if (x === undefined && y === undefined && z === undefined) {
      return false;
    } else {
      return null;
    }
  }

  console.log("Somente um argumento passado", checaArgumentos(2));
  console.log("Somente dois argumentos passados", checaArgumentos(2, 3));
  console.log("Com todos argumentos passados", checaArgumentos(2, 3, 7));
  console.log("Com nenhum argumento passado", checaArgumentos());
}

challenge02();
