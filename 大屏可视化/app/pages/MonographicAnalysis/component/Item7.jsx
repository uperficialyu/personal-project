import React, { useEffect, useState, useRef } from 'react';
import PolylineChart from 'components/PolylineChart5/PolylineChart';
import SwiperItem from 'components/SwiperItem/SwiperItem';
import Ajax from 'lib/ajax';
import api from 'api/api';

const Item1 = (props) => {
  const [dataX1, setdataX1] = useState([]);
  const [dataX2, setdataX2] = useState([]);
  const [dataY, setdataY] = useState([]);
  useEffect(() => {
    const params = {
      topicName: '安吉白茶',
      flag: 1,
      current: 1,
      pageSize: 1000
    }
    Ajax('get', api.monographicAnalysis.emotion, params).then((res) => {
      if (res.state === 200) {
        const results = res?.results || {};
        const avgTrend = results?.avgTrend || [];
        const trend = results?.trend || [];
        const dataX1 = [];
        const dataX2 = [];
        const dataY = []
        avgTrend.forEach(item => {
          dataX1.push(item.y);
          dataY.push(item.x);
        });
        trend.forEach(item => {
          dataX2.push(item.y);
        });
        setdataX1(dataX1);
        setdataX2(dataX2);
        setdataY(dataY);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="monographic-analysis-item4">
      <div className='monographic-analysis-item-title'>情感趋势图</div>
      <div className="monographic-analysis-item4-chart"><PolylineChart dataX1={dataX1} dataX2={dataX2} dataY={dataY} /></div>
    </div>
  );
};

export default Item1;
