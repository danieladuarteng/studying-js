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
    let message = "Preencha os valores corretamente!";
    if (!x || !y || !z) {
      return message;
    }
    return  message = (x * y * z) + 2;
  }

  console.log("Função multiplicação sem um dos valores", multiplicacao(1, 2));
  console.log(
    "Função multiplicação com todos os valores",
    multiplicacao(1, 2, 3),
    "\n"
  );

  function checaArgumentos(x, y, z) {
    if (x && !y && !z) {
      return x;
    } else if (x && y && !z) {
      return x + y;
    } else if (x && y && x) {
      return (x + y) / z;
    } else{
      return false;
    } 
  }

  console.log("Quando somente um argumento for passado, deve retornar o seu valor -> ", checaArgumentos(2));
  console.log("Quando somente dois argumentos forem passados, deve retornar sua soma -> ", checaArgumentos(2, 3));
  console.log("Quando todos argumentos forem passados, deve somar o primeiro valor com o segundo e dividir pelo terceiro ->", checaArgumentos(2, 3, 7));
  console.log("Quando nenhum argumento for passado, deve retornar false -> ", checaArgumentos());
}

challenge02();
