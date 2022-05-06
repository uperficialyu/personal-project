/**
 * @Description 首页
 * @Author: yushunping
 * @Date: 2020-08-21 18:47:17
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-05-29 08:45:11
 */

import React, { Component } from 'react';
import Container from 'components/Container/Container';
import TopHeader from 'components/TopHeader/TopHeader';
import CountryCategory from 'components/CountryCategory/CountryCategory';
import PlanList from 'components/PlanList/PlanList';
import BarChart from 'components/BarChart/BarChart';
import LineChart from 'components/LineChart/LineChart';
import TotalGender from 'components/TotalGender/TotalGender';

import TotalUser from 'components/TotalUser/TotalUser';
import DiscountChart from 'components/DiscountChart/DiscountChart';
import CountTo from 'components/CountTo/CountTo';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCategoryData1: ['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉'],
      colorList1: [{background: 'rgb(140, 160, 173)'}, {background: 'rgb(80, 80, 80)'}],
      countryCategoryData2: ['订单量', '销售额', '用户数', '退单量'],
      colorList2: [{background: 'rgb(178, 209, 126)'}, {background: 'rgb(116, 166, 49)'}],
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
    const {
      countryCategoryData1,
      colorList1,
      countryCategoryData2,
      colorList2,
      barChart
    } = this.state;
    return (
      <React.Fragment>
        <Container options={{width: 3840, height: 2160}}>
        {/* <Container options={{width: 1920, height: 1080}}> */}
          <main className="home-page">
            <section className="header">
              <TopHeader />
            </section>

            <section className="separator"></section>

            <section className="center">
              <div className="left">
                <div className="left1">left1</div>
                <div className="left2">left2</div>
                <div className="left3">left3</div>
                <div className="left4"><TotalGender /></div>
                <div className="left5"><LineChart /></div>
                <div className="left6"><BarChart data={barChart} /></div>
              </div>

              <div className="right">
                <div className="right-top1">right-top1</div>
                <div className="right-top2">
                  <CountryCategory data={countryCategoryData1} colorList={colorList1} />
                </div>

                <div className="right-bottom">
                  <div className="right-left">
                    <div className="right-left1">right-left1</div>
                    <div className="right-left2">
                      <CountryCategory data={countryCategoryData2} colorList={colorList2} />
                    </div>
                    <div className="right-left3">right-left3</div>
                    <div className="right-left4">right-left4</div>
                  </div>
                  <div className="right-right">
                    <div className="right-right1">
                      <PlanList />
                    </div>
                    <div className="right-right2"></div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          
          {/* <CountTo to={1234} speed={1234} /> */}
          {/* <TotalUser />
          <DiscountChart /> */}
          {/* <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br />
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button> */}
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
