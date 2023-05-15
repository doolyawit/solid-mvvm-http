import Pet from "./model";
export default class PetViewModel {
  constructor(private pet: Pet) {}

  get name(): string {
    return this.pet.name;
  }

  set name(name: string) {
    this.pet.name = name;
  }

  get price(): number {
    return this.pet.price;
  }

  set price(price: number) {
    this.pet.price = price;
  }
  get breed(): string {
    return this.pet.breed;
  }

  set breed(breed: string) {
    this.pet.breed = breed;
  }
  get owner(): string {
    return this.pet.owner;
  }

  set owner(owner: string) {
    this.pet.owner = owner;
  }
}
