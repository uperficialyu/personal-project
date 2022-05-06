import React, { useEffect, useState } from 'react';
import Ajax from 'lib/ajax';
import api from 'api/api';
import png1 from 'style/images/home/home11.png';
import png2 from 'style/images/home/home34.png';

const Item1 = (props) => {
  const { obj } = props;
  const [ leaderInfo, setLeaderInfo ] = useState({});
  
  useEffect(() => {
    if(!obj.leaderName || !obj.leaderId) return
    const params = {
      leaderName: obj.leaderName,
      leaderId: obj.leaderId,
      flag: 1,
      current: 1,
      pageSize: 100
    }
    Ajax('get', api.home.leaderInfo, params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        setLeaderInfo(results)
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, [obj])

  return (
    <div className="home-item2">
      <div className='home-item2-left'><img className='home-item2-left-pic' src={leaderInfo.leaderHeadPicture || png2} alt="" /></div>
      <div className='home-item2-right'>
        <div className='home-item2-right-top'>
          <img src={png1} alt="" />
          <span>{leaderInfo.leaderName}</span>
          <img src={png1} alt="" />
        </div>
        <div className='home-item2-right-bottom'>{leaderInfo.leaderInfo}</div>
      </div>
    </div>
  );
};

export default Item1;
