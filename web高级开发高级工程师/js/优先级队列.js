function Queue() {
	this.container = [];
}
Queue.prototype = {
	constructor: Queue,
	// 进入队列  priority优先级，默认都是0，数值越大，优先级越高
	enter: function enter(element, priority = 0) {
		let obj = {
			value: element,
			priority: priority
		};
		if (priority === 0) {
			// 不指定优先级（最小优先级）：存储到末尾即可
			this.container.push(obj);
			return;
		}
		// 指定优先级，我们需要从最后一项依次来比较
		let flag = false;
		for (let i = this.container.length - 1; i >= 0; i--) {
			let item = this.container[i];
			if (item.priority >= priority) {
				// 插入到比较项的后面
				this.container.splice(i + 1, 0, obj);
				flag = true;
				break;
			}
		};
		// 没有比我大的，我就是最大的，插入到容器最开始的位置即可
		!flag ? this.container.unshift(obj) : null;
	},
	// 移除队列
	leave: function leave() {
		if (this.container.length === 0) return;
		return this.container.shift();
	},
	// 查看队列的长度
	size: function size() {
		return this.container.length;
	},
	// 查看队列的内容
	value: function value() {
		return JSON.parse(JSON.stringify(this.container));
	}
};

// 创建一个队列
var qe = new Queue();
qe.enter(10);
qe.enter(12);
qe.enter(14, 2);
qe.leave();
console.log(qe.value());