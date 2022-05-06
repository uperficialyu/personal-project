import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import Select from 'components/Select/Select';
// import Select from 'react-select';
import * as echarts from 'echarts';
import objs from '../../../config/static';
import Ajax from 'lib/ajax';

const Item1 = (props) => {
  const {
    item1List
  } = props;
  const echartsRef = useRef(null);
  let chart = null;

  // var colors = [ '#07BA77', '#F4BB0C', '#35F3F1', '#2E86F9', '#FF8400', '#AAAAFC', '#FFEFAC', '#98CAFF', '#686BFF','#2892FF',];
  // const titleList = ['长红', '伦晚', '纽荷尔', '红肉', '福本', '林娜', '鹏娜', '泉脐橙', '汤姆逊', '梦脐橙'];

  const data = [
    { value: 10, name: '长红' },
    { value: 8, name: '伦晚'},
    { value: 12, name: '纽荷尔'},
    { value: 13, name: '红肉'},
    { value: 7, name: '福本'},
    { value: 14, name: '林娜'},
    { value: 6, name: '鹏娜'},
    { value: 15, name: '泉脐橙'},
    { value: 5, name: '汤姆逊'},
    { value: 10, name: '梦脐橙'},
  ];

  var obj = {
    长红: '10%',
    伦晚: '8%',
    纽荷尔: '12%',
    红肉: '13%',
    福本: '7%',
    林娜: '14%',
    鹏娜: '6%',
    泉脐橙: '15%',
    汤姆逊: '6%',
    梦脐橙: '10%',
  };

  const echartFun = (results) => {
    const colors = [ '#07BA77', '#F4BB0C', '#35F3F1', '#2E86F9', '#FF8400', '#AAAAFC', '#FFEFAC', '#98CAFF', '#686BFF','#2892FF',];
    const data = results.ratioData;
    const showData = results.showData;
    const titleList = showData.map(item => item.name);
    let obj = {};
    showData.forEach((item, index) => {
      obj[item.name] = item.value;
    });
    
    // const titleList = objs.orangeType.slice(1);
    // const obj = {};
    // const data = [];
    // let sum = 0;
    // titleList.forEach((item, index) => {
    //   obj[item] = 0;
    //   data.push({ value: 0, name: item });
    // });
    // item1List.forEach((item, index) => {
    //   const properties = item.properties || {};
    //   data.forEach((it, id) => {
    //     if(properties.zzpz === it.name) {
    //       it.value += Number(properties.zzmj);
    //       sum += Number(properties.zzmj);
    //     }
    //   });
    // });
    // data.forEach((item, index) => {
    //   const persent = (item.value / sum) * 100;
    //   let title = persent.toFixed(0) + '% ' + item.value.toFixed(0);
    //   obj[item.name] = title;
    // });

    // console.log(data, obj,'sssss')

    const options = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}:{d}%'
      },
      title: {
        text: '种植面积占比',
        x: '5%',
        y: '45%',
        textStyle: {
          fontSize: 16,
          fontWeight: 'normal',
          color: ['#3FECFF']
        },
        formatter: function(name) {
          return '总收购量 <br/> 140吨';
        },
      },
      legend: {
        orient: 'vertical',
        right: '5%',
        bottom: '10%',
        data: titleList,
        formatter: function(name) {
          let tmp = '';
          if(obj[name] === 'NaN%') {
            tmp = '';
          } else {
            tmp = obj[name];
          }
          const tmpList = tmp.split(' ');
          return '{title|' + name + '}:  {value|' + tmpList[0] + '} {value2|' + tmpList[1] + '' + '}';
          // return <div>111</div>
        },
        textStyle: {
          rich: {
            title: {
              fontSize: 13,
              lineHeight: 15,
              width: 50,
              color: 'rgb(0, 178, 246)'
            },
            value: {
              width: 30,
              fontSize: 13,
              lineHeight: 15,
              color: '#fff'
            },
            value2: {
              fontSize: 13,
              lineHeight: 15,
              color: '#fff'
            },
          }
        }
      },
      series: [
        {
          name: '面积占比',
          type: 'pie',
          center: ['16%', '50%'],
          radius: ['40%', '50%'],
          color: colors,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            show: true,
          },
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          data: data
        }
      ]
    };
    if (!chart) {
      chart = echarts.init(echartsRef.current);
    }
    chart.setOption(options);
  };

  useEffect(() => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/planting-area-ratio', params).then((res) => {
      if(res.state === 200) {
        const results = res?.results || {};
        echartFun(results);
      }
    }).catch(err => {
      console.log(err);
    });
    return () => {
    };
  }, []);

  // useEffect(() => {
  //   echartFun();
  // }, [item1List]);

  return (
    <div className="item2">
      <ItemHeader title="种植面积占比（亩）" />
      <div ref={echartsRef} className="item2-middle"></div>
    </div>
  );
};

export default Item1;
