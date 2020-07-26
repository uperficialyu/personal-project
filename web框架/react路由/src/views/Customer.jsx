import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import List from './customer/List';
import Create from './customer/Create';

function Customer(props) {
  // console.log(props);
  /*
   * 受路由管控的组件，默认会给属性props中加三个属性
   *   history:{...} 提供路由跳转的方法
   *      + push 实现路由跳转的，跳转到一个新的地址
   *      + go 指定具体跳转到哪一步
   *      + goBack 上一步
   *      + goForward 下一步
   *   location:{...} 存储路由切换传递的参数信息
   *      + pathname
   *      + search
   *      + hash
   *      + state
   *   match:{...} 存储的是路由解析出来的结果
   *      + params 存储路径传递的参数值
   */

  return <>
    {/* 导航区域 */}
  

    {/* 视图容器 */}
    <Switch>
      {/* <Route path='/customer' exact component={List}/> */}
      <Redirect from='/customer' exact to='/customer/list'/>
      <Route path='/customer/list' component={List}/>
      <Route path='/customer/create' component={Create}/>
    </Switch>
  </>;
}

export default Customer;