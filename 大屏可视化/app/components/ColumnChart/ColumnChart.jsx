import React, { useEffect, useState, useRef } from 'react';
import * as echarts from 'echarts';
import './ColumnChart.scss';

const ColumnChart = (props) => {
  const {
    dataY = [],
    dataX = [],
    colorsObj = {
      color1: 'rgb(57,89,255,1)',
      color2: 'rgb(46,200,207,1)',
    }
  } = props;

  const echartsRef = useRef(null);
  let chart;

  const update = () => {
    const max = Math.max(dataX);
    const salvProMax = [max];
    // const salvProMax = [239]

    function createOption() {
      return {
        // backgroundColor: "#003366",
        grid: {
          left: "2%",
          right: "2%",
          bottom: "2%",
          top: "2%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return params[0].name + " : " + params[0].value;
          },
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: dataY,
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "12",
              },
            },
            data: dataX,
          },
        ],
        series: [
          {
            name: "值",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: colorsObj.color1,
                  },
                  {
                    offset: 1,
                    color: colorsObj.color2,
                  },
                ]),
              },
            },
            barWidth: 20,
            data: dataX,
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 20,
            barGap: "-100%",
            data: salvProMax,
            itemStyle: {
              normal: {
                color: "rgba(24,31,68,1)",
                barBorderRadius: 30,
              },
            },
          },
        ],
      }
    }
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
    chart.setOption(createOption());
  };

  useEffect(() => {
    update();
  }, [dataX, dataY]);

  return (
    <div ref={echartsRef} className="column-chart"></div>
  );
};

export default ColumnChart;
