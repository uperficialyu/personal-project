import React, { useEffect, useState } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import Select from 'components/Select/Select';
// import Select from 'react-select';
import * as echarts from 'echarts';
import Ajax from 'lib/ajax';
// 导入基本swipe组件
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入自动播放和分页器模块
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// 导入swiper组件样式
import 'swiper/swiper.scss';
//如果当先项目导入scss文件报错，请百度搜索react项目引入scss文件，然后下载对应插件即可引入
// 导入分页器组件样式
import 'swiper/components/pagination/pagination.scss';

const Item2 = () => {
  const [swiperList, setswiperList] = useState([]);
  // const swiperList = [
  //   { index: 1, name: '方晓韩', value: '85655亩', title: '伦晚脐橙、长红' },
  //   { index: 2, name: '方晓韩', value: '85655亩', title: '伦晚脐橙、长红' },
  //   { index: 3, name: '方晓韩', value: '85655亩', title: '伦晚脐橙、长红' },
  //   { index: 4, name: '方晓韩', value: '85655亩', title: '伦晚脐橙、长红' },
  //   { index: 5, name: '方晓韩', value: '85655亩', title: '伦晚脐橙、长红' },
  //   { index: 6, name: '方晓韩', value: '85655亩', title: '伦晚脐橙、长红' },
  //   { index: 7, name: '方晓韩', value: '85655亩', title: '伦晚脐橙、长红' },
  //   { index: 8, name: '方晓韩', value: '85655亩', title: '伦晚脐橙、长红' },
  // ];

  useEffect(() => {
    // let params = {
    //   filter: '',
    //   group: 'cite',
    //   id: 't_zigui_plant',
    //   maxFeatures: '50000'
    // };
    // Ajax('get', '/hydra-code-egis/api/v1/geoserver/get-json-data', params).then((res) => {
    //   const dt = res;
    //   var ftCol = [];
    //   //获取权利人列表
    //   var personName = [];
    //   var data = dt.features;
    //   while (data.length !== 0) {
    //     personName.push(data[0].properties.jyqqlr);
    //     data = data.filter(function (ft) {
    //       return ft.properties.jyqqlr !== data[0].properties.jyqqlr;
    //     });
    //   }
    //   //获取权利人对应种植面积
    //   var personArea = [];
    //   var personType = [];
    //   for (var i = 0; i < personName.length; i++) {
    //     var tmptype = '';
    //     var tmpdata = dt.features.filter(function (ft) {
    //       return ft.properties.jyqqlr === personName[i];
    //     });
    //     //种植面积统计
    //     var tmparea = 0;
    //     tmpdata.forEach(function (ft) {
    //       tmparea += parseFloat(ft.properties.zzmj);
    //     });
    //     personArea.push(tmparea.toFixed(2));
    //     //种植品种统计
    //     while (tmpdata.length !== 0) {
    //       tmptype += tmpdata[0].properties.zzpz + '/';
    //       tmpdata = tmpdata.filter(function (ft) {
    //         return ft.properties.zzpz !== tmpdata[0].properties.zzpz;
    //       });
    //     }
    //     personType.push(tmptype);
    //   }
    //   //返回数据
    //   for (var i = 0; i < personName.length; i++) {
    //     var ft = {
    //       'name': personName[i],
    //       'area': personArea[i],
    //       'type': personType[i]
    //     };
    //     ftCol.push(ft);
    //   }
    //   //ftCol排序
    //   ftCol.sort(function (x, y) {
    //     return parseFloat(y.area) - parseFloat(x.area);
    //   });
    //   setswiperList(ftCol.slice(0, 50));

    // }).catch(err => {
    //   console.log(err);
    // });
    // return () => {
    // };
  }, []);

  useEffect(() => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/planting-area-top50', params).then((res) => {
      if(res.state === 200) {
        const list = res?.results || [];
        setswiperList(list);
      }
    }).catch(err => {
      console.log(err);
    });
    return () => {
    }
  }, [])

  return (
    <div className="item3">
      <ItemHeader title="按地块种植面积排行TOP50" />
      <div className="item3-bottom">
        <Swiper
          slidesPerView={7} // 同屏显示多少个swiper滑块
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
            swiperList.map((item, index) => {
              return (
                <SwiperSlide
                  className='swiper-slide'
                  key={index}>
                  <div className="item3-swiper-item">
                    <div className="item3-swiper-item-child">
                      <div className="item3-swiper-item-child-div item3-swiper-item-child-div-color1">{index + 1}</div>
                      <div className="item3-swiper-item-child-div item3-swiper-item-child-div-color2">{item.jyqqlr}</div>
                      <div className="item3-swiper-item-child-div item3-swiper-item-child-div-color3">{item.zzmj}</div>
                      <div className="item3-swiper-item-child-div item3-swiper-item-child-div-color4">{item.zzpz}</div>
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

export default Item2;
