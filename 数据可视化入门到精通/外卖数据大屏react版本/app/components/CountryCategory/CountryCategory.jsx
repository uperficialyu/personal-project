/*
 * @Author: yushunping
 * @Date: 2021-05-16 15:17:44 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-05-16 19:50:39
*/
import React, { useState, useEffect } from 'react';
import './CountryCategory.scss';

const CountryCategory = (props) => {
  const {
    data,
    colorList,
  } = props;
  const [selected, setselected] = useState(0);
  const [hover, sethover] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      if (selected + 1 > data.length - 1) {
        setselected(0);
      } else {
        setselected(selected+1);
      }
    }, 2000);
  }, [selected]);

  const click = (index) => {
    setselected(index);
  }

  const mouseIn = (index) => {
    sethover(index);
  }

  const mouseOut = () => {
    sethover(-1);
  }

  return (
    <div className="country-category">
      {
        data.map((item, index) => {
          let styleType = {};
          let className = '';
          if(index === selected) {
            styleType = colorList[0];
            className = 'selected';
          } else if(index === hover) {
            styleType = colorList[1];
            className = 'hovered';
          }
          return (
            <div 
              onClick={() => click(index)}
              onMouseOver={() => mouseIn(index)}
              onMouseOut={mouseOut}
              className="category">
              <div className={className} style={styleType}>{item}</div>
            </div>
          );
        })
      }
    </div>
  )
}

export default CountryCategory;