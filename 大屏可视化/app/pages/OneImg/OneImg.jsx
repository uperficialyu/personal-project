import React, { lazy, Component } from 'react';
import { BrowserRouter, HashRouter, Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import png1 from 'style/images/oneImg/one-img1.png';
import png2 from 'style/images/oneImg/one-img2.png';
import png3 from 'style/images/oneImg/one-img3.png';
import png4 from 'style/images/oneImg/one-img4.png';
import png5 from 'style/images/oneImg/one-img5.png';
import png6 from 'style/images/oneImg/one-img6.png';
import png7 from 'style/images/oneImg/one-img7.png';
import png8 from 'style/images/oneImg/one-img8.png';
import png9 from 'style/images/oneImg/one-img9.png';
import './OneImg.scss';

export default class OneImg extends Component {
  constructor(props) {
    super(props);
  }
  refresh = () => {
    setTimeout(() => {
      location.reload();
    },100);
  }

  render() {
    const list = [
      {title: '种植分布', png: png4, url: '/plantTotal'},
      {title: '耕地', png: png1, url: '/'},
      {title: '投入品监管', png: png2, url: '/input2'},
      {title: '物联网数据', png: png3, url: '/internetOfThings'},
      {title: '土壤墒情', png: png9, url: '/soilMoisture'},
      {title: '长势监测', png: png5, url: '/growthMonitoring'},
      {title: '种植适宜性分析', png: png6, url: '/suitable'},
      {title: '气象灾害预警', png: png7, url: '/meteorological'},
      {title: '脐橙价格监管', png: png8, url: '/priceAnalysis'},
    ];

    return (
      <div className="ome-img">
        <header className="ome-img-header"></header>

        <section className="ome-img-content">
          {
            list.map((item, index) => {
              return (
                <Link key={index} to={item.url}>
                  <div onClick={this.refresh} className="ome-img-content-item">
                    <div className="ome-img-content-item-bg-hover"></div>
                    <div className="ome-img-content-item-bg">
                      <div className="ome-img-content-item-title">{item.title}</div>
                      <div className="ome-img-content-item-img"><img src={item.png} alt="" /></div>
                    </div>
                  </div>
                </Link>
              );
            })
          }
        </section>
      </div>
    );
  }
}
