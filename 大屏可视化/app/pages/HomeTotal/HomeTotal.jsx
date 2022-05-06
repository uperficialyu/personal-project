import React, { Component } from 'react';
import Home from 'pages/Home/Home.jsx';
import CultivatedLandQualitySurvey from 'pages/CultivatedLandQualitySurvey/CultivatedLandQualitySurvey.jsx';
import SoilMap from 'pages/SoilMap/SoilMap.jsx';
import CheckLogin from 'components/CheckLogin/CheckLogin';

import png1 from 'style/images/homeTotal/homeTotal1.png';
import png2 from 'style/images/homeTotal/homeTotal3.png';
import png3 from 'style/images/homeTotal/homeTotal5.png';
import png4 from 'style/images/homeTotal/homeTotal2.png';
import png5 from 'style/images/homeTotal/homeTotal4.png';
import png6 from 'style/images/homeTotal/homeTotal6.png';

import './HomeTotal.scss';

export default class HomeTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerList: [
        { title: '耕地质量评价', png: png2, active: png4 },
        { title: '土壤图', png: png1, active: png5 },
        { title: '调查点位', png: png3, active: png6 },
      ],
      centerListActvie: 0
    };
  }

  // 点击中间切换
  handleCenter = (index) => {
    this.setState({
      centerListActvie: index
    });
  }

  render() {
    const {
      centerList,
      centerListActvie
    } = this.state;

    const componentObj = {
      0: <Home />,
      1: <SoilMap />,
      2: <CultivatedLandQualitySurvey />,
    };

    return (
      <div className="home-total">
        <CheckLogin jmp={this.props} />
        <div className="home-total-center">
          {
            centerList.map((item, index) => {
              return (
                <div onClick={() => this.handleCenter(index)} className="home-total-left-pic5-item">
                  <div className={centerListActvie === index ? 'home-total-left-pic5-item-bg home-total-left-pic5-item-bg-hover' : 'home-total-left-pic5-item-bg'}>
                    <img src={centerListActvie === index ? item.active : item.png} alt="" />
                  </div>
                  <div className={centerListActvie === index ? 'home-total-left-pic5-item-title home-total-left-pic5-item-title-active' : 'home-total-left-pic5-item-title'}>{item.title}</div>
                </div>
              );
            })
          }
        </div>

        {componentObj[centerListActvie]}
      </div>
    );
  }
}
