let isDone: boolean = false;

let age: number = 20;

let binaryNumber: number = 0b1111;

let firstname: string = 'hello';

let message: string = `hello,${firstname},age is ${age}`;

let u: undefined = undefined;

let n: null = null;

let num: number = undefined;

let notSure: any = 4;

notSure = 'hello world';

notSure.myName;

notSure.getName();

let numberOrString: number | string = 234;

numberOrString = 'abc';

// numberOrString = {}; // error

let arrOfNumbers: number[] = [1, 2, 3, 4];
arrOfNumbers.push(1);
// arrOfNumbers.push('1'); // error

function test() {
  console.log(arguments)
}

let user: [string, number] = ['viking', 1];
