import React, { useEffect, useState, useRef } from 'react';
import ColumnChart from 'components/ColumnChart/ColumnChart';
import Ajax from 'lib/ajax';
import api from 'api/api';

const Item1 = (props) => {
  const [dataY, setDataY] = useState([]);
  const [dataX, setDataX] = useState([]);

  const colorsObj = {
    color1: '#00F6FF',
    color2: '#D4CE2E',
  }
  
  useEffect(() => {
    const params = {
      topicName: '安吉白茶',
      flag: 1,
      current: 1,
      pageSize: 1000
    }
    Ajax('get', api.monographicAnalysis.report, params).then((res) => {
      if (res.state === 200) {
        const list = res?.results?.list || []
        const list1 = [];
        const list2 = [];
        list.forEach(item => {
          list1.push(item.key)
          list2.push(item.count)
        })
        setDataY(list1)
        setDataX(list2)
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="monographic-analysis-item3">
      <div className='monographic-analysis-item-title'>报道量排行</div>
      <div className="monographic-analysis-item3-chart"><ColumnChart dataY={dataY} dataX={dataX} colorsObj={colorsObj} /></div>
    </div>
  );
};

export default Item1;
