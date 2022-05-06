import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import Select from 'components/Select/Select';
// import Select from 'react-select';
import * as echarts from 'echarts';

const Item1 = () => {
  const [townValue, settownValue] = useState('all');
  const [time, setTime] = useState('now');
  const echartsRef = useRef(null);
  let chart = null;

  const dataX = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月'];
  let dataY1 = [0.464366754058279, 0.558203770409544, 0.475463370660264, 0.517723405737147, 0.517723405737147, 0.664310816205597, 0.664310816205597, 0.673363049795579, 0.673363049795579, 0.57121369435194, 0.555155454386834, 0.478629961, 0.408587815];
  let dataY2 = [0.341611206081875, 0.275780384424541, 0.404439832079093, 0.35794934467761, 0.582336629871431, 0.492227205645728, 0.465199298453581, 0.45749418558578, 0.577137164910159, 0.57121369435194, 0.493426838223462, 0.526783421, 0.386699129];

  dataY1 = dataY1.map(item => item.toFixed(2));
  dataY2 = dataY2.map(item => item.toFixed(2));

  // 切换县
  const townSelect = (e) => {
    const dom = document.getElementById('soil-iframe').contentWindow;
    const value = e.target.value;
    settownValue(value);
    dom.town_selectClicl(value);
  };

  const echartFun1 = () => {
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
          name: '',
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
          name: '',
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
        {
          name: '历史',
          type: 'line',
          smooth: true, // 是否平滑曲线显示
          showAllSymbol: false,
          symbol: 'circle',
          symbolSize: 5,
          // symbol: 'none',
          lineStyle: {
            normal: {
              color: '#4EAAFF' // 线条颜色
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
            color: 'rgba(24, 255, 242, 1)',
            borderColor: 'rgba(24, 255, 242, 1)',
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
                    color: 'rgba(24, 255, 242, 0.28)'
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(24, 255, 242, 0.1)'
                  }
                ],
                false
              )
            }
          },
          data: dataY2
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
    chart.setOption(op, true);
  };

  const timeSelect = (e) => {
    const value = e.target.value;
    setTime(value);
    if (value === 'now') {
      echartFun1();
    } else if (value === 'last') {
      echartFun();
    }
  };

  const goEchart = () => {
    if (time === 'now') {
      echartFun1();
    } else if (time === 'last') {
      echartFun();
    }
  };

  useEffect(() => {
    echartFun1();
  }, []);




  return (
    <div className="item2">
      <ItemHeader title="生长过程曲线" />
      <div ref={echartsRef} className="item2-middle"></div>
      <div className="item2-bottom">
        <div>
          <select onChange={timeSelect} value={time} className="item2-select2" name="" id="">
            <option value="now">今年</option>
            <option value="last">历年</option>
          </select>
        </div>

        {/* <div onClick={goEchart} className="item2-compare">对比</div> */}
      </div>
    </div>
  );
};

export default Item1;
