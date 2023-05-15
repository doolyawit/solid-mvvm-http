import Pet from "./model";
import PetViewModel from "./viewModel";
class PetView {
  constructor(private viewModel: PetViewModel) {}

  render(): void {
    console.log(`Pet Information
    Name : ${this.viewModel.name}
    Price : ${this.viewModel.price}
    Breed : ${this.viewModel.breed}
    Owner : ${this.viewModel.owner}`);
  }
}
// App
const pet = new Pet("DookDik", 3000, "Pom-pom", "Diwx");
const viewModel = new PetViewModel(pet);
const view = new PetView(viewModel);

view.render();
