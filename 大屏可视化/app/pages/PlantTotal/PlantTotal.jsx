import React, { Component } from 'react';
import PlantDistributed from 'pages/PlantDistributed/PlantDistributed.jsx';
import AltitudeDistributed from 'pages/AltitudeDistributed/AltitudeDistributed.jsx';
import SlopeAnalysis from 'pages/SlopeAnalysis/SlopeAnalysis.jsx';
import AspectAnalysis from 'pages/AspectAnalysis/AspectAnalysis.jsx';
import CheckLogin from 'components/CheckLogin/CheckLogin';

import png1 from 'style/images/plantSort/plantTotal1.png';
import png2 from 'style/images/plantSort/plantTotal2.png';
import png3 from 'style/images/plantSort/plantTotal3.png';
import png4 from 'style/images/plantSort/plantTotal4.png';
import png5 from 'style/images/plantSort/plantTotal5.png';
import png6 from 'style/images/plantSort/plantTotal6.png';
import png7 from 'style/images/plantSort/plantTotal7.png';
import png8 from 'style/images/plantSort/plantTotal8.png';

import './PlantTotal.scss';

export default class PlantTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerList: [
        { title: '种植分布', png: png1, active: png2 },
        { title: '海拔分布', png: png3, active: png4 },
        { title: '坡向分布', png: png7, active: png8 },
        { title: '坡度分布', png: png5, active: png6 },
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
      0: <PlantDistributed />,
      1: <AltitudeDistributed />,
      2: <AspectAnalysis />,
      3: <SlopeAnalysis />,
    };

    return (
      <div className="plant-total">
        <CheckLogin jmp={this.props} />
        <div className="plant-total-center">
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
