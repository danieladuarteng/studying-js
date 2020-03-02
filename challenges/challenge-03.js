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

  console.log("Return of makeBirthday function", person.makeBirthday());

  person.walk = function(metersWalked) {
      person.walkedHowManyMeters += metersWalked;
      person.walking = true;
  }

  console.log("Return of walk function", person.walk(3));

  person.stop = function(){
    return person.walking = false;
  }

  console.log("Return of stop function", person.stop());

  person.fullName = function(){
    return "Hello! My name is " + person.name + person.lastName;
  }

  console.log("Return of fullName function", person.fullName());

  person.showAge = function(){
    return "Hello, I'm " + person.age + "years old";
  }

  console.log("Return of showAge function", person.showAge());
  




}

challenge03();
