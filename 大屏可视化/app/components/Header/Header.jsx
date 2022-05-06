import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { pushUrl } from "lib/url";
import link1 from 'style/images/component/link1.png';
import link2 from 'style/images/component/link2.png';
import link3 from 'style/images/component/link3.png';
import link4 from 'style/images/component/link4.png';
import link5 from 'style/images/component/link5.png';
import link6 from 'style/images/component/link6.png';

import "./Header.scss";

const Header = (props) => {
  const { active } = props;

  const linkList = [
    { title: '领导活动', img: link1, url: '/', id: 1 },
    { title: '乡村振兴', img: link2, url: '/ruralRevitalization', id: 2 },
    { title: '安吉白茶', img: link3, url: '/angieWhiteTea', id: 3 },
    // { title: '他山之石', img: link4, url: '', id: 4 },
    { title: '传播路径', img: link5, url: '/propagationPath', id: 5 },
    { title: '专题分析', img: link6, url: '/monographicAnalysis', id: 6 },
  ];

  const jumto = (item) => {
    pushUrl({
      pathname: item.url
    })
  };

  const goLogin = () => {
    pushUrl({
      pathname: '/login'
    })
  }
 
  return (
    <div className="header">
      <div className="header-left">超级码三农舆情系统</div>
      <div className="header-middle">
        {
          linkList.map((item, index) => {
            return (
              <div onClick={() => jumto(item)} className={active === item.id ? "header-middle-item header-middle-item-active" : "header-middle-item"}>
                <div><img src={item.img} alt="" /></div>
                <div>{item.title}</div>
              </div>
            )
          })
        }
      </div>
      <div onClick={goLogin} className="header-right">退出登录</div>
    </div>
  );
};

export default Header;
