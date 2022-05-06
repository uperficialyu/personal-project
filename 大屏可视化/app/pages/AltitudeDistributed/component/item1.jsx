import React, { useEffect, useState, useRef } from 'react';
import Ajax from 'lib/ajax';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import * as echarts from 'echarts';

const Item1 = (props) => {
  const {
    typeName,
    item1Data
  } = props;

  const echartsRef = useRef(null);
  let chart = null;

  const echartFun = () => {
    let dataX = [];
    let dataY = [];
    if(item1Data.length > 0) {
      const list = item1Data[0].values;
      list.forEach((item, index) => {
        dataY.push(item.key);
      });
      if(typeName === '全部') {
        for(let i = 0; i < dataY.length; i++) {
          dataX[i] = 0;
          for(let j = 0; j < item1Data.length; j++) {
            const values = item1Data[j].values || [];
            dataX[i] += values[i].value;
          }
        }
      } else {
        for(let i = 0; i < item1Data.length; i++) {
          if(item1Data[i].key === typeName) {
            const values = item1Data[i].values || [];
            dataX = values.map(item => item.value);
            break;
          }
        }
      }
    }

    const options = {
      xAxis: {
        type: 'category',
        nameTextStyle: {
          color: 'rgba(3, 216, 239, 1)',
          padding: [3, 30, 5, 4]
        },
        axisLine: {
          show: true, // 隐藏X轴轴线
          lineStyle: {
            color: 'rgba(101,198,231,0.2)'
          }
        },
        axisTick: {
          show: false // 隐藏X轴刻度
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: 'rgba(3, 216, 239, 1)'
          }
        },
        data: dataY,
      },
      yAxis: {
        type: 'value',
        name: '面积（亩）',
        nameTextStyle: {
          color: 'rgba(3, 216, 239, 1)',
          padding: [3, 30, 5, 4]
        },
        splitNumber: 4,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#214496'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: 'rgba(3, 216, 239, 1)'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(101,198,231,0.2)'
          }
        }
      },
      series: [
        {
          data: dataX,
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              color: '#FDB917'
            }
          },
        }
      ]
    };
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
  };

  useEffect(() => {
    echartFun();
    return () => {
    };
  }, [typeName, item1Data]);

  return (
    <div className="item2">
      <ItemHeader title="不同海拔脐橙面积" />
      <div ref={echartsRef} className="item2-middle"></div>
    </div>
  );
};

export default Item1;
