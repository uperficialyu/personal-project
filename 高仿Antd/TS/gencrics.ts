function echo(arg: any): any {
  return arg;
}
const result: string = echo(123);

function fan<T>(arg: T): T {
  return arg;
}
const str: string = fan('true');

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const res1 = swap(['string', 123]);

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arr = echoWithArr([1, 2, 3]);

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str2 = echoWithLength('str');
const obj = echoWithLength({ length: 10 });
const arr2 = echoWithLength([1, 2, 3]);



class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}
const queue = new Queue<number>();
queue.push(1);
queue.push(3);
console.log(queue.pop().toFixed())

const queue1 = new Queue<string>();
queue1.push('sdsd');

interface keyPair<T, U> {
  key: T;
  value: U;
}
let kp1: keyPair<number, string> = { key: 123, value: 'sd' };
let kp2: keyPair<string, string> = { key: '123', value: 'sd' };

let arr3: number[] = [1, 2, 4];
let arr4: Array<number> = [1, 3, 5];

interface Iplus<T> {
  (a: T, b: T): T
}
function plus(a: number,b: number): number {
  return a + b;
}
function connect(a: string, b: string): string {
  return a + b;
}
const a: Iplus<number> = plus;
const d: Iplus<string> = connect;