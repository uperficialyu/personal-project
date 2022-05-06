import React, { useState } from 'react';
import png1 from 'style/images/home/item1.png';
// import './Header.scss';

const Item2 = (props) => {
  const [selectValue, setSelectValue] = useState('');
  const {
    videourl,
    isShowIframe,
    monitorList,
    properties,
    handleShowIframe,
  } = props;

  const list = [];
  for(let i = 0; i < monitorList.length; i++) {
    const obj = monitorList[i].properties;
    if(obj.jd === properties.jd && obj.wd === properties.wd) {
      list.push({
        title: obj.monitor_name,
        url: obj.url_station,
      });
    }
  }

  const onSelect = (e) => {
    const value = e.target.value;
    setSelectValue(value);
    handleShowIframe(value);
  };

  return (
    <div className="item2">
      <div className="item2-top">
        <div className="item2-title">实时监控</div>
        <div className="item2-select">
          <select onChange={onSelect} className="item2-select-select" value={selectValue} name="" id="">
            {
              list.map((item, index) => {
                return (
                  <option value={item.url}>{item.title}</option>
                );
              })
            }
          </select>
        </div>
      </div>
      <div className="item2-video">
        { isShowIframe ? <iframe src={videourl} frameborder="0"></iframe> : '' }
      </div>
    </div>
  );
};

export default Item2;
