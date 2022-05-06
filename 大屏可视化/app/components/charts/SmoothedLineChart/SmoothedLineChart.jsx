import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import './SmoothedLineChart.scss';

const SmoothedLineChart = (props) => {
  const {
    title = '野藤葡萄肥药“双减”监测',
    dataY = [
      [23, 17,16, 13,11],
      [201,187, 156, 134, 112,],
      [21,87, 56, 34, 12,],
    ],
    dataX = ["2016", "2017", "2018", "2019", "2020"],
    unit = '单位:吨',
    titleList = ['化肥', '农药', '猪肉'],
    colorList = ['RGBA(3, 192, 250, 1)', '#FDB301', '#ccc']
  } = props;

  const options = {
    grid: {
      top: "15%",
      left: "10%",
      right: '10%',
      bottom: "10%" // 也可设置left和right设置距离来控制图表的大小
    },
    tooltip: {
      trigger: "axis",
      //  formatter: "{a}: {c} (万人)",
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
      top: "top",
      right: '10%',
      textStyle: {
        color: "#FFF"
      }
    },
    xAxis: {
      data: dataX,
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
          color: "#FFF"
        }
      }
    },
    yAxis: [
      {
        type: "value",
        name: unit,
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
        name: "化肥",
        type: "line",
        smooth: false, // 平滑曲线显示
        showallnewSymbol: true, // 显示所有图形。
        symbol: "emptyCircle", // 标记的图形为实心圆
        symbolSize: 5, // 标记的大小
        itemStyle: {
          // 折线拐点标志的样式
          color: "RGBA(3, 192, 250, 1)"
        },
        lineStyle: {
          color: "RGBA(3, 192, 250, 1)"
        },
        data: [23, 17,16, 13,11]
      },
      {
        name: "农药",
        type: "line",
        // yAxisIndex: 1,  // 配置多个y轴
        smooth: false, // 平滑曲线显示
        showallnewSymbol: true, // 显示所有图形。
        symbol: "emptyCircle", // 标记的图形为实心圆
        symbolSize: 5, // 标记的大小
        itemStyle: {
          // 折线拐点标志的样式
          color: "#FDB301"
        },
        lineStyle: {
          color: "#FDB301"
        },
        data: [201,187, 156, 134, 112,],
      },
    ]
  };

  options.series = dataY.map((item, index) => {
    const obj =  {
      name: "化肥",
      type: "line",
      smooth: false, // 平滑曲线显示
      showallnewSymbol: true, // 显示所有图形。
      symbol: "emptyCircle", // 标记的图形为实心圆
      symbolSize: 5, // 标记的大小
      itemStyle: {
        // 折线拐点标志的样式
        color: "RGBA(3, 192, 250, 1)"
      },
      lineStyle: {
        color: "RGBA(3, 192, 250, 1)"
      },
      data: [23, 17,16, 13,11]
    };
    obj.name = titleList[index];
    obj.itemStyle.color = colorList[index];
    obj.lineStyle.color = colorList[index];
    obj.data = item;
    return obj;
  });

  const initEchart = () => {
    const myChart = echarts.init(document.querySelector('.smoothed-line-chart-chart'));
    myChart.setOption(options);
    tools.loopShowTooltip(myChart, options, {
      loopSeries: true,
      interval: 3000
    });
  }

  useEffect(() => {
    initEchart()
    return () => {
    }
  }, [])

  return (
    <div className="smoothed-line-chart">
      <p className="smoothed-line-chart-title">{title}</p>
      <div className="smoothed-line-chart-chart"></div>
    </div>
  )
}

export default SmoothedLineChart;