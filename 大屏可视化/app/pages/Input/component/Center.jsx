import React, { useEffect, useState } from 'react';
import Ajax from 'lib/ajax';
// import IndexTEst from './indexTEst';

// 导入基本swipe组件
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入自动播放和分页器模块
import SwiperCore, { Pagination, Autoplay, Scrollbar } from 'swiper';
// 导入swiper组件样式
import 'swiper/swiper.scss';
//如果当先项目导入scss文件报错，请百度搜索react项目引入scss文件，然后下载对应插件即可引入
// 导入分页器组件样式
import 'swiper/components/pagination/pagination.scss';
import png1 from 'style/images/home/item1.png';
// import './Header.scss';

SwiperCore.use([Scrollbar, Autoplay]);

const Center = () => {
  const [list2, setstate] = useState([
    { crop: '柑橘1', plantdisease: '病害', area: '1263亩', goodsname: '2甲4氯纳', direction: '16倍' },
    { crop: '柑橘2', plantdisease: '病害', area: '1263亩', goodsname: '2甲4氯纳', direction: '16倍' },
    { crop: '柑橘3', plantdisease: '病害', area: '1263亩', goodsname: '2甲4氯纳', direction: '16倍' },
    { crop: '柑橘4', plantdisease: '病害', area: '1263亩', goodsname: '2甲4氯纳', direction: '16倍' },
    { crop: '柑橘5', plantdisease: '病害', area: '1263亩', goodsname: '2甲4氯纳', direction: '16倍' },
    { crop: '柑橘6', plantdisease: '病害', area: '1263亩', goodsname: '2甲4氯纳', direction: '16倍' },
  ]);
  const headerList = ['作物', '病虫草害', '农药名称', '稀释倍数'];

  useEffect(() => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/inputs-pesticides-doc', params).then((res) => {
      if (res.state === 200) {
        const result = res?.results || {};
        setstate(result);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="center">
      <div className="center-map">
        <iframe id="input-iframe" className="center-iframe" src='./public/map/inputs/inputs.html' frameborder="0"></iframe>
      </div>
      <div className="center-bottom">
        <div className="center-bottom-title">农药处方</div>
        <div className="center-bottom-content">
          <div className="center-bottom-content-header">
            {
              headerList.map((item, index) => {
                return (
                  <div>{item}</div>
                );
              })
            }
          </div>
          <div className="center-bottom-content-swiper">
            <Swiper
              slidesPerView={4} // 同屏显示多少个swiper滑块
              initialSlide={0} // 默认展示第几个滑块
              loop={true} // 是否开启无限轮播
              // pagination={{ clickable: false }} //开启分页器操作
              observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
              observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
              autoplay={true} // 自动轮播开启
              direction='vertical'
              className="swiper-wrapper"
              key={Date.now()+Math.floor(Math.random()*99999)}
            >
              {
                list2.map((item, index) => {
                  return (
                    <SwiperSlide
                      className='swiper-slide'
                      key={index}>
                      <div className="center-bottom-content-swiper-item">
                        <div className="item5-swiper-content-item1">{item.crop}</div>
                        <div className="item5-swiper-content-item2">{item.plantdisease}</div>
                        {/* <div className="item5-swiper-content-item3">{item.area}</div> */}
                        <div className="item5-swiper-content-item4">{item.goodsname}</div>
                        <div className="item5-swiper-content-item5">{item.direction}</div>
                      </div>
                    </SwiperSlide>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
