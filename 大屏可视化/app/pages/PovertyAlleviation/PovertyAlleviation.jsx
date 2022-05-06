/* @Description 扶贫
 * @Author: yushunping 
 * @Date: 2021-07-28 15:30:45 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-08-05 14:13:23
 */

import React, { Component } from 'react';
import Ajax from 'lib/ajax';
import { message } from 'antd';
import * as echarts from 'echarts';
import './PovertyAlleviation.scss';

// 导入基本swipe组件
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入自动播放和分页器模块
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// 导入swiper组件样式
import 'swiper/swiper.scss';
//如果当先项目导入scss文件报错，请百度搜索react项目引入scss文件，然后下载对应插件即可引入
// 导入分页器组件样式
import 'swiper/components/pagination/pagination.scss';

// 挂载到当前swiper实例
SwiperCore.use([Pagination, Autoplay]);

export default class PovertyAlleviation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1list: [],
      tuopinObj: {}, // 脱贫人数
      weiTuopinObj: {}, // 未脱贫人数
      item4List: [], // 电商扶贫产品分析
      item3List: [], // 电商企业带动贫困户家庭分析
      center3: '', // 电商带动贫困户数(户)
      center1: '', // 电商扶贫企业/单位(家)
      center2: '', // 贫困户电商产品数
      center4: '', // 电商扶贫增收(每户/元)
      item5List: [], // 电商扶贫产业排行
      centerTitle: '', // 中间标题 
      centerbottom1: '', // 带动贫困户电商产品数
      centerbottom2: '', // 帮扶总额
      centerbottom3: '', // 带动贫困户数
      centerbottom4: [], // 带动贫困户电商产品
      centerbottom5: [], // 带动贫困户
      titleValue: ''
    }

    this.chart11 = null;
    this.chart22 = null;
    this.chart33 = null;

    this.rightCahrt0 = null;
    this.rightCahrt1 = null;
    this.rightCahrt2 = null;

    this.timeId = null;
    this.indexId = 0;
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  componentDidMount() {
    this.getFuping();
    this.getTuopin();
    this.getWeiTuopin();
    this.getPinkunhuChart();
    this.getFupinproduct();
    this.getFupinSort()
    this.getPupingProductAnalyze();
    this.getPingkun();
    this.getFupinPro();
    this.getFupinEle();
    this.getFupinRise();
    this.getFupinDai();
    this.getTitle();
    this.getCenter1();
    this.getCenter2();
    this.getCenter3();
    this.getCenter4();
    this.getCenter5();
  }

  // 电商扶贫企业/单位
  getFuping = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getEnterprises', params).then((res) => {
      if (res.state === 200) {
        const list = res.results.values;
        this.setState({
          item1list: list
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 脱贫人数
  getTuopin = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getOutOfPovertyPeopleQuantity', params).then((res) => {
      if (res.state === 200) {
        this.setState({
          tuopinObj: res.results
        });
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 未脱贫人数
  getWeiTuopin = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getNotOutOfPovertyPeopleQuantity', params).then((res) => {
      if (res.state === 200) {
        this.setState({
          weiTuopinObj: res.results
        });
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 贫困户分布
  getPinkunhuChart = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getTownShipFamilyNumber', params).then((res) => {
      if (res.state === 200) {
        const list = res.results.values;
        this.chart1(list)
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 贫困户分布
  chart1 = (list) => {
    let sum = 0;
    const arr = list.map(item => {
      sum += Number(item.value)
      return {
        value: item.value,
        name: item.name
      }
    });
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        right: '30',
        top: '30',
        textStyle: {
          color: '#fff',
          fontSize: 16
        },
        // data: [1,2,3]//opt.nameArr
      },
      title: {
        text: sum + '\n贫困户数',
        left: '23%',
        top: '35%',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          align: 'center'
        }
      },
      // color: jkp.config.chartPieColors,
      series: [
        {
          name: '贫困户数',
          type: 'pie',
          center: ['30%', '50%'],
          radius: ['50%', '73%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '18',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: arr
        }
      ]
    };
    if (!this.chart11) {
      this.chart11 = echarts.init(document.getElementById('poorFamilyDistributionChart'))
    }
    this.chart11.setOption(option);
  }

  // 电商扶贫产业排行
  getFupinproduct = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    // GET电商扶贫产业排行——种植类
    let p1 = new Promise((resolve, reject) => {
      Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getPovertyAlleviationIndustryPlan', params).then((res) => {
        if (res.state === 200) {
          const list = res.results.values;
          resolve({
            name: '种植类',
            list
          });
        } else {
          message.error(res.msg);
        }
      }).catch(err => {
        console.log(err);
      });
    });
    // GET电商扶贫产业排行——加工类
    let p2 = new Promise((resolve, reject) => {
      Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getPovertyAlleviationIndustryMachin', params).then((res) => {
        if (res.state === 200) {
          const list = res.results.values;
          resolve({
            name: '加工类',
            list
          });
        } else {
          message.error(res.msg);
        }
      }).catch(err => {
        console.log(err);
      });
    })
    // GET电商扶贫产业排行——养殖类
    let p3 = new Promise((resolve, reject) => {
      Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getPovertyAlleviationIndustryBreed', params).then((res) => {
        if (res.state === 200) {
          const list = res.results.values;
          resolve({
            name: '养殖类',
            list
          });
        } else {
          message.error(res.msg);
        }
      }).catch(err => {
        console.log(err);
      });
    })
    Promise.all([p1, p2, p3]).then(values => {
      console.log(values, 'item5List')
      this.setState({
        item5List: values
      });
      this.chart2(values)
    })
  }

  // 电商扶贫产业排行
  chart2 = (values) => {
    this.staticData = JSON.parse(JSON.stringify(values));

    this.timeId = setInterval(() => {
      const data = this.staticData[this.indexId];
      const list = data.list || [];
      this.setState({
        titleValue: data.name
      });
      const dataX = list.map(item => item.name)
      const dataY = list.map(item => item.value)
      const option = {
        color: ['#ffb52b', '#eb7044', '#49c8cf', '#97b552', '#b6a2de', '#f0b5a9', '#aadfab', '#2b5de2', '#dbe8e4', '#9eb5f2'],
        tooltip: {
          show: false
        },
        grid: {
          top: 25,
          bottom: '45%',
          left: 60
        },
        xAxis: [
          {
            data: dataX,
            axisLine: {
              lineStyle: {
                color: '#3e6be2'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#243c7e'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              margin: 10,
              position: 'bottom',
              rotate: 50,
              // formatter: function (value, index) {
              //   var name = value.substr(0, 4);
              //   // name = name.split('').join('\n');
              //   name = name.length > 4 ? name.substr(0, 4) + '...' : name;
              //   return name;
              // },
              textStyle: {
                fontSize: 18,
                color: '#77cad8'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#3e6be2'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#243c7e'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                fontSize: 18,
                color: '#77cad8'
              }
            }
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 15,
            show: true,
            name: 'sdssdsdd',
            itemStyle: {
              normal: {
                barBorderRadius: [9, 9, 0, 0]
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 18,
                  color: '#77cad8'
                }
              }
            },
            data: dataY
          }
        ]
      };
      if(this.indexId === 0) {
        this.indexId ++;
      } else if(this.indexId === 1) {
        this.indexId ++;
      } else if(this.indexId === 2) {
        this.indexId = 0;
      }
      
      if (!this.chart22) {
        this.chart22 = echarts.init(document.getElementById('povertyAlleviationIndustryListChart'))
      }
      this.chart22.setOption(option);
    }, 1000 * 3)

    // for (let i = 0; i < item5List.length; i++) {
    //   if (!this[`rightCahrt${i}`]) {
    //     this[`rightCahrt${i}`] = echarts.init(document.querySelector(`.povertyAlleviationIndustryListChart${i}`));
    //     // this.chart22 = echarts.init(document.querySelector(".povertyAlleviationIndustryListChart"))
    //   }
    //   this[`rightCahrt${i}`].setOption(option);
    // }
  }

  // 各地区电商帮扶总额排行
  getFupinSort = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getTownShipAmount', params).then((res) => {
      if (res.state === 200) {
        const list = res.results.values;
        this.chart3(list);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 各地区电商帮扶总额排行
  chart3 = (list) => {
    let dataX = [];
    let dataY = [];
    list.forEach((item, index) => {
      try {
        const val = item.name && item.name.split('') && item.name.split(' ')[0];
        dataX.push(val);
      } catch (error) {
        console.log(error)
        dataX.push(item.name);
      }
      dataY.push(item.value);
    })
    const option = {
      color: ['#ffb52b', '#eb7044', '#49c8cf', '#97b552', '#b6a2de', '#f0b5a9', '#aadfab', '#2b5de2', '#dbe8e4', '#9eb5f2'],
      tooltip: {
        show: false
      },
      grid: {
        top: 0,
        bottom: -8,
        left: '15%',
        width: 278
      },
      yAxis: {
        type: 'category',
        data: dataX,
        axisLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 18,
            color: '#77cad8'
          }
        },
        axisTick: {
          show: false
        }
      },
      xAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          type: 'bar',
          barWidth: 12,
          itemStyle: {
            normal: {
              barBorderRadius: [0, 7, 7, 0]
            }
          },
          label: {
            normal: {
              show: true,
              formatter: function (data) {
                return data.value + '元';
              },
              position: [290, -8],
              textStyle: {
                fontSize: 18,
                color: '#77cad8'
              }
            }
          },
          data: dataY
        }
      ]
    };
    if (!this.chart33) {
      this.chart33 = echarts.init(document.getElementById('povertyAlleviationRegionChart'))
    }
    this.chart33.setOption(option);
  }

  // 电商扶贫产品分析
  getPupingProductAnalyze = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getProductionInfo', params).then((res) => {
      if (res.state === 200) {
        const list = res.results.values;
        this.setState({
          item4List: list
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 电商带动贫困户数(户)
  getPingkun = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getNumberofPoor', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        this.setState({
          center3: results.value
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 电商扶贫企业/单位(家)
  getFupinPro = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getEnterprisesNumber', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        this.setState({
          center1: results.value
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 贫困户电商产品数
  getFupinEle = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getProductionHelpStatistics', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        this.setState({
          center2: results.value
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 电商扶贫增收(每户/元)
  getFupinRise = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getincomePerHousehold', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        this.setState({
          center4: results.value
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 电商企业带动贫困户家庭分析
  getFupinDai = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getFamilyIncome', params).then((res) => {
      if (res.state === 200) {
        const results = res.results.values;
        this.setState({
          item3List: results
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 标题
  getTitle = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getMaxAmountOrgName', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        this.setState({
          centerTitle: results.value
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 带动贫困户电商产品数
  getCenter1 = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getEnterpriseAssistanceProductNumber', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        this.setState({
          centerbottom1: results.value
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 帮扶总额(元)
  getCenter2 = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getEnterpriseAssistanceAmount', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        this.setState({
          centerbottom2: results.value
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 带动贫困户数
  getCenter3 = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getEnterpriseAssistanceFarmerNumber', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        this.setState({
          centerbottom3: results.value
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 带动贫困户电商产品
  getCenter4 = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getEnterpriseAssistanceProduct', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        console.log(results)
        this.setState({
          centerbottom4: results.values
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 带动贫困户
  getCenter5 = () => {
    const params = {
      current: 1,
      pageSize: 1000,
    }
    Ajax('get', '/hydra-poverty-alleviation/api/v1/PovertyAlleviationdataAnalysis/getEnterpriseAssistanceFarmer', params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        console.log(results,'results')
        this.setState({
          centerbottom5: results.values
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const {
      item1list,
      tuopinObj,
      weiTuopinObj,
      item4List,
      item3List,
      center3,
      center1,
      center2,
      center4,
      item5List,
      centerTitle,
      centerbottom1,
      centerbottom2,
      centerbottom3,
      centerbottom4,
      centerbottom5,
      titleValue
    } = this.state;

    return (
      <div>
        <header>
          <h2>
            <i></i>
            <p id="PovertyName"><span></span>电商帮扶中心</p>
            <i></i>
          </h2>
        </header>

        <div className="container clearfix">

          {/* 左边 */}
          <div className="aside-part">
            <div className="small-box">
              <div className="box-title">电商扶贫企业/单位</div>
              <div id="povertyAlleviationOnlineChart" className="data-charts-small swiper-container poverty-alleviation-list">
                <div className="box-min-title"><i className="box-checkered"></i><span id="corpSum"></span>{item1list.length}家电商扶贫企业/单位</div>
                <div className="realTimeRecordList1">
                  <ul className="poverty-list newRouteRecordList">
                    <Swiper
                      slidesPerView={4} // 同屏显示多少个swiper滑块
                      initialSlide={0} // 默认展示第几个滑块
                      loop={true} // 是否开启无限轮播
                      // pagination={{ clickable: false }} //开启分页器操作
                      observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                      observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                      autoplay={true} // 自动轮播开启
                      direction='vertical'
                      className="swiper-wrapper"
                    >
                      {
                        item1list.map((item, index) => {
                          return (
                            <SwiperSlide className='swiper-slide' key={index}>
                              <li className="poverty-row">
                                <div className="poverty-row-child1">{item.name}</div>
                                <div className="poverty-row-child2">{item.value}元</div>
                              </li>
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper>
                  </ul>
                </div>
              </div>
            </div>

            <div className="small-box">
              <div className="box-title">各地区电商帮扶总额排行</div>
              <div id="povertyAlleviationRegionChart" className="data-charts-small">

              </div>
            </div>

            <div className="small-box">
              <div className="box-title">电商企业带动贫困户家庭分析</div>
              <div className="poverty-alleviation-poor-family-list">
                <div className="box-min-title"><i className="box-checkered"></i><span id="poorFamilySum"></span>{item3List.length}户贫困家庭</div>
                <div className="poverty-alleviation-poor">
                  <div id="povertyAlleviationPoorFamilyTable" className="poverty-alleviation-poor-family-table">
                    <div className="poor-family-row-1">
                      <span>贫困户</span>
                      <span>电商增收(元)</span>
                      <span>家庭人口</span>
                      <span>人均扶贫收入(元)</span>
                    </div>
                    <Swiper
                      slidesPerView={4} // 同屏显示多少个swiper滑块
                      initialSlide={0} // 默认展示第几个滑块
                      loop={true} // 是否开启无限轮播
                      // pagination={{ clickable: false }} //开启分页器操作
                      observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                      observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                      autoplay={true} // 自动轮播开启
                      direction='vertical'
                      className="swiper-wrapper"
                    >
                      {
                        item3List.map((item, index) => {
                          return (
                            <SwiperSlide className='swiper-slide' key={index}>
                              <div class="poor-family-row swiper-slide">
                                <span>{item.name}</span>
                                <span>{item.increaseIncome}</span>
                                <span>{item.familyPopulation}</span>
                                <span>{item.perCapitaIincome}</span>
                              </div>
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 中间 */}
          <div className="center-part">
            <div className="total-info-box">
              <div style={{ display: 'none' }}>
                <div className="box">
                  <div className="common-span corp-sum">电商扶贫企业/单位(家)
									<div></div>
                  </div>
                  <div className="common-span poor-family-sum">电商带动贫困户数(户)
									<div></div>
                  </div>
                  <div className="common-span product-sum">贫困户电商产品数
									<div></div>
                  </div>
                </div>
                <div className="box">
                </div>
              </div>

              <div className="box">
                <div className="box-number">脱贫人数</div>
                <div className="away-poverty-sum">{tuopinObj.value}</div>
                <div className="common-span corp-sum">电商扶贫企业/单位(家)：<span>{center1}</span></div>
                <div className="common-span poor-family-sum">电商带动贫困户数(户)：<span>{center3}</span></div>
              </div>
              <div className="box">
                <div className="box-number">未脱贫人数</div>
                <div className="poverty-sum">{weiTuopinObj.value}</div>
                <div className="common-span product-sum">贫困户电商产品数：<span>{center2}</span></div>
                <div className="common-span add-income">电商扶贫增收(每户/元)：<span>{center4}</span></div>
              </div>
            </div>

            <div className="center-box-poverty">
              <div className="center-box-title">电商扶贫分析</div>
              <div id="povertAlleviationStatisticsDetail" className="chart-container swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide content-box">
                    <div className="product-name">{centerTitle}</div>
                    <ul className="product-details">
                      <li>
                        <div className="circle product-sum">{centerbottom1}</div>
                        <div className="product-description">带动贫困户电商产品数</div>
                      </li>
                      <li>
                        <div className="circle help-total-amoun">{centerbottom2}</div>
                        <div className="product-description">帮扶总额(元)</div>
                      </li>
                      <li>
                        <div className="circle drive-sum">{centerbottom3}</div>
                        <div className="product-description">带动贫困户数</div>
                      </li>
                    </ul>

                    <div className="content-table">
                      <div className="content-table-title">带动贫困户电商产品</div>
                      <div claclassNamess="e-commerce-table">
                        <div className="e-commerce-row-1">
                          <span>产品</span>
                          <span>采购总额(元)</span>
                          <span>采购数量(斤)</span>
                        </div>
                        <div className="productList swiper-container swiper-container-vertical">
                        <Swiper
                          slidesPerView={6} // 同屏显示多少个swiper滑块
                          initialSlide={0} // 默认展示第几个滑块
                          loop={true} // 是否开启无限轮播
                          // pagination={{ clickable: false }} //开启分页器操作
                          observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                          observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                          autoplay={true} // 自动轮播开启
                          direction='vertical'
                          className="swiper-wrapper"
                        >
                          {
                            centerbottom4.map((item, index) => {
                              return (
                                <SwiperSlide className='swiper-slide' key={index}>
                                  <div class="e-commerce-row swiper-slide">
                                    <span>{item.name}</span>
                                    <span>{item.quantity}</span>
                                    <span>{item.totalPrice}</span>
                                  </div>
                                </SwiperSlide>
                              )
                            })
                          }
                        </Swiper>
                        </div>
                      </div>
                    </div>

                    <div className="content-table poor-family-table">
                      <div className="content-table-title">带动贫困户</div>
                      <div className="e-commerce-table">
                        <div className="e-commerce-row-1">
                          <span>贫困户</span>
                          <span>帮扶金额(元)</span>
                          <span>家庭人口</span>
                        </div>
                        <Swiper
                          slidesPerView={6} // 同屏显示多少个swiper滑块
                          initialSlide={0} // 默认展示第几个滑块
                          loop={true} // 是否开启无限轮播
                          // pagination={{ clickable: false }} //开启分页器操作
                          observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                          observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                          autoplay={true} // 自动轮播开启
                          direction='vertical'
                          className="swiper-wrapper"
                        >
                          {
                            centerbottom5.map((item, index) => {
                              return (
                                <SwiperSlide className='swiper-slide' key={index}>
                                  <div class="e-commerce-row swiper-slide">
                                    <span>{item.name}</span>
                                    <span>{item.increaseIncome}</span>
                                    <span>{item.familyPopulation}</span>
                                  </div>
                                </SwiperSlide>
                              )
                            })
                          }
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右边 */}
          <div className="aside-part">
            <div className="small-box">
              <div className="box-title">电商扶贫产品分析</div>
              <div className="poverty-alleviation-poor-family-list">
                <div className="box-min-title"><i className="box-checkered"></i><span className="productSum"></span>{item4List.length}种扶贫产品</div>
                <div id="product-analysis" className="poverty-alleviation-poor-family-table">
                  <div className="poor-family-row-1 industry-analysis">
                    <span>产品</span>
                    <span>采购总额(元)</span>
                    <span>平均单价(元)</span>
                    <span>采购数量(斤)</span>
                  </div>
                  <Swiper
                    slidesPerView={4} // 同屏显示多少个swiper滑块
                    initialSlide={0} // 默认展示第几个滑块
                    loop={true} // 是否开启无限轮播
                    // pagination={{ clickable: false }} //开启分页器操作
                    observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                    observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                    autoplay={true} // 自动轮播开启
                    direction='vertical'
                    className="swiper-wrapper"
                  >
                    {
                      item4List.map((item, index) => {
                        return (
                          <SwiperSlide className='swiper-slide' key={index}>
                            <div key={index} class="poor-family-row industry-analysis swiper-slide">
                              <span>{item.name}</span>
                              <span>{item.totalPrice}</span>
                              <span>{item.price}</span>
                              <span>{item.quantit}</span>
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="small-box">
              <div className="box-title">电商扶贫产业排行</div>
              <div className="data-charts-small">
                <div id="povertyAlleviationIndustryList" className="chart-container swiper-container">
                  <div className="box-min-title" style={{ marginLeft: 15 }}>
                    <i className="box-checkered"></i>{titleValue}
                  </div>
                  <div id="povertyAlleviationIndustryListChart"></div>

                  {/* <Swiper
                    slidesPerView={1} // 同屏显示多少个swiper滑块
                    initialSlide={0} // 默认展示第几个滑块
                    loop={true} // 是否开启无限轮播
                    // pagination={{ clickable: false }} //开启分页器操作
                    observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                    observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
                    autoplay={false} // 自动轮播开启
                    // direction='vertical'
                    className="swiper-wrapper"
                    onSlideChange={(e) => this.chart2(e)}
                  // onSwiper={(swiper) => console.log(swiper)}
                  >
                    {
                      item5List.map((item, index) => {
                        return (
                          <SwiperSlide className='swiper-slide' key={index}>
                            <div className="box-min-title" style={{ marginLeft: 15 }}>
                              <i className="box-checkered"></i>{item.name}
                            </div>
                            <div className={`povertyAlleviationIndustryListChart povertyAlleviationIndustryListChart${index}`}></div>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper> */}
                </div>
                {/* <div id="povertyAlleviationIndustryListChart"></div> */}
                {/* <div id="povertyAlleviationIndustryList" className="chart-container swiper-container"></div> */}
              </div>
            </div>
            <div className="small-box">
              <div className="box-title">贫困户分布</div>
              <div id="poorFamilyDistributionChart">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
