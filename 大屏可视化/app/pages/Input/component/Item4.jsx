import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Ajax from 'lib/ajax';
import { message } from 'antd';

const Item4 = () => {
  const echartsRef = useRef(null);
  let chart = null;

  // const dataY = ['北', '东北', '东', '东南', '南', '西南', '西', '西北'];

  const echartFun = (dataX, dataY) => {
    const options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true
          }
        }
      },
      grid: {
        left: 80,
        // right: 40,
        // bottom: '19%',
        // top: 107,
        // containLabel: true
      },
      xAxis: {
        type: 'category',
        nameTextStyle: {
          color: 'rgba(3, 216, 239, 1)',
          padding: [3, 30, 5, 4],
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
        data: dataX,
      },
      yAxis: {
        type: 'value',
        name: '单位：笔',
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
          data: dataY,
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              color: '#4FACFE'
            },
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#4FACFE' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#00F2FE' }
            ])
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

  // useEffect(() => {
  //   echartFun();
  // }, []);

  useEffect(() => {
    let params = {
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/inputs-30days-account', params).then((res) => {
      if (res.state === 200) {
        const result = res?.results || {};
        const dataX = [];
        const dataY = [];
        result.forEach(item => {
          dataX.push(item.title);
          dataY.push(item.values);
        });
        echartFun(dataX, dataY);
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="item4">
      <div className="item4-title">近30天区域店铺台账信息</div>
      <div ref={echartsRef} className="item4-chart"></div>
    </div>
  );
};

export default Item4;
