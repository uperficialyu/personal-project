import React, { useEffect, useState, useRef } from 'react';
import Ajax from 'lib/ajax';
import api from 'api/api';

import png1 from 'style/images/home/home28.png';


const Item1 = (props) => {
  const { obj } = props;
  const [objs, setObjs] = useState({})

  useEffect(() => {
    if(!obj.docSource || !obj.docTitle) return;
    const params = {
      docSource: obj.docSource,
      newsTitle: obj.docTitle,
      publishTime: obj.docTime,
      reqId: obj.reqId,
    }
    Ajax('get', api.home.newsInfo, params).then((res) => {
      if (res.state === 200) {
        const list = res.results || {};
        setObjs(list);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, [obj])

  return (
    <div className="propagation-path-item2">
      <div className='propagation-path-item-title'>文章详情</div>
      <div className='propagation-path-item2-content'>
        <div className='propagation-path-item2-content-share'>
          <img src={png1} alt="" />
          <span>转载文章2篇，转载媒体2家</span>
        </div>
        <div className='propagation-path-item2-content-title'>{objs.docTitle}</div>
        <div className='propagation-path-item2-content-sourse'>
          <span>时间：{objs.docTime}</span>
          <span>来源：{objs.docSource}</span>
        </div>
        <p className='propagation-path-item2-content-content'>{objs.content}</p>
      </div>
    </div>
  );
};

export default Item1;
