/*
 * @Author: yushunping 
 * @Date: 2021-05-29 09:00:57 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-05-29 22:33:56
 */

import React from 'react';
import CountTo from 'components/CountTo/CountTo';
import './TabLi2.scss';

import ic1 from 'style/images/others/icon5.png';
import ic2 from 'style/images/others/icon6.png';
import ic3 from 'style/images/others/icon7.png';
import ic4 from 'style/images/others/icon8.png';

const TabLi2 = (props) => {
  const {
    list = [
      { name: "平均果肉", value: 50, icon: ic1, unit: '优' },
      { name: "平均纵径", value: 42, icon: ic2, unit: '优' },
      { name: "平均横径", value: 55, icon: ic3, unit: '优' },
      { name: "果形指数", value: 34, icon: ic4, unit: '优' },
    ],
    title = '野藤葡萄生产情况',
    isShowTitle = true,
  } = props;

  return (
    <div className="tab-li2">
      {isShowTitle && <p className="tab-li2-title">{title}</p>}
      <ul className="tab-li2-ul">
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
                    <span className="tab-li-content-count-unit">{item.unit}</span>
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

export default TabLi2;
