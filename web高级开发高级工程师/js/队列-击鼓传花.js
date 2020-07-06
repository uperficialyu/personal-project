class Queue {
  container = [];
  // 进入
  enter(element) {
      this.container.push(element);
  }
  // 离开
  leave() {
      return this.container.shift();
  }
  // 队列的长度
  size() {
      return this.container.length;
  }
  // 获取队列中的结果
  value() {
      return this.container.slice(0);
  }
}

// 算法题，击鼓传花
// N个人一起玩游戏，围成一圈，从1开始数数，数到M的人自动淘汰；最后剩下的人会取得胜利，问最后剩下的是原来的哪一位？
// n：参加游戏的人数 m：关键数
function game(n, m) {
  let qe = new Queue();
  // 先把人都依次放入到队列中
  for (let i = 1; i <= n; i++) {
    qe.enter(i);
  }
  // 开始处理
  while (qe.size() > 1) {
    for (let i = 0; i < m - 1; i++) {
      qe.enter(qe.leave());
    }
    qe.leave();
  }
  return qe.value()[0];
}
let res = game(6, 4);
console.log(res)
