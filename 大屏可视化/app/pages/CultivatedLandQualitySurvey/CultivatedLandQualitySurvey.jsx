/* @Description 耕地质量调查点位
 * @Author: yushunping 
 * @Date: 2021-09-23 10:09:20 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-12-28 21:26:41
*/


import React, { Component } from 'react';
import MapItem2 from 'components/MapItem2/MapItem2';
import MapModal from './component/mapModal/MapModal';
import ModalDetal from 'components/ModalDetal/ModalDetal';
import Ajax from 'lib/ajax';
import { Checkbox } from 'antd';
import png1 from 'style/images/SoilMoisture/1.png';
import png2 from 'style/images/SoilMoisture/2.png';

//  import './Home.scss';
class CultivatedLandQualitySurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: true,
      checked2: true,
      checked3: true,
      townValue: 'all',
      modalData: {},
      modalVisible: false,
      visible: false,
      villageValue: '',
      villageList: [],
      villageListStatic: [],
    };
  }

  handleActive = (index) => {
    this.setState({
     bottomActive: index
    });
  }

  handleMapClick = (type) => {
    const dom = document.getElementById('home-iframe').contentWindow;
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
    const dom = document.getElementById('home-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked1: value
    });
    dom.cultivated_land_pointsClick(value);
  }

  onChange2 = (e) => {
    const dom = document.getElementById('home-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked2: value
    });
    dom.villageClick(value);
  }

  onChange3 = (e) => {
    const dom = document.getElementById('home-iframe').contentWindow;
    const value = e.target.checked;
    this.setState({
      checked3: value
    });
    dom.domClick(value);
  }

  townSelect = (e) => {
    const dom = document.getElementById('home-iframe').contentWindow;
    const value = e.target.value;
    this.setState({
      townValue: value,
      villageValue: '',
    });
    // if (value === 'all') {
    //   dom.town_selectClicl(value);
    // }
    this.getVillageName(value);
    dom.town_selectClicl(value);
  }

  componentDidMount() {
    this.getVillageInterface();
    window.addEventListener('message', this.getMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.getMessage);
  }

  getMessage = (eve) => {
    const postData = eve.data;
    if(postData.arableLand === 'arableLand3') {
      const data = postData.data.properties;
      this.setState({
        modalData: data,
        modalVisible: true
      });
    }
  };

  handleClose = () => {
    this.setState({
      modalVisible: false
    });
  }

  handleCloseDetail = () => {
    this.setState({
      visible: false
    });
  }

  handleShow = () => {
    this.setState({
      visible: true
    });
  }

  // 重置地图
  reSetMap = () => {
    const dom = document.getElementById('home-iframe').contentWindow;
    dom.reSetMap();
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
      const dom = document.getElementById('home-iframe').contentWindow;
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
      const dom = document.getElementById('home-iframe').contentWindow;
      const value = e.target.value;
      this.setState({
        villageValue: value
      });
      if(value === '全村') {
        const dom = document.getElementById('home-iframe').contentWindow;
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

  render() {
    const {
      checked1,
      checked2,
      checked3,
      townValue,
      modalData,
      modalVisible,
      visible,
      villageList,
      villageValue
    } = this.state;

    return (
      <React.Fragment>
        <main className="home-page">
          <div className="home-content">
            <div className="home-left">
              <div className="home-map">
                <iframe id="home-iframe" className="home-iframe" src='./public/map/arableLand/land3.html' frameborder="0"></iframe>
              </div>

              {/* <div className="home-left-search">
                <input placeholder="按权利人/手机号搜索" className="home-left-search-input" type="text"/>
                <span className="home-left-search-button">搜索</span>
              </div> */}

              <div className="home-left-map">
                <div><Checkbox checked={checked1} onChange={this.onChange1}>耕地质量调查点位</Checkbox></div>
                <div><Checkbox checked={checked2} onChange={this.onChange2}>行政乡镇、村边界</Checkbox></div>
                <div><Checkbox checked={checked3} onChange={this.onChange3}>正射影像</Checkbox></div>
              </div>

              <div className="home-left-item5">
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

              <div className="home-left-left-item6">
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
              
              {/* <div onClick={this.handleShow} className="home-left-item2">
                <img src={png1} alt=""/>
                <span>模型详情</span>
              </div> */}
              <div onClick={this.reSetMap} className="home-left-item2">
                <img src={png2} alt=""/>
                <span>重置地图</span>
              </div>
            </div>
            <div className="home-right">
              <div className="home-right-item1">
                <MapItem2 handleMapClick={this.handleMapClick} />
              </div>
            </div>
          </div>

          { modalVisible ? <MapModal handleClose={this.handleClose} modalData={modalData} /> : '' }

          { visible ? <ModalDetal handleClose={this.handleCloseDetail} /> : '' }
          
        </main>
      </React.Fragment>
    );
  }
}

export default CultivatedLandQualitySurvey;
