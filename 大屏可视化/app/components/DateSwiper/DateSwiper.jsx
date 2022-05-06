import React, { useState } from 'react';
import png1 from 'style/images/component/start.png';
import png2 from 'style/images/component/stop.png';
import './DateSwiper.scss';

const DateSwiper = (props) => {
  const [png, setpng] = useState(1);

  const {
    yearMounthList,
    yearmounth,
    handleDate,
    timeInterval
  } = props;

  let year = '';
  let mounthList = [];

  yearMounthList.forEach((item, index) => {
    try {
      year = item.slice(0, 4);
      mounthList.push(item.slice(4, 6));
    } catch (error) {
    }
  });

  const handleClick = () => {
    if (png === 0) {
      setpng(1);
      timeInterval(1);
    } else {
      setpng(0);
      timeInterval(0);
    }
  };

  return (
    <div className="date-swiper">
      <div onClick={handleClick} className="date-swiper-left"><img src={png === 0 ? png1 : png2} alt="" /></div>
      <div className="date-swiper-middle">
        <div>
          <div className="date-swiper-middle-mounth-parent">
            {
              yearMounthList.map((item, index) => {
                let value = '';
                try {
                  value = item.slice(4, 6);
                } catch (error) {
                }
                return (
                  <div onClick={() => handleDate(item)} className={`date-swiper-middle-mounth ${item === yearmounth ? 'date-swiper-middle-mounth-active' : ''}`}>{value}月
                    <div className={`date-swiper-middle-mounth-line ${item === yearmounth ? 'date-swiper-middle-mounth-line-active' : ''}`}></div>
                    {
                      item === yearmounth ? <div className="date-swiper-middle-mounth-circle"></div> : ''
                    }
                  </div>
                );
              })
            }
          </div>
          <div className="date-swiper-middle-bg"></div>
        </div>
      </div>
      <div className="date-swiper-right">
        <div className="date-swiper-right-year">{year}</div>
      </div>
    </div>
  );
};

export default DateSwiper;
