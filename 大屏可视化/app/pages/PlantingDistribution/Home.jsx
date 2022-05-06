/**
 * @Description 首页
 * @Author: yushunping
 * @Date: 2020-08-21 18:47:17
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-12-22 10:03:54
 */

import React, { Component } from 'react';
import Item2 from './component/Item2';
import Item3 from './component/Item3';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCategoryData1: ['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉'],
      colorList1: [{ background: 'rgb(140, 160, 173)' }, { background: 'rgb(80, 80, 80)' }],
      countryCategoryData2: ['订单量', '销售额', '用户数', '退单量'],
      colorList2: [{ background: 'rgb(178, 209, 126)' }, { background: 'rgb(116, 166, 49)' }],
      barChart: [
        ['粉面粥店', 96, 4],
        ['简餐便当', 70, 30],
        ['汉堡披萨', 82, 18],
        ['香锅冒菜', 33, 44],
        ['小吃炸串', 22, 34],
        ['轻食简餐', 44, 24],
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <main className="home-page">
          <div className="home-content">
            <div className="home-left"></div>
            <div className="home-right">
              <div className="home-right-item1"></div>
              <div className="home-right-item2">
                <Item2 />
              </div>
              <div className="home-right-item3">
                <Item3 />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
