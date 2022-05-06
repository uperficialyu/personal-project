import React, { useEffect, useState, useRef } from 'react';
import Ajax from 'lib/ajax';
import api from 'api/api';
import png1 from 'style/images/home/home30.png';
import png2 from 'style/images/home/home31.png';
import png3 from 'style/images/home/home32.png';
import png4 from 'style/images/home/home33.png';

const Item1 = (props) => {
  const { obj } = props;
  const [picures, setPicures] = useState([]);
  const [img, setImg] = useState({png1: png3, png2: png4});

  useEffect(() => {
    if(!obj.leaderName || !obj.leaderId) return;
    const params = {
      leaderName: obj.leaderName,
      leaderId: obj.leaderId,
      flag: 1,
      current: 1,
      pageSize: 100
    }
    Ajax('get', api.home.pictures, params).then((res) => {
      if (res.state === 200) {
        const list = res.results.list;
        const length = list.length;
        setPicures(list);
        if(length === 0) {
          setImg({png1: png3, png2: png4})
        } else if(length === 1) {
          setImg({png1: list[0], png2: png4})
        } else {
          setImg({png1: list[0].picture, png2: list[1].picture})
        }
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, [obj])

  const movepic = (type) => {
    console.log(type,'sss')
  }

  return (
    <div className="home-item4">
      <div className='home-item-title'>图集</div>
      <div className='home-item4-content'>
        <div onClick={() => movepic('left')} className='home-item4-content-left'><img src={png1} alt="" /></div>
        <div className='home-item4-content-middle'>
          <div className='home-item4-content-middle-img'><img src={img.png1} alt="" /></div>
          <div className='home-item4-content-middle-img'><img src={img.png2} alt="" /></div>
        </div>
        <div onClick={() => movepic('right')} className='home-item4-content-right'><img src={png2} alt="" /></div>
      </div>
    </div>
  );
};

export default Item1;
