import React, { useEffect, useState, useRef } from 'react';
import * as echarts from 'echarts';
import './BarChart.scss';

const BarChart = (props) => {
  const {
    data,
    dataX,
    dataY,
    myColor = ['#1CE49B', '#FFE000', '#F67533', '#DB342E', '#B1005D', '#790020'],
    textTitle = '',
    titlename
  } = props;

  const echartsRef = useRef(null);

  let chart;

  const update = () => {
    const option = {
      grid: {
        top: '20%',
        bottom: '18%'// 也可设置left和right设置距离来控制图表的大小
      },
      title: {
        text: textTitle,
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          textStyle: {
            color: '#fff'
          }
        }
      },
      legend: {
        show: false
      },
      xAxis: {
        name: '时间',
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
        data: dataX,
      },
      yAxis: [{
        type: 'value',
        name: '',
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
      }
      ],
      series: [
        {
          name: titlename,
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              color: (val) => {
                if (val.value < 35) {
                  return myColor[0];
                } else if (val.value < 75) {
                  return myColor[1];
                } else if (val.value < 115) {
                  return myColor[2];
                } else if (val.value < 250) {
                  return myColor[3];
                } else {
                  return myColor[4];
                }
              }
            }
          },
          // data: [23, 33, 44, 55, 33, 44]
          data: dataY,
        }
      ]
    };
    if (!chart) {
      chart = echarts.init(echartsRef.current);
      let currentIndex = -1;
      var dataLen = 7;
      dataLen > 0 && setInterval(function () {
        // 取消之前高亮的图形
        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen;
        // 高亮当前图形
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        chart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 3000);
    }
    chart.setOption(option);
  };

  useEffect(() => {
    update();
  }, [dataX, dataY]);
  
  return (
    <div ref={echartsRef} className="bar-chart"></div>
  );
};

export default BarChart;