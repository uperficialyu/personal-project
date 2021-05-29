/**
 * @Description 演示
 * @Author: yushunping
 * @Date: 2020-08-21 18:47:17
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-05-29 08:51:09
 */

import React, { Component } from 'react';
import Container from 'components/Container/Container';
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
        <Container options={{width: 3840, height: 2160}}>
          <main className="template-page">
            <section className="header">header</section>

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
                <div className="right-top2">right-top2</div>

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
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
