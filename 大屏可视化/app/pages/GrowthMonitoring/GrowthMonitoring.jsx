import React, { Component } from 'react';
import MapItem from 'components/MapItem2/MapItem2';
import DateSwiper from 'components/DateSwiper/DateSwiper';
import Item1 from './component/Item1';
import Item2 from './component/Item2';
import config from '../../config/environment';
import Ajax from 'lib/ajax';
import { Checkbox, message, Popover } from 'antd';
import ModalDetal from 'components/ModalDetal/ModalDetal2';
import SearchModel from '../PlantDistributed/component/searchModal';
import obj from '../../config/static';
import CheckLogin from 'components/CheckLogin/CheckLogin';

import png1 from 'style/images/GrowthMonitoring/growthMonitoringCheck1.png';
import png2 from 'style/images/GrowthMonitoring/growthMonitoringCheck2.png';
import png3 from 'style/images/GrowthMonitoring/growthMonitoringCheck3.png';
import png6 from 'style/images/GrowthMonitoring/growthMonitoringCheck5.png';
import png7 from 'style/images/GrowthMonitoring/growthMonitoringCheck4.png';
import png8 from 'style/images/GrowthMonitoring/growthMonitoringCheck6.png';
import png4 from 'style/images/SoilMoisture/1.png';
import png5 from 'style/images/SoilMoisture/2.png';
import png9 from 'style/images/GrowthMonitoring/growthMonitoringModeltanhao.png';

import './GrowthMonitoring.scss';


