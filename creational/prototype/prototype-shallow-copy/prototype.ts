// Com esse código criamos um Prototype de Person, que funciona como shallow
// copy, ou seja, quando clonarmos diferentes objetos, eles compartilharão
// as mesmas referências em memória para objetos dentro dele, fazendo com que
//ao alterarmos a propriedade de um deles, todos sofram essa alteração.
// Criamos um metódo clone(), que cria um novo objeto utilizando this como
// prototype, e então retornando-o.
export interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}
