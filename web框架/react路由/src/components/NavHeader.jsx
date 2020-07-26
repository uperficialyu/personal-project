import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './NavHeader.less';

/*
 * 想要使用Link/NavLink,必须保证当前组件是放在HashRouter/BrowserRouter中的
 * 真正受到路由管控的组件：基于Route实现路由匹配所渲染的组件
 * withRouter就是把一个组件变为受路由管控的组件(属性中就可以使用history等属性了)
 * 
 *   NavLink存在默认的路由匹配机制：当前页面的地址和NavLink中to管控的只进行匹配，如果可以匹配上，则默认设置一个叫做active的样式类
 *   也可以在跳转的时候传递参数
 */

function NavHeader(props) {
    // console.log(props);
    let { history } = props;

    return <header className="headerBox">
        <h2>珠峰培训</h2>
        <nav>
            <NavLink to="/customer">客户管理</NavLink>
            <NavLink to="/order">订单管理</NavLink>
            <NavLink to={{
                pathname: '/system',
                search: '?lx=1&from=weixin'
            }}>系统设置</NavLink>
        </nav>

        <button onClick={() => {
            /* 
             * 路由传参的几种方式 
             * history.push / Link / NavLink
             *  1.“显式”传参:问号传参
             *    URL地址栏中包含传递参数的信息
             *       + 难看或者暴露了一些传递的信息
             *       + 页面刷新，只要地址栏中还有这些参数信息，组件中就可以获取到
             *  2.“隐式”传参:state
             *    + 信息是隐式传递的，安全系数高
             *    + 因为没有存储在地址中，页面刷新，之前存储的信息就没有了
             *  3.路径参数，也是“显式”的
             *    + 获取值是基于match.params获取的
             */
            // history.push(`/test?lx=1&from=weixin`)
            // history.push({
            //     pathname: '/test',
            //     // search: '?lx=1&from=weixin'
            //     state: {
            //         lx: 1,
            //         from: 'weixin'
            //     }
            // });

            // history.push(`/test/1/weixin`);
            

        }}>测试按钮</button>
    </header>;
}

export default withRouter(NavHeader);