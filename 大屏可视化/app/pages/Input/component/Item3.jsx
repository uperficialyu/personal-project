import React, { useEffect, useState } from 'react';
import Ajax from 'lib/ajax';
import png1 from 'style/images/home/item1.png';
// import './Header.scss';

const Item3 = () => {
  // const { title } = this.props;
  const [list, setlist] = useState([
    {title: '农药', value: '799'},
    {title: '肥料', value: '200'},
    {title: '其他', value: '354'},
  ]);
  const [list2, setlist2] = useState([
    {unit: '笔', value: '10992'},
    {unit: '人', value: '599'},
  ]);

  useEffect(() => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/inputs-registration-type', params).then((res) => {
      if (res.state === 200) {
        const result = res?.results || {};
        setlist([
          {title: '农药', value: result.pesticides},
          {title: '肥料', value:  result.fertilizer},
          {title: '其他', value: result.other},
        ]);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/inputs-transactions-number', params).then((res) => {
      if (res.state === 200) {
        const result = res?.results || {};
        setlist2([
          {unit: '笔', value: result.transactionsNumber},
          {unit: '人', value: result.transactionsPeople},
        ]);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="item3">
      <div className="item3-title">区域在售登记种类数</div>
      <div className="item3-middle">
        {
          list.map((item, index) => {
            return (
              <div>
                <div className="item3-middle-title">{item.title}</div>
                <div className="item3-middle-value">{item.value}</div>
              </div>
            );
          })
        }
      </div>
      <div className="item3-bottom">
        {
          list2.map((item, index) => {
            return (
              <div className="item3-bottom-div">
                <div className="item3-bottom-title">{item.value}</div>
                <div className="item3-bottom-value">{item.unit}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Item3;
