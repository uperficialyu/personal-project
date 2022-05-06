import React, { Component } from 'react';
import BarChart from 'components/BarChart/BarChart';
import CheckLogin from 'components/CheckLogin/CheckLogin';
import Ajax from 'lib/ajax';
import echarts from 'echarts/lib/echarts';
import moment from 'moment';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import zhifutixing from 'style/images/meteorological/zhifutixing.png';
import png1 from 'style/images/meteorological/1.png';
import png2 from 'style/images/meteorological/2.png';
import png3 from 'style/images/meteorological/3.png';
import png4 from 'style/images/meteorological/4.png';
import png5 from 'style/images/meteorological/5.png';
import png6 from 'style/images/meteorological/6.png';
import png7 from 'style/images/meteorological/7.png';
import png8 from 'style/images/meteorological/8.png';

import temp from 'style/images/meteorological/temp.png';
import returnpng from 'style/images/meteorological/return.png';
import play from 'style/images/meteorological/play.png';
import stop from 'style/images/meteorological/stop.png';
import ticon from 'style/images/meteorological/ticon.png';

import png11 from 'style/images/meteorological/13.png';
import png12 from 'style/images/meteorological/15.png';
import png13 from 'style/images/meteorological/11.png';
import png14 from 'style/images/meteorological/10.png';
import png15 from 'style/images/meteorological/19.png';
import png16 from 'style/images/meteorological/18.png';
import png17 from 'style/images/meteorological/12.png';
import png18 from 'style/images/meteorological/14.png';
import png19 from 'style/images/meteorological/16.png';
import png20 from 'style/images/meteorological/17.png';

import './Meteorological.scss';

