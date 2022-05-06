/* @Description 海拔分布
 * @Author: yushunping 
 * @Date: 2021-10-15 14:59:42 
 * @Last Modified by: yushunping
 * @Last Modified time: 2022-01-09 16:08:15
*/

import React, { Component } from 'react';
import MapItem from 'components/MapItem2/MapItem2';
import SearchAndTown from 'components/SearchAndTown/SearchAndTown';
import Item1 from './component/Item1';
import Item2 from './component/Item2';
import { Checkbox, message } from 'antd';
import obj from '../../config/static';
import Ajax from 'lib/ajax';
import './AltitudeDistributed.scss';

export default class AltitudeDistributed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: true,
      checked2: true,
      checked3: false,
      checked4: true,
      checked5: true,
      bottomList: obj.orangeType,
      bottomActive: 0,
      mapExample: [
        {color: '#bb8158', text: '>1500m'},
        {color: '#d5d3ba', text: '600m-1500m'},
        {color: '#b8f083', text: '500m-600m'},
        {color: '#7ed459', text: '350m-500m'},
        {color: '#5ebc44', text: '0m-350m'},
        {color: '#45a3fe', text: '水域'},
      ],
      typeName: '全部',
      item1Data: [],
    };
  }

  componentDidMount() {
    this.item1Interface();
  }

  handleMapClick = (type) => {
    const dom = document.getElementById('altitude-iframe').contentWindow;
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

  onChange1 = (e) => {
    const dom = document.getElementById('altitude-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked1: value
    });
    dom.groundblock(value);
  }

  // 行政村
  onChange2 = (e) => {
    const dom = document.getElementById('altitude-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked2: value
    });
    dom.villageClick(value);
  }

  // 海拔图
  onChange3 = (e) => {
    const dom = document.getElementById('altitude-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked3: value
    });
    dom.elevationClick(value);
  }

  // 高程图层
  onChange4 = (e) => {
    const dom = document.getElementById('altitude-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked4: value
    });
    dom.demLayerClick(value);
  }

  // 正射影像
  onChange5 = (e) => {
    const dom = document.getElementById('altitude-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked5: value
    });
    dom.domClick(value);
  }

  handleActive = (index, item) => {
    const dom = document.getElementById('altitude-iframe').contentWindow;
    this.setState({
     bottomActive: index,
     typeName: item
    });
    dom.typeFilter(item);
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

  item1Interface = () => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/planting-hb-area', params).then((res) => {
      if(res.state === 200) {
        const results = res?.results || {};
        this.setState({
          item1Data: results
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
      checked4,
      checked5,
      bottomList,
      bottomActive,
      mapExample,
      typeName,
      item1Data,
    } = this.state;

    return (
      <div className="altitude-distributed">
        <div className="plant-distributed-left">
          <div className="altitude-map">
            <iframe id="altitude-iframe" className="altitude-iframe" src='./public/map/plantSort/plantSort2.html' frameborder="0"></iframe>
          </div>

          <div className="plant-distributed-left-searchAndTown">
            <SearchAndTown id='altitude-iframe' />
          </div>

          <div className="altitude-distributed-left-item1">
            <div className="altitude-distributed-left-item1-div1">图例</div>
            {
              mapExample.map(item => {
                return (
                  <div className="altitude-distributed-left-item1-div3">
                    <div style={{background: item.color}} className="altitude-distributed-left-item1-div3-left"></div>
                    <div className="altitude-distributed-left-item1-div3-right">{item.text}</div>
                  </div>
                );
              })
            }
          </div>

          <div className="altitude-distributed-left-map">
            <div><Checkbox checked={checked1} onChange={this.onChange1}>地块</Checkbox></div>
            <div><Checkbox checked={checked2} onChange={this.onChange2}>行政区划</Checkbox></div>
            <div><Checkbox checked={checked3} onChange={this.onChange3}>海拔图</Checkbox></div>
            <div><Checkbox checked={checked4} onChange={this.onChange4}>等高线</Checkbox></div>
            <div><Checkbox checked={checked5} onChange={this.onChange5}>正射影像</Checkbox></div>
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

        </div>

        <div className="plant-distributed-right">
          <div className="plant-distributed-item1"><MapItem handleMapClick={this.handleMapClick} /></div>
          <div className="plant-distributed-item2"><Item1 item1Data={item1Data} typeName={typeName} /></div>
          <div className="plant-distributed-item3"><Item2 /></div>
        </div>

      </div>
    )
  }
}
