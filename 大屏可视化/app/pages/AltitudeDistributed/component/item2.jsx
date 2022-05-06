import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import * as echarts from 'echarts';

const Item2 = () => {
  const echartsRef = useRef(null);
  let chart = null;

  const dataX = ['2017', '2018', '2019', '2020', '2021'];
  const dataY1 = [50, 188, 200, 228, 267, 90, 24, 190, 0.2, 0.5];

  const echartFun = () => {
    const op = {
      grid: {
        top: '18%',
        left: '5%',
        right: '8%',
        bottom: '20%',
        containLabel: true
      },
      legend: {
        // 图例组件，颜色和名字
        left: '5%',
        data: [
          // {
          //   name: '种植面积'
          // },
          // {
          //   name: '产量(万吨)'
          // }
        ],
        textStyle: {
          color: '#FFF',
          fontStyle: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 12
        }
      },
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
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(0, 255, 233,0)'
                },
                {
                  offset: 0.3,
                  color: 'rgba(255, 255, 255,1)'
                },
                {
                  offset: 1,
                  color: 'rgba(0, 255, 233,0)'
                }
              ],
              global: false
            }
          }
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#122143'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0,
            color: '#03D8EF',
            fontSize: 14
          },
          data: dataX
        }
      ],
      yAxis: [
        {
          name: '产量:(吨)',
          nameTextStyle: {
            color: '#03D8EF',
            fontSize: 14
          },
          type: 'value',
          splitNumber: 3,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#122143'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#122143'
            }
          },
          axisLabel: {
            interval: 0,
            color: '#03D8EF',
            fontSize: 14
          }
        },
        {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '今年',
          type: 'line',
          smooth: true, // 是否平滑曲线显示
          showAllSymbol: false,
          symbol: 'circle',
          symbolSize: 5,
          // symbol: 'none',
          lineStyle: {
            normal: {
              color: '#FF984E' // 线条颜色
            }
          },
          label: {
            show: false,
            position: 'top',
            textStyle: {
              color: '#fff'
            }
          },
          itemStyle: {
            color: 'rgba(255, 152, 78, 1)',
            borderColor: 'rgba(255, 224, 129, 1)',
            borderWidth: 2
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(255, 152, 78, 0.28)'
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(255, 152, 78, 0.1)'
                  }
                ],
                false
              )
            }
          },
          data: dataY1
        },
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
    chart.setOption(op, true);
  };



  useEffect(() => {
    echartFun();
  }, []);

  return (
    <div className="item3">
      <ItemHeader title="产量趋势" />
      <div ref={echartsRef} className="item3-middle"></div>
    </div>
  )
}

export default Item2;
