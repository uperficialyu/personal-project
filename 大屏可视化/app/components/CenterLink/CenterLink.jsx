import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { pushUrl } from 'lib/url';
import png1 from 'style/images/component/center1.png';
import png2 from 'style/images/component/center2.png';
import png3 from 'style/images/component/center3.png';
import png4 from 'style/images/component/center4.png';
import png5 from 'style/images/component/center5.png';
import png6 from 'style/images/component/center6.png';
import png7 from 'style/images/component/center7.png';
import png8 from 'style/images/component/center8.png';
import png9 from 'style/images/component/center9.png';
import png10 from 'style/images/component/center10.png';
import png11 from 'style/images/component/center11.png';
import png12 from 'style/images/component/center12.png';
import png13 from 'style/images/component/center13.png';
import png14 from 'style/images/component/center14.png';
import png15 from 'style/images/component/center15.png';
import png16 from 'style/images/component/center16.png';

import './CenterLink.scss';

const CenterLink = (props) => {
  const { active } = props;
  const list = [
    {title: '茶种植', png1: png2, png2: png8, url: '/teaPlant', id: 1},
    {title: '茶采摘', png1: png3, png2: png9, url: '/teaPick', id: 2},
    {title: '茶加工', png1: png4, png2: png10, url: '/teaProcessing', id: 3},
    {title: '有机茶', png1: png14, png2: png13, url: '/organicTea', id: 4},
    {title: '茶交易', png1: png5, png2: png11, url: '/teaTrade', id: 5},
    {title: '茶文旅', png1: png6, png2: png12, url: '', id: 6},
    {title: '茶服务', png1: png15, png2: png16, url: '/teaServe', id: 7},
    // {title: '产业总览', png1: png1, png2: png7, url: '/'},
  ]

  const jumto = (item) => {
    pushUrl({
      pathname: item.url
    })
  };

  return (
    <div className="center-link">
      {
        list.map((item, index) => {
          return (
            <div onClick={() => jumto(item)} className="center-link-item">
              <div><img src={active === item.id ? item.png2 : item.png1} alt="" /></div>
              <div>{item.title}</div>
            </div>
          )
        })
      }
    </div>
  );
};
export default CenterLink;
