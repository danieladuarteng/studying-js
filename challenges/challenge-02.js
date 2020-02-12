function challenge02() {
  function sum(x, y) {
    return x + y;
  }

  const result = sum(2, 4) + 5;
  console.log(
      "I created a function called 'sum', that receive two parameters and return your sum.\n" +
      "How I declare a variable that receive the sum function with two parameters and add 5 more to your value?\n" +
      "Thereby: const result = sum(2,4) + 5;\n"
  );

  console.log("what is the value of this variable?", result, "\n");

  let variableWithourValue;

  function putValue() {
    variableWithourValue = "Now I have value";
    return "The variable value now is: ", variableWithourValue + "\n";
  }

  console.log(
    "How I create a variable without value? \nUsing let:  let variableWithourValue;\n"
  );

  console.log(
    "Now I created a function for put value in my variable, what is value its?",
    putValue()
  );

  function multiplication(x, y, z) {
    let message = "Fill in the values ​​correctly!";
    if (x && y && z) {
      message = x * y * z + 2;
    }
    return message;
  }

  console.log("Função multiplicação sem um dos valores", multiplication(1, 2));
  console.log(
    "\nMultplication function without one of values",
    multiplication(1, 2, 3),
    "\n"
  );

  function checkArguments(x, y, z) {
    if (x && !y && !z) {
      return x;
    } else if (x && y && !z) {
      return x + y;
    } else if (x && y && x) {
      return (x + y) / z;
    } else {
      return false;
    }
  }

  console.log(
    "When only one argument is passed, should return your value -> ",
    checkArguments(2)
  );
  console.log(
    "When only two arguments are passed, should return your sum -> ",
    checkArguments(2, 3)
  );
  console.log(
    "When all arguments are passed, should sum the first with second value and divide by the third ->",
    checkArguments(2, 3, 7)
  );
  console.log(
    "When none argument is passed, should return false -> ",
    checkArguments()
  );
}

challenge02();
