// 函数

function add(x: number, y: number, z?: number): number {
  return x + y;
}

let result = add(2, 3);

const add1 = function(x: number, y: number, z?: number): number {
  return x +y;
}

const add3: (x: number,y: number, z?: number) => number = add1;
