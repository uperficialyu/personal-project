import React, { Component } from 'react';
import process from 'style/images/component/process.png';
import text from 'style/images/component/text.png';
import ReactDOM from 'react-dom';
import './searchModal.scss';

const ModalDetal = (prosp) => {
  const {
    titleList,
    contentList,
    handleClose,
    handlevillage
  } = prosp;

  let area = 0;

  const list = contentList.map((item, index) => {
    area += Number(item.properties.zzmj);
    return item.properties;
  });

  const dom = <div className="plant-distributed-search">
    <div className="plant-distributed-search-title">
      {
        titleList.map((item, index) => {
          return (
            <div className="plant-distributed-search-title-item">{item}</div>
          );
        })
      }
    </div>
    <div className="plant-distributed-search-line"></div>
    <div className="plant-distributed-search-content">
      {
        contentList.map((item, index) => {
          const properties = item.properties;
          return (
            <div className="plant-distributed-search-content-item">
              <div>{properties.jyqqlr}</div>
              <div>{properties.dkbm}</div>
              <div>{properties.zzpz}</div>
              <div>{properties.zzmj}</div>
              <div>{properties.sscz}</div>
              <div>{properties.sjh}</div>
              <div onClick={() => handlevillage(item)} className="plant-distributed-search-content-item-operator">定位</div>
            </div>
          );
        })
      }
    </div>
    <div className="plant-distributed-search-line"></div>
    <div className="plant-distributed-search-bottom">
      <span className="plant-distributed-search-bottom-span">总块数：{list.length}块</span>
      <span className="plant-distributed-search-bottom-span">总面积：{area.toFixed(2)}亩</span>
    </div>

    <div onClick={handleClose} className="plant-distributed-search-close"></div>
  </div>;

  return (
    dom
    // ReactDOM.createPortal(dom, document.body)
  );
};

export default ModalDetal;
