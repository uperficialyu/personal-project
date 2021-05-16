/**
 * @Description 首页
 * @Author: yushunping
 * @Date: 2020-08-21 18:47:17
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-05-16 15:23:22
 */

import React, { Component, Fragment } from 'react';
import Ajax from 'lib/ajax';
import { sessionSet, sessionGet } from 'storage';
import { FormattedMessage, injectIntl } from 'react-intl';
import Container from 'components/Container/Container';
import TopHeader from 'components/TopHeader/TopHeader';
import CountryCategory from 'components/CountryCategory/CountryCategory';

import TotalUser from 'components/TotalUser/TotalUser';
import DiscountChart from 'components/DiscountChart/DiscountChart';
import CountTo from 'components/CountTo/CountTo';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';
import './Home.scss';

import xx from './Default.jpg'

@inject('langStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCategoryData: ['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉'],
    };
  }

  render() {
    const {
      countryCategoryData
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
                <div className="left4">left4</div>
                <div className="left5">left5</div>
                <div className="left6">left6</div>
              </div>

              <div className="right">
                <div className="right-top1">right-top1</div>
                <div className="right-top2">
                  <CountryCategory data={countryCategoryData}/>
                </div>

                <div className="right-bottom">
                  <div className="right-left">
                    <div className="right-left1">right-left1</div>
                    <div className="right-left2">right-left2</div>
                    <div className="right-left3">right-left3</div>
                    <div className="right-left4">right-left4</div>
                  </div>
                  <div className="right-right">
                    <div className="right-right1"></div>
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

export default injectIntl(Home);
