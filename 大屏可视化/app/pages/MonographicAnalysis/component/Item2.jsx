import React, { useEffect, useState, useRef } from 'react';
import HotMap from 'components/HotMap';
import Ajax from 'lib/ajax';
import api from 'api/api';

const Item1 = () => {
  const [mapList, setMapList] = useState([]);

  useEffect(() => {
    const params = {
      topicName: '安吉白茶',
      flag: 1,
      current: 1,
      pageSize: 1000
    }
    Ajax('get', api.monographicAnalysis.area, params).then((res) => {
      if (res.state === 200) {
        const list = res?.results?.list || [];
        const arr = [];
        list.forEach(item => {
          arr.push({
            name: item.key,
            value: item.count,
          })
        })
        setMapList(arr);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);
console.log(mapList)
  return (
    <div className="monographic-analysis-item2">
      <div className='monographic-analysis-item-title'>资讯地域分布</div>
      <div className='monographic-analysis-item2-chart'><HotMap data={mapList} /></div>
    </div>
  );
};

export default Item1;
