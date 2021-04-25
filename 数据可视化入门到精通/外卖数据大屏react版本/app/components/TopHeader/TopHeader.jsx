import React, { Component } from 'react';
import useClock from './Clock';
import './TopHeader.scss';

const TopHeader = (props) => {
  const { date, time, } = useClock();

  return (
    <div className="top-header">
      <img className="logo" src="https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/54149aa06f26afcf26f42d66c999ee8b.png"></img>
      <div className="logo-text">
        <div className="cn-text">大数据平台</div>
        <div className="en-text">big data</div>
      </div>
      <div className="right-text">
        <img className="right-logo" src="https://img.alicdn.com/tfs/TB1Kbzuq.z1gK0jSZLeXXb9kVXa-600-500.png" />
        <div className="date">{date}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  )
}

export default TopHeader;