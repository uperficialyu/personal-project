/**
 * @Description 演示
 * @Author: yushunping
 * @Date: 2020-08-21 18:47:17
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-05-29 17:45:16
 */

import React, { Component } from 'react';
import Container from 'components/Container/Container';
import TabLi from 'components/others/TabLi/TabLi';
import SmoothedLineChart from 'components/charts/SmoothedLineChart/SmoothedLineChart';
import './Template.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
    } = this.state;
    return (
      <React.Fragment>
        <Container options={{width: 1920, height: 1080}}>
          <main className="component-page">
            <div className="tab">
              <TabLi />
            </div>
            <div className="page2">
              <SmoothedLineChart />
            </div>
          </main>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
