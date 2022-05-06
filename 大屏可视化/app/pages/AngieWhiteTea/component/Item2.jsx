import React, { useEffect, useState, useRef } from 'react';
import Ajax from 'lib/ajax';
import api from 'api/api';


const Item1 = (props) => {
  const {
    obj
  } = props;

  const [objs, setObjs] = useState({ docSource: '新华网', docTime: '2022-03-02', docTitle: '2022安吉白茶开采节开幕，“白茶原”先行区正式亮相', content:'因“一片叶子富了一方百姓”而闻名的安吉县溪龙乡,有了一张新名片。3月24日上午,2022安吉白茶开采节在中国白茶第一乡——溪龙开幕, 而由溪龙乡政府联手上海爱家集团打造的茶旅融合综合体暨“白茶原+”,经过3年的规划建设,也正式对外开放,迎来里程碑时刻。作为中国乡村振兴的先行区和示范区,“白茶原”将助力溪龙乡实现用绿水青山创造金山银山的产业升级与蜕变。因“一片叶子富了一方百姓”而闻名的安吉县溪龙乡,有了一张新名片。3月24日上午,2022安吉白茶开采节在中国白茶第一乡——溪龙开幕, 而由溪龙乡政府联手上海爱家集团打造的茶旅融合综合体暨“白茶原+”,经过3年的规划建设,也正式对外开放,迎来里程碑时刻。作为中国乡村振兴的先行区和示范区,“白茶原”将助力溪龙乡实现用绿水青山创造金山银山的产业升级与蜕变。 因“一片叶子富了一方百姓”而闻名的安吉县溪龙乡,有了一张新名片。3月24日上午,2022安吉白茶开采节在中国白茶第一乡——溪龙开幕, 而由溪龙乡政府联手上海爱家集团打造的茶旅融合综合体暨“白茶原+”,经过3年的规划建设,也正式对外开放,迎来里程碑时刻。作为中国乡村振兴的先行区和示范区,“白茶原”将助力溪龙乡实现用绿水青山创造金山银山的产业升级与蜕变。因“一片叶子富了一方百姓”而闻名的安吉县溪龙乡,有了一张新名片。3月24日上午,2022安吉白茶开采节在中国白茶第一乡——溪龙开幕, 而由溪龙乡政府联手上海爱家集团打造的茶旅融合综合体暨“白茶原+”,经过3年的规划建设,也正式对外开放,迎来里程碑时刻。作为中国乡村振兴的先行区和示范区,“白茶原”将助力溪龙乡实现用绿水青山创造金山银山的产业升级与蜕变。'})

  useEffect(() => {
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
    <div className="rural-revitalization-item2">
      <div className='rural-revitalization-item-title'>文章详情</div>
      <div className='rural-revitalization-item2-title'>{objs.docTitle}</div>
      <div className='rural-revitalization-item2-sourse'>
        <span>时间：{objs.docTime}</span>
        <span>来源：{objs.docSource}</span>
      </div>
      <p className='rural-revitalization-item2-content'>{objs.content}</p>
    </div>
  );
};

export default Item1;
