import React, { useEffect, useState, useRef } from 'react';
import SwiperItem from 'components/SwiperItem/SwiperItem';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import PolylineChart from 'components/PolylineChart/PolylineChart';
import png from 'style/images/home/home3.png';
import Ajax from 'lib/ajax';
import api from 'api/api';

const Item1 = (props) => {
  const { title } = props;
  const [ contentList, setContentList ] = useState([]);

  const ajax1 = () => {
    const params = {
      topicName: '安吉白茶',
      flag: 1,
      current: 1,
      pageSize: 100
    }
    Ajax('get', api.monographicAnalysis.overview, params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        const list = [];
        const obj = {
          ...results,
          docTitle: results.topicName,
          docTime: results.generationTime,
          docSource: results.topicOverview
        }
        list.push(obj);
        setContentList(list)
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  const ajax2 = () => {
    const params = {
      topicName: '安吉白茶',
      flag: 1,
      current: 1,
      pageSize: 100
    }
    Ajax('get', api.monographicAnalysis.first, params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        const list = [];
        list.push(results);
        setContentList(list)
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  const ajax3 = () => {
    const params = {
      topicName: '安吉白茶',
      flag: 1,
      current: 1,
      pageSize: 100
    }
    Ajax('get', api.monographicAnalysis.latest, params).then((res) => {
      if (res.state === 200) {
        const results = res.results;
        const list = [];
        list.push(results);
        setContentList(list)
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    switch (title) {
      case '专题事件':
        ajax1();
        break;
      case '首发资讯':
        ajax2();
        break;
      case '最新资讯':
        ajax3();
        break;
      default:
        ajax1();
        break;
    }
  }, [title]);


  return (
    <div className="monographic-analysis-item1">
      <div className='monographic-analysis-item-title'>{title}</div>
      <div className='monographic-analysis-item1-swiper'><SwiperItem speed={10000} contentList={contentList} slidesPerView={1} /></div>
    </div>
  );
};

export default Item1;
