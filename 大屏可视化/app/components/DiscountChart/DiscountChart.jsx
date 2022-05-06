import React, { useState, useEffect } from 'react';
// import * as echarts from 'echarts/core';
import * as echarts from 'echarts';
import './DiscountChart.scss';

const DiscountChart = (props) => {
  const {
    result = [
      {fruitOutputValue: 0, xxggzchzh: 0, xxggzshr: 0, year: '2016'},
      {fruitOutputValue: 0, xxggzchzh: 0, xxggzshr: 0, year: '2017'},
      {fruitOutputValue: 0, xxggzchzh: 0, xxggzshr: 0, year: '2018'},
      {fruitOutputValue: 98, xxggzchzh: 4.36, xxggzshr: 2.59, year: '2019'},
      {fruitOutputValue: 0, xxggzchzh: 0, xxggzshr: 0, year: '2020'},
    ]
  } = props;

  const [x, setx] = useState(result.map(item => item.year));
  const [fruitOutputValue, setfruitOutputValue] = useState(result.map(item => item.fruitOutputValue));
  const [xxggzchzh, setxxggzchzh] = useState(result.map(item => item.xxggzchzh));
  const [xxggzshr, setxxggzshr] = useState(result.map(item => item.xxggzshr));

  const option = {
    grid: {
      top: "15%",
      left: "10%",
      right: '5%',
      bottom: "22%" // 也可设置left和right设置距离来控制图表的大小
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(0, 255, 233,0)"
              },
              {
                offset: 0.5,
                color: "rgba(255, 255, 255,1)"
              },
              {
                offset: 1,
                color: "rgba(0, 255, 233,0)"
              }
            ],
            global: false
          }
        }
      }
    },
    legend: {
      show: true,
      icon: 'rect',
      // data: ["农药利用率", "亩均农药使用量"],
      bottom: "2%",
      textStyle: {
        color: "#FFF"
      }
    },
    xAxis: {
      data: x,
      axisLine: {
        show: true, // 隐藏X轴轴线
        lineStyle: {
          color: "rgba(36, 53, 80, 1)"
        }
      },
      axisTick: {
        show: false // 隐藏X轴刻度
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(36, 53, 80, 1)"
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "rgba(3,216,239,1)"
        }
      }
    },
    yAxis: [
      {
        type: "value",
        name: "单位:亿元",
        nameTextStyle: {
          color: "rgba(3,216,239,1)"
        },
        splitNumber: 4,
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(36, 53, 80, 1)"
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgba(3,216,239,1)"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(36, 53, 80, 1)"
          }
        }
      },
      {
        type: "value",
        // name: "单位:万亩",
        nameTextStyle: {
          color: "rgba(3,216,239,1)"
        },
        splitNumber: 4,
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(36, 53, 80, 1)"
          }
        },
        axisLabel: {
          show: false,
          textStyle: {
            color: "rgba(3,216,239,1)"
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "rgba(36, 53, 80, 1)"
          }
        }
      }
    ],
    series: [
      {
        name: "水果产值",
        type: "line",
        smooth: false, // 平滑曲线显示
        showAllSymbol: true, // 显示所有图形。
        symbol: "emptyCircle", // 标记的图形为实心圆
        symbolSize: 5, // 标记的大小
        itemStyle: {
          // 折线拐点标志的样式
          color: "RGBA(3, 192, 250, 1)"
        },
        lineStyle: {
          color: "RGBA(3, 192, 250, 1)"
        },
        data: fruitOutputValue
      },
      {
        name: "观光产值",
        type: "line",
        smooth: false, // 平滑曲线显示
        showAllSymbol: true, // 显示所有图形。
        symbol: "emptyCircle", // 标记的图形为实心圆
        symbolSize: 5, // 标记的大小
        itemStyle: {
          // 折线拐点标志的样式
          color: "#FDB301"
        },
        lineStyle: {
          color: "#FDB301"
        },
        data: xxggzchzh
      },
      {
        yAxisIndex: 1,  // 配置多个y轴
        name: "观光收入",
        type: "line",
        smooth: false, // 平滑曲线显示
        showAllSymbol: true, // 显示所有图形。
        symbol: "emptyCircle", // 标记的图形为实心圆
        symbolSize: 5, // 标记的大小
        itemStyle: {
          // 折线拐点标志的样式
          color: "rgba(102, 200, 15, 1)"
        },
        lineStyle: {
          color: "rgba(102, 200, 15, 1)"
        },
        data: xxggzshr
      }
    ]
  };

  const initEchart = () => {
    const myChart = echarts.init(document.querySelector('.DiscountChart-1'));
    myChart.setOption(option);
  }

  useEffect(() => {
    initEchart()
    return () => {
    }
  }, [])

  return (
    <div className="DiscountChart">
      <div className="DiscountChart-1"></div>
    </div>
  )
}

export default DiscountChart;