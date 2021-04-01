// 类

class Animal {
  public name: string;
  static categoies: string[] = ['mammal', 'bird'];
  static isAnimal(a) {
    return a instanceof Animal;
  }
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

console.log(Animal.categoies);
const snake = new Animal('lily');
console.log(snake.run());
console.log(snake.name);
snake.name = 'lucy';
console.log(snake.name);
console.log(Animal.isAnimal(snake));

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaobao = new Dog('xiaobao');
console.log(xiaobao.run());
console.log(xiaobao.bark());

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return 'Meow' + super.run();
  }
}

const maomao = new Cat('maomao');
console.log(maomao.run());




interface Radio {
  switchRadio(): void;
}
interface Battery {
  checkBatteryStatus();
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}

class Car implements Radio {
  switchRadio() {

  }
}

class Cellphone implements RadioWithBattery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}