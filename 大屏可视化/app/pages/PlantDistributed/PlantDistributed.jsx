/* @Description 种植分布
 * @Author: yushunping 
 * @Date: 2021-10-15 14:59:42 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-12-28 20:58:34
*/

import React, { Component } from 'react';
import MapItem from 'components/MapItem2/MapItem2';
import Item1 from './component/Item1';
import Item2 from './component/Item2';
import SearchModel from './component/searchModal';
import { Checkbox, message } from 'antd';
import obj from '../../config/static';
import Ajax from 'lib/ajax';

import png1 from 'style/images/plantDistributed/plantDistributed1.png';
import png2 from 'style/images/plantDistributed/plantDistributed2.png';
import png3 from 'style/images/plantDistributed/plantDistributed3.png';
import png4 from 'style/images/SoilMoisture/2.png';
import './PlantDistributed.scss';

export default class PlantDistributed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: true,
      checked2: true,
      checked3: true,
      bottomList: obj.orangeType,
      bottomActive: 0,
      townValue: 'all',
      inputValue: '',
      list: [
        { png: png1, title: '种植面积(万亩）', value: 5635 },
        { png: png2, title: '地块数(块）', value: 5635 },
        { png: png3, title: '农户数(户)', value: 5635 },
      ],
      visible: false,
      titleList: ['权利人', '编码', '种植品种', '面积', '所属村镇', '电话号码', '操作'],
      contentList: [],
      villageValue: '',
      villageList: [],
      villageListStatic: [],
      sumarea: 0,
      item1List: []
    };
  }

  // 设置品种
  handleActive = (index, item) => {
    const dom = document.getElementById('aspect-iframe').contentWindow;
    this.setState({
      bottomActive: index
    });
    dom.typeFilter(item);
  }

  // 地块
  onChange1 = (e) => {
    const dom = document.getElementById('aspect-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked1: value
    });
    dom.groundblock(value);
  }

  // 行政村
  onChange2 = (e) => {
    const dom = document.getElementById('aspect-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked2: value
    });
    dom.villageClick(value);
  }

  // 正射影像
  onChange3 = (e) => {
    const dom = document.getElementById('aspect-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked3: value
    });
    dom.domClick(value);
  }

  // 重置
  reSetMap = () => {
    const dom = document.getElementById('aspect-iframe').contentWindow;
    dom.reSetMap();
    this.setState({
      townValue: 'all',
      villageValue: '',
      villageList: [],
    });
  }

  // 选择镇
  townSelect = (e) => {
    const dom = document.getElementById('aspect-iframe').contentWindow;
    const value = e.target.value;
    this.setState({
      townValue: value,
      villageValue: '',
    });
    this.getAreaInterface(value);
    dom.town_selectClicl(value);
    this.getVillageName(value);

    // if(value === 'all') {
    //   dom.town_selectClicl(value);
    //   this.getAreaInterface(value);
    //   this.setState({
    //     villageList: [],
    //   });
    //   return;
    // }
    // this.getVillageName(value);
    // this.getAreaInterface(value);
  }

  handleMapClick = (type) => {
    const dom = document.getElementById('aspect-iframe').contentWindow;
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

  // 设置输入框文字
  handleInputValue = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  }

  // 判断是否是数字
  isNumber = (val) => {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
    // this.getTownList(13669073711);
    this.getVillageInterface();
    this.getAreaInterface();
  }

  // 权利人和手机号搜索
  getMobilePeople = (val) => {
    let filte = '';
    if (!this.isNumber(val)) {
      filte = 'jyqqlr =\'' + val + '\'';
    } else {
      filte = 'sjh =\'' + val + '\'';
    }

    let params = {
      filter: filte,
      group: 'cite',
      id: 't_zigui_plant',
      maxFeatures: '5000'
    };
    Ajax('get', '/hydra-code-egis/api/v1/geoserver/get-json-data', params).then((res) => {
      const list = res.features || [];
      if (list.length === 0) {
        return;
      }
      this.setState({
        contentList: list,
        visible: true,
        inputValue: ''
      });
    }).catch(err => {
      console.log(err);
    });
  }

  // 权利人和手机号搜索
  getMobilePeople1 = (val) => {
    let params = {
      search: val
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/planting-dk-search', params).then((res) => {
      if(res.state === 200) {
        const list = res.results.features || [];
        if (list.length === 0) {
          return;
        }
        this.setState({
          contentList: list,
          visible: true,
          inputValue: ''
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 搜索
  handleSearch = () => {
    const { inputValue } = this.state;
    // this.getMobilePeople(inputValue);
    this.getMobilePeople1(inputValue);
  }

  handleClose = () => {
    this.setState({
      visible: false
    });
  }

  // 获取全部的村名 废弃
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

  // 获取全部的村名
  // getVillageInterface = () => {
  //   let params = {};
  //   Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/vector-data', params).then((res) => {
  //     if(res.state === 200) {
  //       const features = res?.results?.features || [];
  //       this.setState({
  //       villageListStatic: features
  //     });
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }

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

  // 选择村
  villageSelect = (e) => {
    const { villageListStatic, townValue } = this.state;
    const value = e.target.value;
    this.setState({
      villageValue: value
    });
    if(value === '全村') {
      const dom = document.getElementById('aspect-iframe').contentWindow;
      dom.town_selectClicl(townValue);
      return;
    }
    this.positionSelect(villageListStatic, townValue, value);
  }

  // 选择位置
  positionSelect = (villageListStatic, townValue, value) => {
    const dom = document.getElementById('aspect-iframe').contentWindow;
    let domonj = {};
    for(let i = 0; i < villageListStatic.length; i++) {
      if(villageListStatic[i].properties['村名称'] === value) {
        domonj = villageListStatic[i];
        break;
      }
    }
    dom.locatedVillage(domonj);
    this.getAreaInterface(townValue, value);
  }

  // 定位
  handlevillage = (val) => {
    const dom = document.getElementById('aspect-iframe').contentWindow;
    const geometry = val.geometry;
    dom.located(val);
  }

  // 统计面积
  getAreaInterface = (name1 = '', name2 = '') => {
    if(name1 === 'all') {
      name1 = '';
      name2 = '';
    }
    let params = {
      SSXZJDMC: name1,
      SSXZCMC: name2
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/planting-overview', params).then((res) => {
      if(res.state === 200) {
        const { results } = res;
        const list = [
          { png: png1, title: '种植面积(万亩）', value: results.ZZMJ || 0 },
          { png: png2, title: '地块数(块)', value: results.DKS || 0 },
          { png: png3, title: '农户数(户)', value: results.NHS || 0 },
        ];
        this.setState({
          list
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const {
      checked1,
      checked2,
      checked3,
      bottomList,
      bottomActive,
      townValue,
      inputValue,
      list,
      visible,
      titleList,
      contentList,
      villageList,
      villageValue,
      item1List,
    } = this.state;

    return (
      <div className="plant-distributed">
        <div className="plant-distributed-left">
          <div className="aspect-map">
            <iframe id="aspect-iframe" className="aspect-iframe" src='./public/map/plantSort/plantSort1.html' frameborder="0"></iframe>
          </div>

          <div className="plant-distributed-left-search">
            <input onChange={this.handleInputValue} placeholder="按权利人/手机号搜索" value={inputValue} className="plant-distributed-left-search-input" type="text" />
            <span onClick={this.handleSearch} className="plant-distributed-left-search-button">搜索</span>
          </div>

          <div className="plant-distributed-left-map">
            <div><Checkbox checked={checked1} onChange={this.onChange1}>地块</Checkbox></div>
            <div><Checkbox checked={checked2} onChange={this.onChange2}>行政区划</Checkbox></div>
            <div><Checkbox checked={checked3} onChange={this.onChange3}>正射影像</Checkbox></div>
          </div>

          <div className="plant-distributed-left-pic2">
            {
              bottomList.map((item, index) => {
                return (
                  <div onClick={() => this.handleActive(index, item)} className={bottomActive === index ? 'plant-distributed-left-pic4-item plant-distributed-left-pic4-item-active' : 'plant-distributed-left-pic4-item'}>{item}</div>
                );
              })
            }
          </div>

          <div className="plant-distributed-left-pic3">
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

          <div className="plant-distributed-left-pic4">
            {
              list.map((item, index) => {
                return (
                  <div>
                    <div style={{ background: `url(${item.png})` }} className="plant-distributed-left-pic4-png">
                      <div className="plant-distributed-left-pic4-value">{item.value}</div>
                    </div>
                    <div className="plant-distributed-left-pic4-title">{item.title}</div>
                  </div>
                );
              })
            }
          </div>

          <div className="plant-distributed-left-pic5">
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

          <div onClick={this.reSetMap} className="plant-distributed-left-pic6">
              <img src={png4} alt="" />
              <span>重置地图</span>
            </div>

        </div>

        <div className="plant-distributed-right">
          <div className="plant-distributed-item1"><MapItem handleMapClick={this.handleMapClick} /></div>
          <div className="plant-distributed-item2"><Item1 item1List={item1List} /></div>
          <div className="plant-distributed-item3"><Item2 /></div>
        </div>

        {
          visible ?
            <SearchModel handlevillage={this.handlevillage} handleClose={this.handleClose} titleList={titleList} contentList={contentList} />
            : ''
        }
      </div>
    );
  }
}
