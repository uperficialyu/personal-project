/* @Description 物联网数据
 * @Author: yushunping 
 * @Date: 2021-10-18 11:14:37 
 * @Last Modified by: yushunping
 * @Last Modified time: 2022-03-08 14:52:37
 */

import React, { Component } from 'react';
import Item1 from './component/item1';
import Item2 from './component/item2';
import Item3 from './component/item3';
import Item4 from './component/item4';
import Center from './component/center';
import CheckLogin from 'components/CheckLogin/CheckLogin';
import Ajax from 'lib/ajax';
import config from '../../config/environment';
import './InternetOfThings.scss';


export default class InternetOfThings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iotData: [],
      isShowMonitor: false,
      isShowSensor: false,
      iotDataNo: 0,
      isShowMonitorSensor: false,
      monitorNo: 0,
      videourl: 'http://plat.nongtt.com/VideoPlayer/chrome_ctrol_Api.html?h=0&u=835524701|2&vq=sd',
      isShowIframe: true,
      monitorList: [], // 监控列表
      properties: {},
    };
  }

  componentDidMount() {
    this.interfaceIotData();
    this.interfaceIotlotLng();
    this.getSensorInterface();
    setTimeout(() => {
      this.interfaceMonitor();
    }, 200);
    window.addEventListener('message', this.getMessage);
  }

  // 右侧传感器数据
  interfaceIotData = (data) => {
    let params = {
      fieldName: data || '烟灯堡1#柜',
      token: config.token,
      functionId: config.functionId,
    }; 
    // Ajax('get', '/hydra-trace-individual-micro/api/v1/zg/getSensorInfo', params).then((res) => {
    Ajax('get', '/hydra-trace-individual-micro/api/v1/zg/sensor-info/height', params).then((res) => { 
      if (res.state === 200) {
        const data = res.results || [];
        this.setState({
          iotData: data,
        });
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 监控经纬度
  interfaceIotlotLng = () => {
    let params = {
      baseNameField: 'dkmc',
      // token: 'ab91016bcb37878e06c16e9e68f',
      functionId: config.functionId,
      latitude: 'jd',
      longitude: 'wd',
    };
    Ajax('get', '/hydra-trace-individual-micro/api/v1/zg/list', params).then((res) => {
      if (res.state === 200) {
        const data = res.results.features || [];
        const dom = document.getElementById('internetOfThings-iframe').contentWindow;
        dom.postMessage(
          { 
            data, 
            type: 'sensor'
          },
          '*'
        );
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 监控
  interfaceMonitor = () => {
    let params = {
      'areaFunctionId': config.areaFunctionId,
      'areaJoinField': 'dkmc',
      'funJoinField': 'jd_name',
      'functionId': 'b1224b0b909c4e98a4c0fdcb6a893e9e',
      'latitude': 'wd',
      'longitude': 'jd'
    };
    Ajax('post', '/hydra-trace-individual-micro/api/v1/gis/match', params).then((res) => {
      if (res.state === 200) {
        const data = res.results.features || [];
        const dom = document.getElementById('internetOfThings-iframe').contentWindow;
        this.setState({
          monitorNo: data.length,
          monitorList: data,
          properties: data.length > 0 ? data[0].properties : {},
          videourl: data.length > 0 ? data[0].properties.url_station : ''
        });
        dom.postMessage(
          { 
            data, 
            type: 'minitor'
          },
          '*'
        );
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // iot切换显示隐藏
  handleIot = (type) => {
    const { isShowMonitor, isShowSensor, isShowMonitorSensor } = this.state;
    const dom = document.getElementById('internetOfThings-iframe').contentWindow;
    this.setState({
      isShowMonitorSensor: !isShowMonitorSensor
    });
    if(isShowMonitorSensor) {
      dom.showSensor();
    } else {
      dom.showMintor();
    }

    // if(type === 'monitor') {
    //   this.setState({
    //     isShowMonitor: !isShowMonitor,
    //     isShowMonitorSensor: !isShowMonitorSensor
    //   });
    //   dom.showMintor(!isShowMonitor);
    // } else if (type === 'sensor') {
    //   this.setState({
    //     isShowSensor: !isShowSensor,
    //     isShowMonitorSensor: !isShowMonitorSensor
    //   });
    //   dom.showSensor(!isShowSensor);
    // }
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.getMessage);
  }

  getMessage = (eve) => {
    const postData = eve.data;
    const data = postData.data;
    if(data.id === 'monitor') {
      const videourl = data.properties.url_station;
      this.setState({
        isShowIframe: false
      }, () => {
        this.setState({
          videourl,
          isShowIframe: true,
          properties: data.properties
        });
      });
    } else if(data.id === 'sensor') {
      const name = data.properties.dkmc;
      this.interfaceIotData(name);
    }
    // if(postData.arableLand === 'inputparent') {
    //   const data = postData.data.features;
    //   const properties = data[0].properties || {};
    //   this.setState({
    //     modalData: properties,
    //     modalVisible: true
    //   });
    // }
  };

  handleShowIframe = (url) => {
    this.setState({
      isShowIframe: false
    }, () => {
      this.setState({
        isShowIframe: true,
        videourl: url
      });
    });
  }

  getSensorInterface = () => {
    let params = {
      functionId: config.functionId,
    }; 
    // Ajax('get', '/hydra-trace-individual-micro/api/v1/zg/getSensorInfo', params).then((res) => {
    Ajax('get', '/hydra-trace-individual-micro/api/v1/zg/sum/sensor', params).then((res) => { 
      if (res.state === 200) {
        const iotDataNo = res.results || 0;
        this.setState({
          iotDataNo,
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
      iotData,
      isShowMonitor,
      isShowSensor,
      iotDataNo,
      isShowMonitorSensor,
      videourl,
      monitorNo,
      isShowIframe,
      monitorList,
      properties
    } = this.state;

    return (
      <div className="internetOfThings">
        <CheckLogin jmp={this.props} />
        <div className="internetOfThings-left">
          <div className="internetOfThings-left-item1"><Item1 isShowMonitorSensor={isShowMonitorSensor} monitorNo={monitorNo} iotDataNo={iotDataNo} isShowMonitor={isShowMonitor} isShowSensor={isShowSensor} /></div>
          <div className="internetOfThings-left-item2"><Item2 handleShowIframe={this.handleShowIframe} properties={properties} monitorList={monitorList} isShowIframe={isShowIframe} videourl={videourl} /></div>
          <div className="internetOfThings-left-item3"><Item3 /></div>
        </div>
        <div className="internetOfThings-center">
          <div className="internetOfThings-center-bottom"><Center isShowMonitorSensor={isShowMonitorSensor} isShowMonitor={isShowMonitor} isShowSensor={isShowSensor} handleIot={this.handleIot} /></div>
        </div>
        <div className="internetOfThings-right">
          <div className="internetOfThings-right-item4"><Item4 iotData={iotData}/></div>
        </div>
        <div className="internetOfThings-map">
          <iframe id="internetOfThings-iframe" className="internetOfThings-iframe" src='./public/map/monitorAndSensors/monitorAndSensors.html' frameborder="0"></iframe>
        </div>
      </div>
    );
  }
}
