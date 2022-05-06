import React, { useEffect, useState, useRef } from 'react';
import PolylineChart from 'components/PolylineChart4/PolylineChart';
import Ajax from 'lib/ajax';
import api from 'api/api';

const Item1 = (props) => {
  const [dataX1, setdataX1] = useState([]);
  const [dataX2, setdataX2] = useState([]);
  const [dataX3, setdataX3] = useState([]);
  const [dataY, setdataY] = useState([]);
  useEffect(() => {
    const params = {
      topicName: '安吉白茶',
      flag: 1,
      current: 1,
      pageSize: 1000
    }
    Ajax('get', api.monographicAnalysis.heat, params).then((res) => {
      if (res.state === 200) {
        const results = res?.results || {};
        const increment = results?.increment || [];
        const avgIncrement = results.avgIncrement || '';
        const avgTotal = results.avgTotal || '';
        const dataX1 = [];
        const dataX2 = [];
        const dataX3 = [];
        const dataY = []
        increment.forEach(item => {
          dataX1.push(item.y);
          dataY.push(item.x);
          dataX2.push(avgTotal)
          dataX3.push(avgIncrement)
        });
        setdataX1(dataX1);
        setdataX2(dataX2);
        setdataX3(dataX3);
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
      <div className='monographic-analysis-item-title'>热度趋势图</div>
      <div className="monographic-analysis-item4-chart"><PolylineChart dataX1={dataX1} dataX2={dataX2} dataX3={dataX3} dataY={dataY} /></div>
    </div>
  );
};

export default Item1;
