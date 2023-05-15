//SOLID principles

//S single responsibility
//Calculate // Show result

interface CalAble {
  calGrade(): string;
}

class CalculateGrade implements CalAble {
  private midtermScore: number;
  private finalScore: number;

  constructor(midtermScore: number, finalScore: number) {
    this.midtermScore = midtermScore;
    this.finalScore = finalScore;
  }

  totalScore(): number {
    return this.midtermScore + this.finalScore;
  }
  calGrade(): string {
    const total = this.totalScore();
    if (total >= 90) {
      return "A";
    } else if (total >= 80) {
      return "B";
    } else if (total >= 70) {
      return "C";
    } else if (total >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}

class Display {
  private midtermScore: number;
  private finalScore: number;

  constructor(midtermScore: number, finalScore: number) {
    this.midtermScore = midtermScore;
    this.finalScore = finalScore;
  }
  showGrade(): void {
    const result = new CalculateGrade(
      this.midtermScore,
      this.finalScore
    ).calGrade();
    console.log(`Your Grade is ${result}`);
  }
}
// const show = new Display(50, 25);
// show.showGrade();
//---------------------------------//

//O (open and close )
//list of winner

const winner: string[] = ["Jennie", "Jisoo", "Rose", "Lisa"];

class CheckWinner {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  check() {
    if (winner.includes(this.name)) {
      console.log(`👏 You are the WINNER !!`);
    } else {
      console.log(`SORRY You not the winner 😢`);
    }
  }
}

class AddWinner {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  add(): void {
    winner.push(this.name);
    console.log(`Add new winner successfully! ${winner}`);
  }
}
// const addWinner = new AddWinner("Diwx");
// addWinner.add();
class Iphone11 {
  private model: string;
  private color: string;
  private storage: number;
  constructor(model: string, color: string, storage: number) {
    this.model = model;
    this.color = color;
    this.storage = storage;
  }
  playMusic(): void {
    console.log(`playing music 🎷`);
  }
  takePhoto(): void {
    console.log(`📸`);
  }
}
class Iphone11Updated extends Iphone11 {
  private updateVersion: string;
  constructor(
    model: string,
    color: string,
    storage: number,
    updateVersion: string
  ) {
    super(model, color, storage);
    this.updateVersion = updateVersion;
  }
  securityUpdate(): void {
    console.log(`security updated 🔓`);
  }
}

//---------------------------------//

//L (extend)
// plant --> flower / tree
class Plant {
  protected name: string;
  protected color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  showDetail(): void {
    console.log(
      `This Plant is name : ${this.name} and is ${this.color} color!`
    );
  }
  photosynthesis(): void {
    console.log(`Receiving the light ...🔅 🪴 😚`);
  }
}

class Flower extends Plant {
  constructor(name: string, color: string) {
    super(name, color);
  }
  bloom(): void {
    console.log(`Blooming .. 🌸 🪷`);
  }
}

class Tree extends Plant {
  constructor(name: string, color: string) {
    super(name, color);
  }
  generateOxygen(): void {
    console.log(`Here some fresh air 🌬️ 🌳 😋`);
  }
}
const rose = new Flower("rose", "red");

const coconut = new Tree("coconut tree", "brown/green");

// rose.bloom();
// coconut.photosynthesis();

//---------------------------------//
//I Interface Segregation
// 2 interfaces  --> ()
interface HumanInterface {
  breathe(): void;
  speak(): void;
  cry(): void;
}

interface PlantInterface {
  breathe(): void;
  photosynthesis(): void;
  guttation(): void;
}

class Person implements HumanInterface {
  private name: string;
  private lastname: string;

  constructor(name: string, lastname: string) {
    this.name = name;
    this.lastname = lastname;
  }
  breathe(): void {
    console.log(`${this.name} ${this.lastname} is breathing.. 😮‍💨 🫁`);
  }
  speak(): void {
    console.log(`${this.name} ${this.lastname} is speaking.. 🗣️ 📣`);
  }
  cry(): void {
    console.log(`${this.name} ${this.lastname} is crying..  😭 😿`);
  }
}

class Vegetable implements PlantInterface {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  breathe(): void {
    console.log(`${this.name} is breathing ... 🥬 😮‍💨`);
  }
  photosynthesis(): void {
    console.log(`${this.name} is receiving some sunlight  ... 🌻 😎 😚`);
  }
  guttation(): void {
    console.log(`${this.name} is release some h2o ... 💦 😖`);
  }
}

const tomato = new Vegetable("tomato");
tomato.breathe();
tomato.guttation();
tomato.photosynthesis();
//---------------------------------//

//D Dependency Inversion
class Roaster {
  private coffeeBeans: ArabicaRoasterProcessor;
  constructor(coffeeBeans: ArabicaRoasterProcessor) {
    this.coffeeBeans = coffeeBeans;
  }

  pressStart(): void {
    this.coffeeBeans.startRoast();
  }
}

class ArabicaRoasterProcessor {
  private arabica: Arabica;
  constructor() {
    this.arabica = new Arabica();
  }

  startRoast(): void {
    this.arabica.roast();
  }
}

class Arabica {
  roast(): void {
    console.log(`🫘😶‍🌫️`);
  }
}

let roaster = new Roaster(new ArabicaRoasterProcessor());
roaster.pressStart();
//---------------//
interface Car {
  drive(): void;
}

class ElectricCar implements Car {
  constructor() {}

  drive() {
    console.log("The electric car is driving.");
  }
}

class GasCar implements Car {
  constructor() {}

  drive() {
    console.log("The gas car is driving.");
  }
}
class CarFactory {
  createCar(type: string) {
    if (type === "electric") {
      return new ElectricCar();
    } else if (type === "gas") {
      return new GasCar();
    } else {
      throw new Error("Invalid car type.");
    }
  }
}
const carFactory = new CarFactory();
const car = carFactory.createCar("electric");
car.drive();
