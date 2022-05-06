import React from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import Circle from './circle';

const Item2 = (props) => {
  const {
    yearmounth,
    yearMounthList,
    handleDate
  } = props;

  const list1 = {
    '202201': [
      { value: 335, name: '较好' },
      { value: 2081, name: '较差'},
      { value: 38394, name: '齐平'},
    ],
    '202112': [
      { value: 7602, name: '较好' },
      { value: 881, name: '较差'},
      { value: 32327, name: '齐平'},
    ],
    '202111': [
      { value: 363, name: '较好' },
      { value: 2994, name: '较差'},
      { value: 37453, name: '齐平'},
    ],
    '202110': [
      { value: 64670, name: '较好' },
      { value: 63484, name: '较差'},
      { value: 30854475, name: '齐平'},
    ],
    '202109': [
      { value: 8892966, name: '较好' },
      { value: 792793, name: '较差'},
      { value: 21252484, name: '齐平'},
    ],
    '202108': [
      { value: 26827669, name: '较好' },
      { value: 1197556, name: '较差'},
      { value: 2114574, name: '齐平'},
    ],
    '202107': [
      { value: 25368145, name: '较好' },
      { value: 834514, name: '较差'},
      { value: 3710786, name: '齐平'},
    ],
    '202106': [
      { value: 26588762, name: '较好' },
      { value: 724656, name: '较差'},
      { value: 3643304, name: '齐平'},
    ],
    '202105': [
      { value: 1789601, name: '较好' },
      { value: 10631496, name: '较差'},
      { value: 18561532, name: '齐平'},
    ],
    '202104': [
      { value: 17957298, name: '较好' },
      { value: 187976, name: '较差'},
      { value: 12837355, name: '齐平'},
    ],
    '202103': [
      { value: 17312492, name: '较好' },
      { value: 115148, name: '较差'},
      { value: 13554984, name: '齐平'},
    ],
    '202102': [
      { value: 22273326, name: '较好' },
      { value: 736242, name: '较差'},
      { value: 7972817, name: '齐平'},
    ],
    '202101': [
      { value: 20223111, name: '较好' },
      { value: 119726, name: '较差'},
      { value: 10639790, name: '齐平'},
    ],
  };

  const list2 = {
    '202201': [
      { value: 46, name: '较好' },
      { value: 838, name: '较差'},
      { value: 39926, name: '齐平'},
    ],
    '202112': [
      { value: 6896, name: '较好' },
      { value: 345, name: '较差'},
      { value: 33569, name: '齐平'},
    ],
    '202111': [
      { value: 10367, name: '较好' },
      { value: 675, name: '较差'},
      { value: 29768, name: '齐平'},
    ],
    '202110': [
      { value: 16461455, name: '较好' },
      { value: 1914365, name: '较差'},
      { value: 12604358, name: '齐平'},
    ],
    '202109': [
      { value: 4377708, name: '较好' },
      { value: 1199567, name: '较差'},
      { value: 25226021, name: '齐平'},
    ],
    '202108': [
      { value: 11665999, name: '较好' },
      { value: 1657345, name: '较差'},
      { value: 12600729, name: '齐平'},
    ],
    '202107': [
      { value: 13443080, name: '较好' },
      { value: 925049, name: '较差'},
      { value: 10897216, name: '齐平'},
    ],
    '202106': [
      { value: 4317535, name: '较好' },
      { value: 1424410, name: '较差'},
      { value: 25058805, name: '齐平'},
    ],
    '202105': [
      { value: 2874191, name: '较好' },
      { value: 17901632, name: '较差'},
      { value: 10164287, name: '齐平'},
    ],
    '202104': [
      { value: 9734369, name: '较好' },
      { value: 920789, name: '较差'},
      { value: 20327462, name: '齐平'},
    ],
    '202103': [
      { value: 113190, name: '较好' },
      { value: 344273, name: '较差'},
      { value: 30516829, name: '齐平'},
    ],
    '202102': [
      { value: 10800431, name: '较好' },
      { value: 518188, name: '较差'},
      { value: 19663454, name: '齐平'},
    ],
    '202101': [
      { value: 7912511, name: '较好' },
      { value: 217273, name: '较差'},
      { value: 22852842, name: '齐平'},
    ],
  };

  const data1 = list1[yearmounth];
  const data2 = list2[yearmounth];

  const handleDateVaule = (s) => {
    const value = s.target.value;
    handleDate(value);
  };

  return (
    <div className="item3">
      <ItemHeader title="与前年长势对比/与历史多年数据对比" />
      <div className="item3-top">
        <select onChange={handleDateVaule} value={yearmounth} className="item3-select1" name="" id="">
          {
            yearMounthList.map((item, index) => {
              let value = '';
              try {
                value = item.slice(4, 6);
              } catch (error) {
              }
              return (
                <option value={item}>{value}月</option>
              );
            })
          }
        </select>
      </div>
      <div className="item3-bottom">
        <div><Circle title='与去年对比' data={data1} /></div>
        <div><Circle title='与历史对比' data={data2} /></div>
      </div>
    </div>
  )
}

export default Item2;
