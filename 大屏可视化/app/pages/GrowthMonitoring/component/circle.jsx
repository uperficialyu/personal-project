import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const Item1 = (props) => {
  const {
    title,
    data = [],
  } = props;

  const titleList = ['较好', '较差', '齐平'];

  const echartsRef = useRef(null);
  let chart = null;

  var colors = [
    '#0036D4',
    '#3FECFF',
    '#4C63F2',
    '#FF610B',
    '#59D267',
    '#FDD100',
    '#00A1FD',
    '#FF7DA4'
  ];

  // const data = [
  //   { value: 11, name: '较好' },
  //   { value: 56.8, name: '较差'},
  //   { value: 12.4, name: '齐平'},
  // ];

  const obj = {};
  for(let i = 0; i< data.length; i++) {
    obj[data[i].name] = data[i].value
  }

  // var obj = {
  //   较好: 11,
  //   较差: 56.8,
  //   齐平: 12.4,
  // };

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}:{d}%'
    },
    title: {
      text: title,
      x: '10%',
      y: '30%',
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
      right: '30%',
      bottom: '10%',
      data: titleList,
      formatter: function(name) {
        return '{title|' + name + '}:   {value|' + obj[name] + '' + '}';
      },
      textStyle: {
        rich: {
          title: {
            fontSize: 13,
            lineHeight: 15,
            color: 'rgb(0, 178, 246)'
          },
          value: {
            fontSize: 13,
            lineHeight: 15,
            color: '#fff'
          }
        }
      }
    },
    series: [
      // {
      //   name: '质量比重',
      //   tooltip: {
      //     show: false
      //   },
      //   type: 'pie',
      //   center: ['30%', '35%'],
      //   selectedMode: 'single',
      //   radius: [0, '40%'],
      //   itemStyle: {
      //     normal: {
      //       label: {
      //         show: false
      //       },
      //       labelLine: {
      //         show: false
      //       }
      //     }
      //   },
      //   color: colors,
      //   data: [
      //     {
      //       value: 335,
      //       name: '直达'
      //     }
      //   ]
      // },
      {
        name: '质量比重',
        type: 'pie',
        center: ['30%', '35%'],
        radius: ['40%', '50%'],
        color: colors,
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          show: false
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

  const echartFun = () => {
    if (!chart) {
      chart = echarts.init(echartsRef.current);
      // let currentIndex = -1;
      // var dataLen = 7;
      // dataLen > 0 && setInterval(function () {
      //   // 取消之前高亮的图形
      //   chart.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   });
      //   currentIndex = (currentIndex + 1) % dataLen;
      //   // 高亮当前图形
      //   chart.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   });
      //   // 显示 tooltip
      //   chart.dispatchAction({
      //     type: 'showTip',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   });
      // }, 3000);
    }
    chart.setOption(options);
  }

  useEffect(() => {
    echartFun();
  }, [data]);

  return (
    <div ref={echartsRef} className="circle">
    </div>
  );
};

export default Item1;
