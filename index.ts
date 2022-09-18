import {
  Address,
  Person,
} from "./creational/prototype/prototype-deep-copy/prototype";

const address1 = new Address("Rua 1", 15);
const person1 = new Person("Person 1", 30);
person1.addAddress(address1);

// Adicionamos addresses no Person1, então clonamos uma Person2 a partir dela,
// e esta tem os mesmos Address, porém no prototype.
const person2 = person1.clone();
person2.name = "Person 2";
person2.addresses[0].street = "AAAAAAA"; // Altera o endereço dos dois.

console.log(person1.addresses, person2.addresses);
