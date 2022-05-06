import React, { useEffect } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import * as echarts from 'echarts';

import png1 from 'style/images/home/item1.png';
// import './Header.scss';

const Item1 = () => {
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(0, 255, 233,0)'
            }, {
              offset: 0.5,
              color: 'rgba(255, 255, 255,1)'
            }, {
              offset: 1,
              color: 'rgba(0, 255, 233,0)'
            }],
            global: false
          }
        }
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        show: true, // 隐藏X轴轴线
        lineStyle: {
          color: 'RGBA(3, 192, 250, 1)'
        },
        axisTick: {
          show: false // 隐藏X轴刻度
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(36, 53, 80, 1)'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: 'rgba(3,216,239,1)'
          }
        }
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false,
        alignWithLabel: false,
        length: 4,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#30ABE7',
        }
      },
      splitLine: {
        show: true,
        lineStyle:{
          color: ['#243550'],
          width: 1,
        }
  　　},
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      barWidth: '20px',
      // showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            { offset: 0, color: '#FFBA15' },
            { offset: 0.5, color: '#D87000' },
            { offset: 1, color: '#D87000' }
          ]
        )
      },
    }]
  };

  const initEchart = () => {
    const myChart = echarts.init(document.querySelector('.item6-chart'));
    myChart.setOption(options);
    // tools.loopShowTooltip(myChart, options, {
    //   loopSeries: true,
    //   interval: 3000
    // });
  };

  useEffect(() => {
    initEchart()
    return () => {
    }
  }, []);

  // const { title } = this.props;
  return (
    <div className="item6">
      <ItemHeader title="得分率" />
      <div className="item6-chart"></div>
    </div>
  );
};

export default Item1;
