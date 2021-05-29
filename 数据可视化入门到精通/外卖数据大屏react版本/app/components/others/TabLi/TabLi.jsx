/*
 * @Author: yushunping 
 * @Date: 2021-05-29 09:00:57 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-05-29 09:57:21
 */

import React from 'react';
import CountTo from 'components/CountTo/CountTo';
import './TabLi.scss';

import ic1 from 'style/images/others/icon1.png';
import ic2 from 'style/images/others/icon2.png';
import ic3 from 'style/images/others/icon3.png';
import ic4 from 'style/images/others/icon4.png';

const TopHeader = (props) => {
  const {
    list = [
      { name: "产量", value: 15682, icon: ic1, unit: '吨' },
      { name: "产值", value: 2.15, icon: ic2, unit: '亿元' },
      { name: "面积", value: 9304, icon: ic3, unit: '亩' },
      { name: "品种", value: 32, icon: ic4, unit: '个' },
    ],
    title = '野藤葡萄生产情况',
    isShowTitle = true,
  } = props;

  return (
    <div className="tab-li">
      {isShowTitle && <p className="tab-li-title">{title}</p>}
      <ul className="tab-li-ul">
        {
          list.map((item, index) => {
            return (
              <li key={index}>
                <div className="tab-li-pic-div">
                  <img src={item.icon} alt="" />
                </div>
                <div className="tab-li-content">
                  <p className="tab-li-content-name">{item.name}</p>
                  <p className="tab-li-content-count">
                    <CountTo speed={item.value} to={item.value}/>
                    {item.unit}
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TopHeader;
