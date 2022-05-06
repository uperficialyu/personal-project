import React, { useState } from 'react';
import png1 from 'style/images/home/item1.png';
// import './Header.scss';

const Item4 = (props) => {
  const {
    iotData
  } = props;

  const list = iotData.map(item => item.ieType + ',' + item.height);
  const list2 = [...new Set(list)];

  const [selectValue, setSelectValue] = useState('');

  const onSelect = (e) => {
    const value = e.target.value;
    setSelectValue(value);
  };

  let filter = list2.length > 0 ?  list2[0] : '';
  const temp = selectValue || filter;

  const list3 = iotData.filter((item, index) => {
    const list = temp.split(',');
    return item.ieType === list[0];
  });

  return (
    <div className="item4">
      <div className="item4-select">
        <select onChange={onSelect} className="item4-select-select" value={selectValue} name="" id="">
          {
            list2.map((item, index) => {
              return (
                <option value={item}>{item}</option>
              );
            })
          }
        </select>
      </div>
      <div className="item4-content">
        {
          list3.slice(0,12).map((item, index) =>{
            return (
              <div className="item4-content-item">
                <div className="item4-content-item-name">{item.ieName}</div>
                <div>
                  <span className="item4-content-item-value">{item.ieRealtimeData}</span>
                  <span className="item4-content-item-unit">{item.ieUnit}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Item4;
