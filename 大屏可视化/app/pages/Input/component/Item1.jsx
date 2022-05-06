import React, { useEffect, useState } from 'react';
import Ajax from 'lib/ajax';

const Item1 = () => {
  const [list, setlist] = useState([
    {title: '经营主体入网数', value: '0'},
    {title: '店铺交易活跃', value: '0'},
    {title: '店铺交易非活跃', value: '0'},
  ]);

  useEffect(() => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/inputs-subject', params).then((res) => {
      if (res.state === 200) {
        const result = res?.results || {};
        const list = [
          {title: '经营主体入网数', value: result.subjectCount},
          {title: '店铺交易活跃', value: result.activeSunbectCount},
          {title: '店铺交易非活跃', value: result.noActiveSunbectCount},
        ];
        setlist(list);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="item1">
      {
        list.map((item, index) => {
          return (
            <div className="item1-item">
              <div className="item1-title">{item.title}</div>
              <div className="item1-value">{item.value}</div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Item1;
