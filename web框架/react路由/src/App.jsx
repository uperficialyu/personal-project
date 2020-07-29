import React from 'react';
import './assets/css/reset.min.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import Customer from './views/Customer';
import Order from './views/Order';
import System from './views/System';
import Page404 from './Page404';
import Test from './views/Test';

function App() {
  return (
    <HashRouter>
      <NavHeader></NavHeader>
      {/* 
      * 使用HASH路由 
      *   1.每一个路由匹配后并没有结束，还会继续向下匹配的（解决：Switch）
      *   2.默认和path的匹配不是精准匹配，类似于包含的关系（例如：path='/' 那么所有 /xxx 地址都会和他匹配），解决办法：设置exact实现精准匹配
      */}
      <Switch>
        {/* <Route path="/" exact component={Customer} /> */}
        <Redirect from='/' exact to='/customer' />
        <Route path="/customer" component={Customer} />
        <Route path="/order" component={Order} />
        <Route path="/system" component={System} />
        {/* <Route path="/system" render={prop => {
          // 类似于VUE中的：路由懒加载/导航守卫
          let flag = localStorage.getItem('system');
          if(!flag){
            // alert('您无权限访问系统设置！！');
            prop.history.push('/');
            return ``;
          }
          return <System />;
        }} /> */}

        {/* <Route component={Page404}/> */}
        {/* <Redirect to='/customer' /> */}

        <Route path='/test' exact component={Test} />
        <Route path='/test/:lx/:from' component={Test} />
      </Switch>
    </HashRouter>
  )
}

export default App;