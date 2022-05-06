/* @Description 投入品
 * @Author: yushunping 
 * @Date: 2021-10-18 11:14:37 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-12-09 19:58:03
 */

import React, { Component } from 'react';
import CountTo from 'react-count-to';
import Ajax from 'lib/ajax';
import { message } from 'antd';
import config from '../../config/environment';
import './Input.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      datano: 0,
    };
  }

  componentDidMount() {
    this.interfacemap();
  }

  interfacemap = () => {
    let params = {
      'functionId': '6af7a614cd4d461bb06be93835bd16eb',
      'latitude': 'lat',
      'longitude': 'lng',
    };
    Ajax('post', '/hydra-trace-individual-micro/api/v1/gis/one', params).then((res) => {
      if (res.state === 200) {
        const data = res.results.features || [];
        const length = data.length;
        const dom = document.getElementById('input-iframe').contentWindow;
        dom.postMessage(
          { 
            data, 
            type: 'input'
          },
          '*'
        );
        this.setState({
          datano: length
        });
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // componentWillUnmount() {
  //   window.removeEventListener('message', this.getMessage);
  // }

  // getMessage = (eve) => {
  //   const postData = eve.data;
  //   if(postData.arableLand === 'inputparent') {
  //     const data = postData.data.features;
  //     const properties = data[0].properties || {};
  //     this.setState({
  //       modalData: properties,
  //       modalVisible: true
  //     });
  //   }
  // };

  render() {
    const {
      datano
    } = this.state;
    return (
      <div className="input">
        <div className="input-center">
          <div className="input-center-title">农资主体入网数</div>
          <div className="input-center-number"><CountTo to={datano} speed={datano} />
          </div>

        </div>
        <div className="input-map">
          <iframe id="input-iframe" className="input-iframe" src='./public/map/inputs/inputs.html' frameborder="0"></iframe>
        </div>
      </div>
    );
  }
}
