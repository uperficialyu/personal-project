import React, { Component } from 'react';
import Header from 'components/Header/Header';
import Item1 from './component/Item1';
import Item2 from './component/Item2';
import Item3 from './component/Item3';
import Item4 from './component/Item4';
import Item5 from './component/Item5';
import Item6 from './component/Item6';
import Item7 from './component/Item7';
import Item8 from './component/Item8';

import './MonographicAnalysis.scss';

export default class MonographicAnalysis extends Component {
  render() {
    return (
      <main className='monographic-analysis'>
        <div><Header active={6} /></div>
        <div className='monographic-analysis-content'>
          <div className='monographic-analysis-content-left'>
            <div className='monographic-analysis-content-left-item1'><Item1 title="专题事件" /></div>
            <div className='monographic-analysis-content-left-item2'><Item1 title="首发资讯" /></div>
            <div className='monographic-analysis-content-left-item3'><Item1 title="最新资讯" /></div>
            <div className='monographic-analysis-content-left-item4'><Item2 /></div>
          </div>
          <div className='monographic-analysis-content-right'>
            <div className='monographic-analysis-content-right-top'>
              <div className='monographic-analysis-content-right-top-left'><Item5 /></div>
              <div className='monographic-analysis-content-right-top-center'><Item8 /></div>
              {/* <div className='monographic-analysis-content-right-top-right'><Item5 /></div> */}
            </div>
            <div className='monographic-analysis-content-right-middle'>
              <div className='monographic-analysis-content-right-middle-left'><Item3 /></div>
              <div className='monographic-analysis-content-right-middle-right'><Item6 /></div>
            </div>
            <div className='monographic-analysis-content-right-bottom'>
              <div className='monographic-analysis-content-right-bottom-left'><Item4 /></div>
              <div className='monographic-analysis-content-right-bottom-right'><Item7 /></div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
