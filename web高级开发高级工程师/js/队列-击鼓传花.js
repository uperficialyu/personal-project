function Queue() {
  // 创建一个队列容器
  this.containter = [];
}

Queue.prototype = {
  construtor: Queue,
  // 进入队列 element进入队列的元素
  enter: function enter(element) {
    this.containter.push(element);
  },
  // 移除队列
  leave: function leave() {
    if (this.containter.length == 0) return;
    return this.containter.shift();
  },
  // 查看队列的长度
  size: function size() {
    return this.containter.length;
  },
  // 查看队列的内容
  value: function value() {
    // 深拷贝是为了保证外面接收到的结果不论如何的操作都不会影响内部容器的内容
    return JSON.parse(JSON.stringify(this.containter));
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