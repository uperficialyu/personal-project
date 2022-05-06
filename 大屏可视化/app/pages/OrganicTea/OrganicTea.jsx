/**
 * @Description 首页
 * @Author: yushunping
 * @Date: 2020-08-21 18:47:17
 * @Last Modified by: yushunping
 * @Last Modified time: 2022-03-21 14:15:33
 */

import React, { Component } from 'react';
import Item1 from './component/Item1';
import Item2 from './component/Item2';
import Item3 from './component/Item3';
import Item4 from './component/Item4';
import Item5 from './component/Item5';
import Item6 from './component/Item6';
import Center from './component/Center';
import Header from 'components/Header/Header';

import './OrganicTea.scss';

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
        <main className="organic-tea">
          <div><Header active={1} /></div>
          <div className="organic-tea-left">
            <Item1 />
            <Item4 />
            <Item5 />
          </div>
          <div className="organic-tea-right">
            <Item2 />
            <Item3 />
            <Item6 />
          </div>
          <div className="organic-tea-center"><Center /></div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
