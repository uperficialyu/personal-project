import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';
import './Table1.scss';

SwiperCore.use([Scrollbar, Autoplay]);

const Table1 = (props) => {
  const {
    list = [
      { township: '嘉兴', num: '123', teaGardenNum: '23', area: '123' },
      { township: '湖州', num: '123', teaGardenNum: '23', area: '123' },
      { township: '金华', num: '123', teaGardenNum: '23', area: '123' },
      { township: '杭州', num: '123', teaGardenNum: '23', area: '123' },
    ],
    titleList = ['名称', '户数(人)', '地块(个)', '面积(亩)'],
    direction = 'vertical',  // 方向
    autoplay = true, // 自动轮播开启
    loop = true, // 是否开启无限轮播
    slidesPerView = 3, // 同屏显示多少个swiper滑块
    initialSlide = 0, // 默认展示第几个滑块
  } = props;

  const width = 100 / titleList.length;

  return (
    <div className="table1">
      <div className="table1-list">
        {
          titleList.map((item, index) => {
            return (
              <div style={{width: width + '%'}} key={index} className="item">{item}</div>
            )
          })
        }
      </div>
        <Swiper
          direction={direction}
          slidesPerView={slidesPerView}
          initialSlide={initialSlide}
          loop={loop}
          // pagination={{ clickable: true }} //开启分页器操作
          // observer={true} //修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
          // observeParents={true} //修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
          autoplay={autoplay}
        >
          {
            list.map((item, index) => {
              const arr = Object.keys(item);
              return (
                <SwiperSlide className="swiper-wrap" key={index}>
                  <div className="table1-list">
                    {
                      arr.map((it, idx) => {
                        return (
                          <div key={idx} style={{width: width + '%'}}>{item[it]}</div>
                        )
                      })
                    }
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>

    </div>
  )
}

export default Table1;