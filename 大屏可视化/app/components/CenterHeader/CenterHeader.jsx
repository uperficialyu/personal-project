import React, { useEffect } from 'react';
import './CenterHeader.scss';

const CenterHeader = (props) => {
  const { list } = props;
  return (
    <div className="center-header">
      {
        list.map((item, index) => {
          return (
            <div className="center-header-item">
              <div><img src={item.png} alt="" /></div>
              <div>
                <div className="center-header-item-title1">{item.title}{item.unit}</div>
                <div className="center-header-item-title2">{item.value}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default CenterHeader;
