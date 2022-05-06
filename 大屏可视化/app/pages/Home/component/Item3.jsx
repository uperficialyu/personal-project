/*
 * @Description 新闻
 * @Author: yushunping 
 * @Date: 2022-04-25 11:03:23 
 * @Last Modified by: yushunping
 * @Last Modified time: 2022-04-29 17:08:43
 */

import React, { useEffect, useState } from 'react';
import SwiperItem from 'components/SwiperItem/SwiperItem';
import { message } from 'antd';
import Ajax from 'lib/ajax';
import api from 'api/api';

const Item1 = (props) => {
  const { obj } = props;

  const [contentList, setContentList] = useState([]);
  useEffect(() => {
    if(!obj.leaderName) return
    const params = {
      pageSize: 100,
      current: 1,
      leaderName: obj.leaderName,
    }
    Ajax('get', api.home.news, params).then((res)=> {
      if(res.state === 200) {
        const list = res.results.list || [];
        setContentList(list);
      } else {
        message.error(res.msg);
      }
    }).catch(err=> {
      console.log(err);
    });
  }, [obj]);

  return (
    <div className="home-item3">
      <div className='home-item-title'>新闻</div>
      <div className='home-item3-swiper'><SwiperItem isShowNum contentList={contentList} slidesPerView={3} /></div>
    </div>
  );
};

export default Item1;
