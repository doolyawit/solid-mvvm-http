export default class Pet {
  name: string;
  price: number;
  breed: string;
  owner: string;

  constructor(name: string, price: number, breed: string, owner: string) {
    this.name = name;
    this.price = price;
    this.breed = breed;
    this.owner = owner;
  }
}
