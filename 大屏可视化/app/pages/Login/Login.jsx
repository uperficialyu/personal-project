/*
 * @Author: yushunping 
 * @Date: 2021-07-13 14:01:07 
 * @Last Modified by: yushunping
 * @Last Modified time: 2022-04-20 15:28:39
*/

import React, { Component, Fragment } from 'react';
import { Input, Form, Button, Select, message } from 'antd';
import { sessionSet, sessionGet } from 'lib/storage';
// import Container from 'components/Container/Container';
// import Header from '../../components/Header/Header';
// import Ajax from 'lib/ajax';
// import config from '../../config/environment';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import md5 from 'lib/md5';
import Ajax from 'lib/ajax';
import api from 'api/api';
import login2 from 'style/images/login/login2.png';
import login3 from 'style/images/login/login3.png';

import './Login.scss';

// const { Option } = Select;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '13000000001',
      password: 'Jgw@000001',
      systemData: {},
    }
  }

  handleFormChange1 = (e) => {
    const value = e.target.value;
    this.setState({
      username: value
    });
  }
  handleFormChange2 = (e) => {
    const value = e.target.value;
    this.setState({
      password: value
    });
  }

  componentDidMount() {
    this.getLoginInforInterface();
  }

  getLoginInforInterface = () => {
    const params = {
    }
    Ajax('get', api.login.getSystemInfor, params).then((res)=> {
      if(res.state === 200) {
        this.setState({
          systemData: res.results
        })
      } else {
        message.error(res.msg);
      }
    }).catch(err=> {
      console.log(err);
    });
  }

  handleLoginClick = () => {
    const { username, password, systemData } = this.state;
    const { sysId } = systemData;
    const params = {
      account: username,
      password: md5(password),
      sysId,
    }
    Ajax('post', api.login.login, params).then((res)=> {
      if(res.state === 200) {
        const { results } = res;
        const { token } = results;
        sessionSet('super-token', token);
        const { history } = this.props;
        history.push({
          pathname: '/',
        });
      } else {
        message.error(res.msg);
      }
    }).catch(err=> {
      console.log(err);
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-main">
        <div className='login-main-left'>
          <div className='login-main-left-top'>
            <img src={login2} alt="" />
            <span className='login-main-left-top-text'>甲骨文超级码舆情系统</span>
          </div>
          <div className='login-main-left-bottom'>
            <img src={login3} alt="" />
          </div>
        </div>
        <div className='login-main-right'>
          <div className='login-main-right-title'>系统账户登录</div>
          <div className="login-main-right-block">
            <div className="login-main-right-label">账户名称</div>
            <input type="text" value={username} placeholder="账户名称" onChange={this.handleFormChange1} />
            <div className="login-main-right-label">输入密码</div>
            <div className="login-main-right-ps">
              <input type="password" value={password} placeholder="请输入登录系统的密码" onChange={this.handleFormChange2} />
              {/* <span onClick={this.handleMouseDown} className={`${showpas ? styles.off : styles.no}`}></span> */}
            </div>
          </div>

          <div className="login-main-right-submit" onClick={this.handleLoginClick}>登录</div>
        </div>
      </div>
    )
  }
}
