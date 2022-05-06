import React, { useEffect } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';

// 导入基本swipe组件
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入自动播放和分页器模块
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// 导入swiper组件样式
import 'swiper/swiper.scss';
//如果当先项目导入scss文件报错，请百度搜索react项目引入scss文件，然后下载对应插件即可引入
// 导入分页器组件样式
import 'swiper/components/pagination/pagination.scss';

import png1 from 'style/images/home/item1.png';
import './Item5.scss';

// 挂载到当前swiper实例
SwiperCore.use([Pagination, Autoplay]);

const Item1 = () => {

  const item3List = [
    {name: 1},
    {name: 2},
    {name: 3},
    {name: 4},
    {name: 4},
  ]

  useEffect(() => {
    return () => {
    }
  }, []);

  // const { title } = this.props;
  return (
    <div className="item5">
      <ItemHeader title="金华市婺城区整改率" />
      <div className="item5-swiper">
        <Swiper
          slidesPerView={6} // 同屏显示多少个swiper滑块
          initialSlide={0} // 默认展示第几个滑块
          loop={true} // 是否开启无限轮播
          // pagination={{ clickable: false }} //开启分页器操作
          observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
          observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
          autoplay={true} // 自动轮播开启
          direction='vertical'
          className="swiper-wrapper"
        >
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
          {
            item3List.map((item, index) => {
              return (
                <SwiperSlide className='swiper-slide' key={index}>
                  <div class="item5-swiper-item swiper-slide">
                    <div className="item5-swiper-item-left">
                      <div className="item5-swiper-item-left-top">金华市</div>
                      <div className="item5-swiper-item-left-bottom"><div style={{width: '100%'}} className="item5-swiper-item-left-bottom-active"></div></div>
                    </div>
                    <div className="item5-swiper-item-right">
                      <span className="item5-swiper-item-right-top">12</span>
                      <span className="item5-swiper-item-right-bottom">%</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Item1;
