/**
 * @Description 演示
 * @Author: yushunping
 * @Date: 2020-08-21 18:47:17
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-05-29 22:15:55
 */

import React, { Component } from 'react';
import Container from 'components/Container/Container';
import TabLi from 'components/others/TabLi/TabLi';
import TabLi2 from 'components/others/TabLi2/TabLi2';
import SmoothedLineChart from 'components/charts/SmoothedLineChart/SmoothedLineChart';
import Table1 from 'components/table/Table1/Table1';
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
            <div className="tab2">
              <TabLi2 />
            </div>
            <div className="table11">
              <Table1 />
            </div>
          </main>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
