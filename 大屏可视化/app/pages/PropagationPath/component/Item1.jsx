import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import PolylineChart from 'components/PolylineChart/PolylineChart';
import png from 'style/images/home/home3.png';


const Item1 = (props) => {
  const {
    newsList = [],
    activeIndex
  } = props;

  return (
    <div className="propagation-path-item1">
      <div className='propagation-path-item-title'>新闻列表</div>
      <div className='propagation-path-item1-content'>
        {
          newsList.map((item, index) => {
            return (
              <div className={activeIndex === index ? 'propagation-path-item1-bottom-item propagation-path-item1-bottom-item-active' : 'propagation-path-item1-bottom-item'} >
                <div className='propagation-path-item1-bottom-item1'><div className='propagation-path-item1-bottom-item2'></div></div>
                <div className='propagation-path-item1-bottom-item3'>
                  <div className='propagation-path-item1-bottom-item4'>{item.docTitle}</div>
                  <div className={activeIndex === index ? 'propagation-path-item1-bottom-item5 propagation-path-item1-bottom-item5-active' : 'propagation-path-item1-bottom-item5'}>
                    <div>{item.docTime}</div>
                    <div className='propagation-path-item1-bottom-item6'>{item.docSource}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Item1;
