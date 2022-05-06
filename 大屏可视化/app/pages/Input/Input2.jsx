import React, { Component } from 'react';
import Item1 from './component/Item1';
import Item2 from './component/Item2';
import Item3 from './component/Item3';
import Item4 from './component/Item4';
import Item5 from './component/Item5';
import Center from './component/Center';
import CheckLogin from 'components/CheckLogin/CheckLogin';
import Ajax from 'lib/ajax';
import config from '../../config/environment';
import './Input2.scss';

export default class Input2 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.interfacemap();
  }

  interfacemap = () => {
    let params = {
      // 'functionId': config.functionId, //'6af7a614cd4d461bb06be93835bd16eb',
      // 'functionId': 'a48ac3a91dc8461d801443b50302a829',
      'functionId': '6af7a614cd4d461bb06be93835bd16eb',
      'latitude': 'lat',
      'longitude': 'lng',
    };
    Ajax('post', '/hydra-trace-individual-micro/api/v1/gis/one', params).then((res) => {
      if (res.state === 200) {
        const data = res.results.features || [];
        // const length = data.length;
        const dom = document.getElementById('input-iframe').contentWindow;
        setTimeout(()=>{
          dom.postMessage(
            { 
              data, 
              type: 'input'
            },
            '*'
          );
        },300)
   
        // this.setState({
        //   datano: length
        // });
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="input2">
        <CheckLogin jmp={this.props} />
        <section className="input2-left">
          <div className="input2-left-item1"><Item1 /></div>
          <div className="input2-left-item2"><Item2 /></div>
        </section>
        <section className="input2-center"><Center /></section>
        <section className="input2-right">
          <div className="input2-right-item1"><Item3 /></div>
          <div className="input2-right-item2"><Item4 /></div>
          <div className="input2-right-item3"><Item5 /></div>
        </section>
      </div>
    );
  }
}