export default class meteorological extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      middleactive: 0,
      startactive: 0,
      timeActive: 0,
      timelist: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5],
      timeValue: 6,
      weatherConditionList: [
        { title: '空气温度', value: '32℃', icon: png1 },
        { title: '空气湿度', value: '78.6%', icon: png2 },
      ],
      indexByLocalDtoList: [
        { title: '大气压力', value: '1002pa', icon: png3 },
        { title: '紫外线', value: '弱', icon: png4 },
        { title: '穿衣', value: '炎热', icon: png5 },
        { title: '洗车', value: '较不宜', icon: png6 },
        { title: '感冒', value: '少发', icon: png7 },
        { title: '运动', value: '较适宜', icon: png8 },
      ],
      obj: {},
      dataX: [],
      dataY: [],
      forecastDataX: [],
      forecastDataY: [],
      forecast24: [],
      dataX1: [],
      dataY1: [],
      tips: ''
    };
    this.chart1 = null;
    this.chart2 = null;

    this.timeInter = null;
  }

  handleTitle = (active) => {
    const { forecast24 } = this.state;
    let dataY = [];
    this.setState({
      active
    }, () => {
      switch (active) {
        case 0:
          // this.chart2fun();
          break;
        case 1:
          dataY = forecast24.map(item => item.windSpeed);
          this.setState({
            dataY
          });
          break;
        case 2:
          dataY = forecast24.map(item => item.temp);
          this.setState({
            dataY
          });
          break;
        case 3:
          dataY = forecast24.map(item => item.qpf);
          this.setState({
            dataY
          });
          break;
        default:
          break;
      }
    });
  }

  componentDidMount() {
    // this.chart2fun();
    this.weatherCondition();
    this.indexByLocalDto();
    this.forecast5();
    this.forecast24hoursByLocalDto();
  }

  handleMiddleTab = (item, middleactive) => {
    const dom = document.getElementById('iframeid').contentWindow;
    this.setState({
      middleactive
    });
    switch (item.title) {
      case '湿度':
        dom.switchToHumidity();
        break;
      case '大风':
        dom.switchToWind();
        break;
      case '温度':
        dom.switchToTemperature();
        break;
      case '降雨':
        dom.switchToRainfall();
        break;
      default:
        break;
    }
  }

  handlestart = () => {
    const { startactive } = this.state;
    const dom = document.getElementById('iframeid').contentWindow;
    if (startactive === 0) {
      this.timeInter = window.setInterval(() => {
        const { timelist, timeValue } = this.state;
        for (let i = 0; i < timelist.length; i++) {
          if (timelist[i] === timeValue) {
            if (i === timelist.length - 1) {
              this.setState({
                timeValue: timelist[0],
                timeActive: 0
              });
            } else {
              this.setState({
                timeValue: timelist[i + 1],
                timeActive: i + 1
              });
            }
            dom.playMes(timeValue);
          }
        }
      }, 1000 * 1);
      this.setState({
        startactive: 1
      });
    } else {
      clearInterval(this.timeInter);
      this.setState({
        startactive: 0
      });
    }
  }

  handleTime = (item, index) => {
    const dom = document.getElementById('iframeid').contentWindow;
    this.setState({
      timeActive: index,
      timeValue: item
    });
    dom.playMes(item);
  }

  weatherCondition = () => {
    const params = {
      lat: '30.82702',
      lon: '110.98156'
    };
    Ajax('post', '/hydra-open-thirdpart-service/weather/open//weatherCondition', params).then((res) => {
      if (res.state === 200) {
        const data = res.results || {};
        const list = [
          { title: '空气温度', value: `${data.temperature}℃`, icon: png1 },
          { title: '空气湿度', value: `${data.humidity}%`, icon: png2 },
        ];
        this.setState({
          weatherConditionList: list,
          obj: data
        });
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  indexByLocalDto = () => {
    const params = {
      lat: '30.82702',
      lon: '110.98156'
    };
    Ajax('post', '/hydra-open-thirdpart-service/weather/open/indexByLocalDto', params).then((res) => {
      if (res.state === 200) {
        const list = [
          { title: '大气压力', value: '1002pa', icon: png3 },
          { title: '紫外线', value: '弱', icon: png4 },
          { title: '穿衣', value: '炎热', icon: png5 },
          { title: '洗车', value: '较不宜', icon: png6 },
          { title: '感冒', value: '少发', icon: png7 },
          { title: '运动', value: '较适宜', icon: png8 },
        ];
        let tips = '';
        const liveIndex = res.results.data.liveIndex;
        for (let i in liveIndex) {
          const arr = liveIndex[i];
          for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < list.length; k++) {
              if (arr[j].name.includes(list[k].title)) {
                list[k].value = arr[j].status;
                tips = arr[j].desc;
              }
            }
          }
        }
        this.setState({
          indexByLocalDtoList: list,
          tips: tips
        });
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  forecast5 = () => {
    const params = {
      lat: '30.82702',
      lon: '110.98156'
    };
    Ajax('post', '/hydra-open-thirdpart-service/weather/open/forecast5', params).then((res) => {
      if (res.state === 200) {
        const forecastData = res?.results?.data?.aqiForecast || [];
        const forecastDataX = forecastData.map(item => item.date).slice(-5);
        const forecastDataY = forecastData.map(item => item.value).slice(-5);
        this.setState({
          forecastDataX,
          forecastDataY,
        });
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取24小时风力风向
  forecast24hoursByLocalDto = () => {
    const params = {
      lat: '30.82702',
      lon: '110.98156'
    };
    Ajax('post', '/hydra-open-thirdpart-service/weather/open/forecast24hoursByLocalDto', params).then((res) => {
      if (res.state === 200) {
        const data = res?.results?.data?.hourly || [];
        const dataX = data.map(item => item.hour);
        this.setState({
          dataX,
          forecast24: data
        });
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const {
      active,
      middleactive,
      startactive,
      timeActive,
      timelist,
      weatherConditionList,
      indexByLocalDtoList,
      obj,
      forecastDataX,
      forecastDataY,
      dataX,
      dataY,
      tips
    } = this.state;

    const nowDate = moment(new Date()).format('YYYY-MM-DD') ;

    // 每日提醒预警信号内容
    const list = [
      '秭归县气象台2022年3月8日13时10分发布暴雨黄色预警',
      '秭归县气象台2022年3月8日18时30分将暴雨橙色预警信号降级为暴雨黄色预警信号',
      '秭归县气象台2022年3月1日13时10分发布暴雨黄色预警'
    ];

    const list3 = [
      { title: '湿度', icon: png11, iconactive: png12 },
      { title: '温度', icon: png15, iconactive: png16 },
      { title: '大风', icon: png13, iconactive: png14 },
      { title: '降雨', icon: png17, iconactive: png18 },
      // {title: '灾害预警', icon: png20, iconactive: png19},
    ];

    // 左侧图表标题
    const titlelist = ['PM2.5', '风力风向', '温度', '降水量'];

    return (
      <div className="meteorological">
        <CheckLogin jmp={this.props} />
        <div className="meteorological-left">
          {/* 左侧天气推荐版块 */}
          <div className="meteorological-left-top">
            <div className="meteorological-left-title">
              <div className="lefttopitem">
                <span className="lefttopTem">{weatherConditionList[0].value}</span>
                <span className="lefttopwind">{obj.wind_direction}{obj.wind_power}级</span>
              </div>
              <div className="lefttopitem">
                <span className="lefttoppm">PM2.5值：</span>
                <span className="lefttopgood">{obj.api} {obj.airQuality}</span>
              </div>
              <div className="lefttopitem">
                <span className="lefttopqing">{obj.weather}</span>
                <img className="lefttopson" src={`http://app1.showapi.com/weather/icon/day/0${obj.icon}.png`} alt="" />
              </div>
            </div>
            <div className="lefttopcontent">
              {
                weatherConditionList.map((item, index) => {
                  return (
                    <div style={{ background: `url(${item.icon})` }} className="lefttopcontentitem">
                      <span className="lefttopcontentitemtitle">{item.title}</span>
                      <span className="lefttopcontentitemvalue">{item.value}</span>
                    </div>
                  );
                })
              }
              {
                indexByLocalDtoList.map((item, index) => {
                  return (
                    <div style={{ background: `url(${item.icon})` }} className="lefttopcontentitem">
                      <span className="lefttopcontentitemtitle">{item.title}</span>
                      <span className="lefttopcontentitemvalue">{item.value}</span>
                    </div>
                  );
                })
              }
            </div>
            <div className="lefttopbotton">温馨提示：{tips}</div>
          </div>

          {/* 左侧图表 */}
          <div className="leftbottom">
            <div className="leftbottomtitle">
              {
                titlelist.map((item, index) => {
                  return (
                    <div onClick={() => this.handleTitle(index)} className={active === index ? 'leftbottomtitleitemactive' : 'leftbottomtitleitem'}>{item}</div>
                  );
                })
              }
            </div>
            <div className="leftbottomchart">
              {
                active === 0 ?
                  <div>
                    <div className="leftbottomimg">
                      {/* 空气含PM2.5指数 */}
                      <img src={temp} alt="" />
                    </div>
                    <div className="leftbottomchart1" >
                      <BarChart titlename="PM2.5" dataX={forecastDataX} dataY={forecastDataY} textTitle='未来五天预报' />
                    </div>
                  </div>
                  : ''
              }
              {
                active === 1 ?
                  <div>
                    <div className="leftbottomchart1">
                      <BarChart titlename="风力" dataX={dataX} dataY={dataY} />
                    </div>
                  </div>
                  : ''
              }
              {
                active === 2 ?
                  <div>
                    <div className="leftbottomchart1" >
                      <BarChart titlename="温度" dataX={dataX} dataY={dataY} />
                    </div>
                  </div>
                  : ''
              }
              {
                active === 3 ?
                  <div>
                    <div className="leftbottomchart1" >
                      <BarChart titlename="降水量" dataX={dataX} dataY={dataY} />
                    </div>
                  </div>
                  : ''
              }
            </div>
          </div>
        </div>

        <div className="middle">
          {/* 中间地图 */}
          <div className="meteorological-map">
            <iframe
              id="iframeid"
              title="map"
              frameBorder="no"
              border="0"
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              className="meteorological-iframe"
              allowtransparency="yes" src="./public/map/plant/meterological.html" frameborder="0"></iframe>
          </div>

          {/* 右下气象切换按钮 */}
          <div className="middletabposition">
            {
              list3.map((item, index) => {
                return (
                  <div onClick={() => this.handleMiddleTab(item, index)} className={middleactive === index ? 'middletabactive' : 'middletab'}>
                    <img src={middleactive === index ? item.iconactive : item.icon} alt="" />
                    <span className="middletabspan">{item.title}</span>
                  </div>
                );
              })
            }
          </div>
          {/* 下方时间切换 */}
          <div className="middletimeposition">
            <div onClick={this.handlestart} className="middletimepositionstart"><img src={startactive === 0 ? play : stop} alt="" /></div>
            <div className="middletimepositionline">
              {
                timelist.map((item, index) => {
                  return (
                    <div onClick={() => this.handleTime(item, index)} className="middletimepositionlineitem">
                      <div className="middletimepositionlineitemtop"></div>
                      <div className={timeActive === index ? 'middletimepositionlineitemmiddleactive' : 'middletimepositionlineitemmiddle'}></div>
                      <div className={timeActive === index ? 'middletimepositionlineitemmiddle1active' : 'middletimepositionlineitemmiddle1'}></div>
                      <div className="middletimepositionlineitembottom">{item}:00</div>
                    </div>
                  );
                })
              }
            </div>
            <div className="middletimepositiontime">
              <img src={ticon} alt="" />
              <span>{nowDate}</span>
            </div>
          </div>
        </div>

        {/* 右上每日提醒框 */}
        <div className="right">
          <div className="righttop">
            <div className="righttoptitle">
              <img src="zhifutixing" alt="" />
              <span>每日提醒</span>
            </div>
            <div className="righttopcontent">
              今天2022年3月8日，星期一，今天阳光依旧，午后依
              然炎热，最高气温在23℃左右，市民朋友出行要继续做
              好防暑降温工作，近期连晴天气，森林火险气象等级极
              高，严禁一切林内用火。
            </div>
            <div className="righttopcontent2title">预警信号</div>
            <div className="righttopcontent2height">
              {
                list.map((item, index) => {
                  return (
                    <div className="righttopcontent2Item">{item}</div>
                  );
                })
              }
            </div>
          </div>
          <div className="rightbottom">
          </div>
        </div>
      </div>
    );
  }
}