export default class GrowthMonitoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomList: obj.orangeType,
      bottomActive: 0,
      mapExample: [
        { color: '#00D7E9', text: '湿润 0-0.2' },
        { color: '#5EBD00', text: '正常 0.2-0.4' },
        { color: '#FFD400', text: '轻旱 0.4-0.6' },
        { color: '#FFAA00', text: '中旱 0.6-0.8' },
        { color: '#FF7F00', text: '重旱 0.8-0.9' },
        { color: '#FF5A00', text: '特旱 0.9-1.0' },
      ],
      checked1: true,
      checked2: true,
      checked3: true,
      yearMounthList: [],
      totalList: [],
      yearmounth: '',
      visible: false,
      centerList: [
        { title: '月度监测', png: png2, active: png6 },
        { title: '与去年对比', png: png1, active: png7 },
        { title: '与历史三年对比', png: png3, active: png8 },
      ],
      centerListActvie: 0,
      townValue: 'all',
      villageValue: '',
      villageList: [],
      visible1: false,
      titleList: ['权利人', '编码', '种植品种', '面积', '所属村镇', '电话号码', '操作'],
      contentList: [],
      inputValue: '',
      isshowWorn: false
    };

    this.timeInter = null;
  }

  componentDidMount() {
    this.getTimerDAta();
    this.getVillageInterface();
  }

  // 获取时间轴
  getTimerDAta = () => {
    const params = {
      current: 1,
      pageSize: 20,
      functionId: config.functionId6
    };
    Ajax('post', '/trace/dynamic/fun/list', params).then((res) => {
      if (res.state === 200) {
        const arr = res?.results?.list || [];
        const list = arr.sort((a, b) => Number(b.rq) - Number(a.rq));
        const yearMounthList = [];
        list.reverse().forEach((item, index) => {
          yearMounthList.push(item.rq);
        });
        this.setState({
          yearMounthList,
          totalList: list,
          yearmounth: list.length > 0 ? list[list.length - 1].rq : []
        });
        const dom = document.getElementById('soil-iframe').contentWindow;
        dom.setMonthList(yearMounthList);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  handleActive = (index, item) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    this.setState({
      bottomActive: index
    });
    dom.typeFilter(item);
  }

  handleDate = (val) => {
    const { checked1 } = this.state;
    const dom = document.getElementById('soil-iframe').contentWindow;
    dom.play2(val);
    this.setState({
      yearmounth: val,
    });
  }

  // 点击中间切换
  handleCenter = (index) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    this.setState({
      centerListActvie: index
    });
    switch (index) {
      case 0:
        dom.grownCheck('zigui_ndvi_');
        break;
      case 1:
        dom.grownCheck('zigui_growth_mean_');
        break;
      case 2:
        dom.grownCheck('zigui_growth_lastyear_');
        break;
      default:
        break;
    }
  }

  // 卫星图 行政图 地形图 切换
  handleMapClick = (type) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    switch (type) {
      case 0:
        dom.statelliteLayer();
        break;
      case 1:
        dom.vectorLayer();
        break;
      case 2:
        dom.terrainLayer();
        break;
      default:
        break;
    }
  }

  // 长势分析
  onChange1 = (e) => {
    const { yearmounth, yearMounthList } = this.state;
    const mounth = yearmounth.slice(4, 6);
    const dom = document.getElementById('soil-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked1: value
    });
    dom.turangshangqingClick(value, yearmounth, yearMounthList);
  }

  // 行政村
  onChange2 = (e) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked2: value
    });
    dom.villageClick(value);
  }

  // 正射影像
  onChange3 = (e) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked3: value
    });
    dom.domClick(value);
  }

  // 重置地图
  reSetMap = () => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    dom.reSetMap();
    this.setState({
      townValue: 'all',
      villageValue: '',
      villageList: [],
    });
  }

  // 关闭弹框
  handleClose = () => {
    this.setState({
      visible: false
    });
  }

  // 打开弹框
  handleShow = () => {
    this.setState({
      visible: true
    });
  }

  // 定时
  timeInterval = (val) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    if (val === 0) {
      this.timeInter = window.setInterval(() => {
        const { yearMounthList, yearmounth, checked1 } = this.state;
        for (let i = 0; i < yearMounthList.length; i++) {
          if (yearMounthList[i] === yearmounth) {
            if (i === yearMounthList.length - 1) {
              this.setState({
                yearmounth: yearMounthList[0]
              });
            } else {
              this.setState({
                yearmounth: yearMounthList[i + 1]
              });
            }
            dom.play2(yearmounth);
          }
        }
      }, 1000 * 4);
    } else if (val === 1) {
      const { yearMounthList } = this.state;
      clearInterval(this.timeInter);
      this.setState({
        yearmounth: yearMounthList[yearMounthList.length - 1]
      });
    }
  }

  townSelect = (e) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    const value = e.target.value;
    this.setState({
      townValue: value,
      villageValue: '',
    });
    // if(value === 'all') {
    //   dom.town_selectClicl(value);
    // }
    dom.town_selectClicl(value);
    this.getVillageName(value);
  }

  // 获取乡镇对应的村名
  getVillageName = (townName) => {
    const { villageListStatic } = this.state;
    const villageList = villageListStatic.filter(item => item.properties['乡名称'] === townName);
    const list = villageList.map(item => item.properties['村名称']);
    if(list.length !== 0) {
      list.unshift('全村');
    }
    this.setState({
      villageList: list,
    });
    // this.positionSelect(villageListStatic, townName, list[0]);
  }

  // 选择位置
  positionSelect = (villageListStatic, townValue, value) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    let domonj = {};
    for (let i = 0; i < villageListStatic.length; i++) {
      if (villageListStatic[i].properties['村名称'] === value) {
        domonj = villageListStatic[i];
        break;
      }
    }
    dom.locatedVillage(domonj);
  }

  // 获取全部的村名
  getVillageInterface = () => {
    let params = {
      group: 'cite',
      id: 'village',
      maxFeatures: '5000'
    };
    Ajax('get', '/hydra-code-egis/api/v1/geoserver/get-json-data', params).then((res) => {
      const features = res.features || [];
      this.setState({
        villageListStatic: features
      });
    }).catch(err => {
      console.log(err);
    });
  }

  // 选择村
  villageSelect = (e) => {
    const { villageListStatic, townValue } = this.state;
    const dom = document.getElementById('soil-iframe').contentWindow;
    const value = e.target.value;
    this.setState({
      villageValue: value
    });
    if(value === '全村') {
      const dom = document.getElementById('soil-iframe').contentWindow;
      dom.town_selectClicl(townValue);
      return;
    }
    let domonj = {};
    for (let i = 0; i < villageListStatic.length; i++) {
      if (villageListStatic[i].properties['村名称'] === value) {
        domonj = villageListStatic[i];
        break;
      }
    }
    dom.locatedVillage(domonj);
  }

  // 搜索
  handleSearch = () => {
    const { inputValue } = this.state;
    // this.getMobilePeople(inputValue);
    this.getMobilePeople1(inputValue);
  }

  // 权利人和手机号搜索
  getMobilePeople1 = (val) => {
    let params = {
      search: val
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/planting-dk-search', params).then((res) => {
      if (res.state === 200) {
        const list = res.results.features || [];
        if (list.length === 0) {
          return;
        }
        this.setState({
          contentList: list,
          visible1: true,
          inputValue: ''
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 设置输入框文字
  handleInputValue = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  }

  item1Interface = () => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/planting-hb-area', params).then((res) => {
      if (res.state === 200) {
        const results = res?.results || {};
        this.setState({
          item1Data: results
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  handleClose = () => {
    this.setState({
      visible: false
    });
  }

  handleClose1 = () => {
    this.setState({
      visible1: false
    });
  }

  // 定位
  handlevillage = (val) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    const geometry = val.geometry;
    dom.located(val);
  }

  // 打开预警
  handleOpenWorn = () => {
    const { isshowWorn } = this.state;
    const dom = document.getElementById('soil-iframe').contentWindow;
    dom.zsyj();
    this.setState({
      isshowWorn: !isshowWorn
    });
  }

  render() {
    const {
      bottomList,
      bottomActive,
      yearmounth,
      yearMounthList,
      checked1,
      checked2,
      checked3,
      centerList,
      centerListActvie,
      visible,
      townValue,
      villageValue,
      villageList,
      titleList,
      contentList,
      inputValue,
      visible1,
      isshowWorn
    } = this.state;

    const content = <div>所在地块的平均值处于较常年差区间，<br />请密切关注预警地块。</div>;

    return (
      <main className="growth-monitoring">
        <CheckLogin jmp={this.props} />
        <section className="growth-monitoring-left">

          <div className="growth-monitoring-map">
            <iframe id="soil-iframe" className="growth-monitoring-iframe" src='./public/map/growth/growth.html' frameborder="0"></iframe>
          </div>

          <div className="growth-monitoring-left-search">
            <input onChange={this.handleInputValue} value={inputValue} placeholder="按权利人/手机号搜索" className="growth-monitoring-left-search-input" type="text" />
            <span onClick={this.handleSearch} className="growth-monitoring-left-search-button">搜索</span>
          </div>

          {centerListActvie === 0 ? <div className="growth-monitoring-left-pic2"></div> : ''}
          {centerListActvie === 1 ? <div className="growth-monitoring-left-pic8"></div> : ''}
          {centerListActvie === 2 ? <div className="growth-monitoring-left-pic10"></div> : ''}

          <div className="growth-monitoring-left-pic4">
            <div><Checkbox checked={checked1} onChange={this.onChange1}>长势分析</Checkbox></div>
            <div><Checkbox checked={checked2} onChange={this.onChange2}>行政区划</Checkbox></div>
            <div><Checkbox checked={checked3} onChange={this.onChange3}>正射影像</Checkbox></div>
          </div>

          <div className="growth-monitoring-left-pic1">
            {
              bottomList.map((item, index) => {
                return (
                  <div onClick={() => this.handleActive(index, item)} className={bottomActive === index ? 'oil-moisture-left-pic4-item oil-moisture-left-pic4-item-active' : 'oil-moisture-left-pic4-item'}>{item}</div>
                );
              })
            }
          </div>

          <div className="growth-monitoring-left-pic3">
            <DateSwiper timeInterval={this.timeInterval} yearmounth={yearmounth} handleDate={this.handleDate} yearMounthList={yearMounthList} />
          </div>

          <div className="growth-monitoring-left-pic5">
            {
              centerList.map((item, index) => {
                return (
                  <div onClick={() => this.handleCenter(index)} className="growth-monitoring-left-pic5-item">
                    <div className={centerListActvie === index ? 'growth-monitoring-left-pic5-item-bg growth-monitoring-left-pic5-item-bg-hover' : 'growth-monitoring-left-pic5-item-bg'}>
                      <img src={centerListActvie === index ? item.active : item.png} alt="" />
                    </div>
                    <div className={centerListActvie === index ? 'growth-monitoring-left-pic5-item-title growth-monitoring-left-pic5-item-title-active' : 'growth-monitoring-left-pic5-item-title'}>{item.title}</div>
                  </div>
                );
              })
            }
          </div>

          <div onClick={this.handleShow} className="growth-monitoring-left-pic6">
            <img src={png4} alt="" />
            <span>模型详情</span>
          </div>

          <div onClick={this.reSetMap} className="growth-monitoring-left-pic7">
            <img src={png5} alt="" />
            <span>重置地图</span>
          </div>

          <div className="growth-monitoring-left-pic9">
            <select onChange={this.townSelect} value={townValue} className="item2-select1" name="" id="">
              <option value="all">全县</option>
              <option value="水田坝乡">水田坝乡</option>
              <option value="屈原镇">屈原镇</option>
              <option value="归州镇">归州镇</option>
              <option value="郭家坝镇">郭家坝镇</option>
              <option value="九畹溪镇">九畹溪镇</option>
              <option value="茅坪镇">茅坪镇</option>
              <option value="杨林桥镇">杨林桥镇</option>
              <option value="梅家河乡">梅家河乡</option>
              <option value="磨坪乡">磨坪乡</option>
              <option value="两河口镇">两河口镇</option>
              <option value="沙镇溪镇">沙镇溪镇</option>
              <option value="泄滩乡">泄滩乡</option>
            </select>
          </div>

          <div className="growth-monitoring-left-pic11">
            <select onChange={this.villageSelect} value={villageValue} className="item2-select1" name="" id="">
              {
                villageList.map((item, index) => {
                  return (
                    <option value={item}>{item}</option>
                  );
                })
              }
            </select>
          </div>

          {centerListActvie === 2 ? <div onClick={this.handleOpenWorn} className="growth-monitoring-left-pic12">
            <div>长势预警</div>
            <div><img src={png9} alt="" /></div>
            {
              isshowWorn ?
                <div className="growth-monitoring-left-pic12-model">
                  <div className="growth-monitoring-left-pic12-model-title">预警说明</div>
                  <div className="growth-monitoring-left-pic12-model-value">所在地块的平均值处于较常年差区间，请密切关注预警地块。</div>
                </div> : ''
            }

            {/* <Popover content={content} title="预警说明">
              <div>预警</div>
            </Popover> */}
          </div> : ''}

        </section>
        <section className="growth-monitoring-right">
          <div className="growth-monitoring-right-item1"><MapItem handleMapClick={this.handleMapClick} /></div>
          <div className="growth-monitoring-right-item2"><Item1 /></div>
          <div className="growth-monitoring-right-item3"><Item2 handleDate={this.handleDate} yearMounthList={yearMounthList} yearmounth={yearmounth} /></div>
        </section>

        {visible ? <ModalDetal handleClose={this.handleClose} /> : ''}

        {
          visible1 ?
            <SearchModel handlevillage={this.handlevillage} handleClose={this.handleClose1} titleList={titleList} contentList={contentList} />
            : ''
        }
      </main >
    );
  }
}
