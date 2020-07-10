// 100个囚犯排队站好，遇到奇数就枪毙，偶数留下来，
// 依次循环；最后留一个人存活，活下来的是最开始1到一百里的哪个人

function leave(num) {
  let arr = [];
  let arr2 = [];
  for (let i = 1; i <= num; i++) {
    arr.push({value: i});
  }
  function func (arr) {
    let arr1 = [];
    if (arr.length === 1) {
      arr2 = arr;
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if ((i+1) % 2 === 0) {
        arr1.push(arr[i]);
      }
    }
    func(arr1);
  }
  func(arr);
  return arr2;
}

console.log(leave(10000));



