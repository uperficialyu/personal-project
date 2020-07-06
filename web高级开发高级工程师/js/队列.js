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

// 创建一个队列
var qe = new Queue();
qe.enter(1);
qe.enter(2);
qe.enter(3);
qe.leave();
console.log(qe.value());
