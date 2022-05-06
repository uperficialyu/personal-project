import React, { Component } from 'react';
import Header from 'components/Header/Header';
import Item1 from './component/Item1';
import Item2 from './component/Item2';
import Item3 from './component/Item3';
import Item4 from './component/Item4';
import Ajax from 'lib/ajax';
import api from 'api/api';
import png from 'style/images/home/home6.png';
import png1 from 'style/images/home/home7.png';
import './PropagationPath.scss';

export default class PropagationPath extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      telescopic: false,
      type: true,
      activeIndex: 0,
      obj: {},
      seconds: 10
    };

    this.timeInterval = null;
  }

  componentDidMount() {
    this.getNewsList();
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  // 获取新闻列表
  getNewsList = () => {
    const params = {
      topicName: '安吉白茶'
    }
    Ajax('get', api.home.newsList, params).then((res) => {
      if (res.state === 200) {
        const list = res.results.list || [];
        this.setState({
          newsList: list
        });
        this.intervalData(list);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  intervalData = (list) => {
    const { seconds, activeIndex } = this.state;
    const length = list.length;
    if(length !== 0) {
      const obj = list[activeIndex];
      this.setState({
        obj
      });
      this.timeInterval = window.setInterval(() => {
        const { activeIndex } = this.state;
        let ix = activeIndex + 1;
        if(ix === length) {
          ix = 0;
        }
        const obj = list[ix];
        this.setState({
          activeIndex: ix,
          obj
        })
      }, 1000 * seconds)
    }
  }

  // 伸缩
  handleTelescopic = () => {
    const { telescopic } = this.state;
    this.setState({
      telescopic: !telescopic
    });
  }

  // 底部切换
  handleTime = (state) => {
    const { type, newsList, activeIndex } = this.state;
    const length = newsList.length;
    switch (state) {
      case 'startEnd':
        this.setState({
          type: !type
        });
        if(type) {
          clearInterval(this.timeInterval);
        } else {
          this.intervalData(newsList)
        }
        break;
      case 'left':
        if(length !== 0) {
          let ix = activeIndex;
          if(activeIndex === 0) {
            ix = length - 1;
          } else {
            ix--
          }
          const obj = newsList[ix];
          this.setState({
            activeIndex: ix,
            obj
          });
        }
        break;
      case 'right':
        if(length !== 0) {
          let ix = activeIndex + 1;
          if(ix === length) {
            ix = 0;
          }
          const obj = newsList[ix];
          this.setState({
            activeIndex: ix,
            obj
          });
        }
        break;
      default:
        break;
    }
  }

  render() {
    const {
      newsList,
      telescopic,
      type,
      obj,
      activeIndex
    } = this.state;

    return (
      <main className='propagation-path'>
        <div><Header active={5} /></div>
        <section className='propagation-path-content'>
          <div className='propagation-path-content-left'>
            {telescopic ? <Item1 activeIndex={activeIndex} newsList={newsList} /> : ''}
            {<img onClick={this.handleTelescopic} className='propagation-path-content-left-tab' src={telescopic ? png : png1} alt="" />}
          </div>
          <div className='propagation-path-content-right'>
            <div className='propagation-path-content-right-left'><Item2 obj={obj} /></div>
            <div className='propagation-path-content-right-right'><Item4 obj={obj} /></div>
          </div>
        </section>
        <div><Item3 type={type} handleTime={this.handleTime} /></div>
      </main>
    )
  }
}
