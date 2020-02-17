function challenge03() {
  const variableWithObjectEmpty = {};

  console.log(
    "How I declare a variable that receive a empty object? " +
      "\nThereby:  const variableWithObjectEmpty = {};"
  );

  let person = {
    name: "Dani",
    lastName: "Duarte",
    sex: "female",
    age: 25,
    height: 1.56,
    peso: 63,
    walking: false,
    walkedHowManyMeters: 0
  };

  console.log("Create a variable called 'person' that receive your person informations.\n"+
  "The properties and values types for each property that object should be:")

  person.makeBirthday = function() {
    return ++person.age;
  };
}

challenge03();
