import React, { Component } from 'react';
import process from 'style/images/component/process.png';
import text from 'style/images/component/text.png';
import './mapModal.scss';

const ModalDetal = (prosp) => {
  const {
    modalData,
    handleClose
  } = prosp;

  return (
    <div className="home-modal-detail">
      <div className="home-modal-detail-title">土壤属性</div>

      <div className="home-modal-detail-content">
        {
          Object.keys(modalData).map((item, index) => {
            let value = item;
            if(value === '全氮（g_kg') {
              value = '全氮（g/kg）';
            } else if(value === '县（区、市') {
              value = '县（区、市）';
            } else if(value === '有效磷（mg') {
              value = '有效磷（mg）';
            } else if(value === '有机质（g_') {
              value = '有机质（g）';
            } else if(value === '缓效钾（mg') {
              value = '缓效钾（mg）';
            } else if(value === '速效钾（mg') {
              value = '速效钾（mg）';
            }
            return (
              <div style={{paddingTop: (index + 1) % 9 === 0 ? 15 : 0}} className="home-modal-detail-content-item">
                <div className="home-modal-detail-content-item-left">{value}：</div>
                <div className="home-modal-detail-content-item-right">{modalData[item]}</div>
              </div>
            );
          })
        }
      </div>

      <div onClick={handleClose} className="home-modal-detail-close"></div>
    </div>
  );
};

export default ModalDetal;
