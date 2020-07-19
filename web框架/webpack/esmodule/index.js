import qqq from './utils.js'
// qqq 是自己随便起的变量名 这个导入 需要默认导出
import {a,b} from './data.js'
import  * as www from './data.js'
// {a,b} 这里的名字是不能更改的，是由导出决定的
console.log(qqq,a,b,www)
console.log(qqq.add(a,b))