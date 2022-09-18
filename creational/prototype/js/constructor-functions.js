// Utilizando constructor functions, também podemos trabalhar com prototypes
// Neste código, atribuímos o objeto personPrototype ao prototype de Person,
// fazendo com que este tenha acesso às propriedades de personPrototype,
// devido à cadeia de protótipos do JS.
// Aqui também fazemos shadowing, ou seja, quando a variável local da classe
// sobrepõe a variável do prototype. Aqui, quando instanciamos uma Person
// com o nome João, sobrescrevemos o nome Luiz definido anteriormente no proto.
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: "Luiz",
  lastName: "Miranda",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = "OI";
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const persona1 = new Person("João", "Miranda", 30);
console.log(persona1);
console.log(persona1.fullName());

const persona2 = new SubPerson("Helena", "Vieira", 20);
console.log(persona2);
console.log(persona2.fullName());
