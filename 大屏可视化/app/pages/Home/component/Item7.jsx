import React, { useEffect, useState, useRef } from 'react';
import SwiperItem from 'components/SwiperItem/SwiperItem';
import { message } from 'antd';
import Ajax from 'lib/ajax';
import api from 'api/api';

const Item1 = (props) => {
  const { obj } = props;
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    if(!obj.leaderName || !obj.leaderId) return;
    const params = {
      code: 2,
      leaderName: obj.leaderName,
      leaderId: obj.leaderId,
      flag: 1,
      current: 1,
      pageSize: 100
    }
    Ajax('get', api.home.activities, params).then((res) => {
      if (res.state === 200) {
        const list = res.results.list;
        setContentList(list);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, [obj])

  return (
    <div className="home-item7">
      <div className='home-item-title'>重要讲话</div>
      <div className='home-item567-swiper'><SwiperItem contentList={contentList} slidesPerView={5} /></div>
    </div>
  );
};

export default Item1;
