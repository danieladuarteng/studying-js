function challenge01() {
  let myVar; // usamos let aqui porque estou inicializando sem valor

  console.log(
    "How do I declare a variable called 'myVar', withou value? \nThereby: let myVar\n"
  );


  myVar = 10;
  
  console.log("How I assign value to  myVar? \Thereby: myVar = 10;\n")


  let sum = 15 + 8;

  console.log("How do I declare a variable called 'sum' that sum the values 15 and 8? \nThereby: let sum = 15 + 8;\n");


  sum++;

  console.log(
    "How I assign the variable 'sum' your value, more 1, using the abbreviated sum operator? \nThereby: sum++;\n"
  );


  sum *= 3;

  console.log(
    "How I assign the variable 'sum' your value, multiplying for 3, " +
      "using the abbreviated multiplication operator? \nThereby: sum*=3;\n"
  );


  console.log("What the sum variable value until here?", sum, "\n");
  

  const souninja = true;

  console.log(
    "How do I declare a variable called 'souninja' and assign the value boolean that the represents true value? " +
      "Thereby: const souninja = true;\n"
  );


  const food = ["rice", "beans", "egg"];

  console.log(
    "How I create a variavel called 'food' that have a array with the values: 'rice', 'beans' e 'egg'?" +
      "\nThereby: const food = ['rice', 'beans', 'egg'];\n"
  );


  console.log(food[1]);

  console.log(
    "How I print the beans value that there is in variable foodHow? " +
      "\nThereby: console.log(food[1]);\n"
  );


  sum === myVar;
  
  console.log(
    "How I check if 'sum' is equal the 'myVar'? \nThereby: sum === myVar; \n"
  );


  myVar <= sum;
  console.log(
    "How I check if 'myVar' is smaller or equal that variable 'sum'? \nThereby: myVar <= sum;\n"
  );


  return function division(x, y) {
    return console.log("The return the division function: 10 / 5 =", x / y);
  };
}

challenge01()(10, 5);
