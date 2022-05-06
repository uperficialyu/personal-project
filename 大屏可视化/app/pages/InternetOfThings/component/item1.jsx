import React, { Component } from 'react';
import png1 from 'style/images/internetOfThings/jiankong.png';
import png2 from 'style/images/internetOfThings/pic.png';

const Item1 = (props) => {
  const {
    iotDataNo,
    monitorNo
  } = props;
  return (
    <div className="item1">

      <div className="item1-item">
        <div className="item1-item-left">
          <div className="item1-item-left-top">
            <img src={png1} alt="" />
            <span>监 控</span>
          </div>
          <div className="item1-item-left-bottom">{monitorNo}</div>
        </div>
        <div className="item1-item-right">
          <div className="item1-item-right-top">
            <div className="item1-item-right-top-text1">在线</div>
            <div className="item1-item-right-top-text2">{monitorNo}</div>
          </div>
          <div className="item1-item-right-bottom">
            <div className="item1-item-right-bottom-text1">离线</div>
            <div className="item1-item-right-bottom-text2">0</div>
          </div>
        </div>
      </div>


      <div className="item1-item">
        <div className="item1-item-left">
          <div className="item1-item-left-top">
            <img src={png2} alt="" />
            <span>传感器</span>
          </div>
          <div className="item1-item-left-bottom">{iotDataNo}</div>
        </div>
        <div className="item1-item-right">
          <div className="item1-item-right-top">
            <div className="item1-item-right-top-text1">在线</div>
            <div className="item1-item-right-top-text2">{iotDataNo}</div>
          </div>
          <div className="item1-item-right-bottom">
            <div className="item1-item-right-bottom-text1">离线</div>
            <div className="item1-item-right-bottom-text2">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item1;
