// 接口

interface Person {
  name: string;
  age: number;
  id?: string;
  readonly ids: number;
}

let baby: Person = {
  name: 'baby',
  age: 12,
  ids: 333
}
