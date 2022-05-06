import React, { Component } from 'react';
import png1active from 'style/images/internetOfThings/left-active.png';
import png1noactive from 'style/images/internetOfThings/left-no-active.png';
import png2active from 'style/images/internetOfThings/right-active.png';
import png2noactive from 'style/images/internetOfThings/right-no-active.png';
// import './Header.scss';

const Center = (props) => {
  const {
    isShowMonitor,
    isShowSensor,
    handleIot,
    isShowMonitorSensor
  } = props;

  return (
    <div className="center">
      <div onClick={() => handleIot('monitor')} className="center-left">
        <div className={isShowMonitorSensor ? 'center-left-item1 center-item1-active' : 'center-left-item1'}>
          <img src={isShowMonitorSensor ? png1active : png1noactive} alt="" />
        </div>
        <div className={isShowMonitorSensor ? 'center-item1-title center-item1-title-active' : 'center-item1-title'}>监控</div>
      </div>

      <div onClick={() => handleIot('sensor')} className="center-right">
        <div className={!isShowMonitorSensor ? 'center-right-item1 center-item1-active' : 'center-right-item1'}>
          <img src={!isShowMonitorSensor ? png2active : png2noactive} alt="" />
        </div>
        <div className={!isShowMonitorSensor ? 'center-item1-title center-item1-title-active' : 'center-item1-title'}>传感器</div>
      </div>
    </div>
  );
};

export default Center;
