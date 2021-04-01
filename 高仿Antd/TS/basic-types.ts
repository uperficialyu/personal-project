// 数据类型

let isDone: boolean = false;
let age: number = 20;
let binaryNumber: number = 0b1111;
let firstName: string = 'baby';
let message: string = `hello,${firstName},age is ${age}`;
let u: undefined = undefined;
let n: null = null;
let num: number = undefined;

let notSure: any = 4;
notSure = 'hello world';
notSure = true;
notSure.myName;
notSure.getName();

let numberOrString: number | string = 234;
numberOrString = 'hello';

let arrOfNumbers: number[] = [1, 2, 4];
arrOfNumbers.push(1);

function test() {
  console.log(arguments);
}

let user: [number, string] = [1, 'hello'];