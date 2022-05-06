import React, { useState } from 'react';

// 导入基本swipe组件
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入自动播放和分页器模块
import SwiperCore, { Pagination, Autoplay, Scrollbar } from 'swiper';
// 导入swiper组件样式
import 'swiper/swiper.scss';
//如果当先项目导入scss文件报错，请百度搜索react项目引入scss文件，然后下载对应插件即可引入
// 导入分页器组件样式
import 'swiper/components/pagination/pagination.scss';
import './SwiperItem.scss';

import png from 'style/images/home/home13.png';

SwiperCore.use([Scrollbar, Autoplay]);

const Item1 = (props) => {
  const {
    slidesPerView = 3,
    contentList = [],
    speed = 300,
    isShowNum = false
  } = props;

  const xxxx = () => {
    console.log(1111)
  }

  return (
    <div className="swiper">
      <Swiper
        // slidesPerView={slidesPerView} // 同屏显示多少个swiper滑块
        // initialSlide={0} // 默认展示第几个滑块
        // loop={true} // 是否开启无限轮播
        // // pagination={{ clickable: false }} //开启分页器操作
        // observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
        // observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
        // autoplay={true} // 自动轮播开启
        // direction='vertical'
        // className="swiper-wrapper"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}

        slidesPerView={slidesPerView} // 同屏显示多少个swiper滑块
        initialSlide={0} // 默认展示第几个滑块
        loop={true} // 是否开启无限轮播
        // pagination={{ clickable: false }} //开启分页器操作
        observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
        observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
        autoplay={true} // 自动轮播开启
        direction='vertical'
        className="swiper-wrapper"
        speed= {speed} // 循环速度
      >
        {
          contentList.map((item, index) => {
            return (
              <SwiperSlide
                className='swiper-slide'
                key={index}>
                <div style={index % 2 !== 0 ? {'background': 'rgb(7,42,72)'} : {} } onClick={xxxx} className="swiper-item">
                  <div className='swiper-item-left'>
                    {
                      isShowNum ? item.heat : 
                      <div className={index % 2 !== 0 ? 'swiper-item-left-icon-active' : 'swiper-item-left-icon'}></div>
                    }
                  </div>
                  <div className='swiper-item-right'>
                    <div className='swiper-item-right-title'>{item.docTitle}</div>
                    <div className='swiper-item-right-content'>
                      <div className='swiper-item-right-content-value'>{item.docTime}</div>
                      <div className='swiper-item-right-content-value'>{item.docSource}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
};

export default Item1;