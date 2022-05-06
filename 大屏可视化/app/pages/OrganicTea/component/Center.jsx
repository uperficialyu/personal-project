import React, { Component } from 'react';
import CenterHeader from 'components/CenterHeader/CenterHeader';
import CenterLink from 'components/CenterLink/CenterLink';
import png1 from 'style/images/home/home3.png';
import png2 from 'style/images/home/home4.png';
import png3 from 'style/images/home/home5.png';


const Center = () => {
  const list = [
    {title: '茶园面积', unit: '（万亩）', png: png1, value: '37.7'},
    {title: '茶叶产量', unit: '(万吨)', png: png2, value: '2.8'},
    {title: '茶叶产值', unit: '(亿元)', png: png3, value: '29.6'},
  ]
  return (
    <div className="organic-tea-center-child">
      <div className="organic-tea-center-child-bottom"><CenterLink active={4} /></div>
      <div className="tea-plant-center-map">
        <iframe className="soil-iframe" src='./public/organicTea.html' frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default Center;
