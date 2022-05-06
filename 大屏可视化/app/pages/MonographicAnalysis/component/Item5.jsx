import React, { useEffect, useState, useRef } from 'react';
import Circle from 'components/Circle/Circle';
import Ajax from 'lib/ajax';
import api from 'api/api';

const Item1 = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const params = {
      topicName: '安吉白茶',
      flag: 1,
      current: 1,
      pageSize: 1000
    }
    Ajax('get', api.monographicAnalysis.article, params).then((res) => {
      if (res.state === 200) {
        const list = res?.results?.list || [];
        setList(list)
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="monographic-analysis-item5"><Circle list={list} title="文章数量" /></div>
  );
};

export default Item1;
