import React, { useEffect, useState } from 'react';
// 导入基本swipe组件
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入自动播放和分页器模块
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// 导入swiper组件样式
import 'swiper/swiper.scss';
//如果当先项目导入scss文件报错，请百度搜索react项目引入scss文件，然后下载对应插件即可引入
// 导入分页器组件样式
import 'swiper/components/pagination/pagination.scss';
import Ajax from 'lib/ajax';
import { message } from 'antd';
import png1 from 'style/images/home/item1.png';
// import './Header.scss';

const Item5 = () => {
  const [active, setactive] = useState('pesticides');
  const [obj, setobj] = useState({});
  const list = [
    {title: '农药', value: 'pesticides'},
    {title: '肥料', value: 'fertilizer'},
    {title: '其它', value: 'other'},
  ];

  const list2 = ['排名', '商品名', '登记证号', '数量(千克)'];
  // const list3 = [
  //   { sort: 1, name: '对硫磷', name2: 'PD85109-13', name3: '20' },
  //   { sort: 2, name: '对硫磷', name2: 'PD85109-13', name3: '20' },
  //   { sort: 3, name: '对硫磷', name2: 'PD85109-13', name3: '20' },
  //   { sort: 4, name: '对硫磷', name2: 'PD85109-13', name3: '20' },
  // ];

  useEffect(() => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/inputs-sales-ranking', params).then((res) => {
      if (res.state === 200) {
        const result = res?.results || {};
        setobj(result);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const handleTitle = (item) => {
    setactive(item.value);
  };

  const list3 = obj[active] || [];

  return (
    <div className="item5">
      <div className="item5-title">区域农业投入品流通销售排行榜</div>
      <div className="item5-tab">
        <div className="item5-tab-line">
          <div className="item5-tab-parent">
            {
              list.map((item, index) => {
                return (
                  <div key={index} onClick={() => handleTitle(item)} className={active === item.value ? 'item5-tab-child item5-tab-child-active' : 'item5-tab-child'}>{item.title}</div>
                );
              })
            }
          </div>
        </div>
      </div>
      <div className="item5-swiper1">
        <div className="item5-swiper-header">
          {
            list2.map((item, index) => {
              return (
                <div>{item}</div>
              );
            })
          }
        </div>
        <div className="item5-swiper-content">
          <Swiper
            slidesPerView={3} // 同屏显示多少个swiper滑块
            initialSlide={0} // 默认展示第几个滑块
            loop={true} // 是否开启无限轮播
            // pagination={{ clickable: false }} //开启分页器操作
            observer={true} // 修改swiper自己或子元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
            observeParents={true} // 修改swiper的父元素时，自动初始化swiper(如果数据是请求下来的一定要重新初始化)
            autoplay={true} // 自动轮播开启
            direction='vertical'
            className="swiper-wrapper"
          >
            {
              list3.map((item, index) => {
                return (
                  <SwiperSlide
                    className='swiper-slide'
                    key={index}>
                    <div className="item5-swiper-content-item">
                      <div className="item5-swiper-content-item1">{index + 1}</div>
                      <div className="item5-swiper-content-item2">{item.goodsname}</div>
                      <div className="item5-swiper-content-item3">{item.regno}</div>
                      <div className="item5-swiper-content-item4">{item.quantity}</div>
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Item5;
