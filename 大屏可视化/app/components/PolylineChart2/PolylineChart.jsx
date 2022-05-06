import React, { useEffect, useState, useRef } from 'react';
import * as echarts from 'echarts';
import './PolylineChart.scss';

const PolylineChart = (props) => {
  const {
    mounthList = ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
    valueList1 = [18, 19, 15, 19, 22, 24, 35],
    valueList2 = [13, 19, 15, 19, 2, 24, 35],
    colorsObj = {
      lineColor1: '#FFF006',
      lineColor2: '#1CF9B3',
      title1: '单位：w',
      title2: '单位：w',
      name1: '人流量',
      name2: '交易额',
    }
  } = props;

  const echartsRef = useRef(null);
  let chart;
  const update = () => {
    function createOption() {
      return {
        // backgroundColor: "#05224d",
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
          },
          // formatter: function (params) {
          //   console.log(params)
          //   var relVal = params[0].name + "<br/>";
          //   for (var i = 0, l = params.length; i < l; i++) {
          //     let unit = "";
          //     var name = params[i].seriesName;
          //     name === "销售量" && (unit = "万吨");
          //     name === "销售额" && (unit = "亿元");
          //     relVal +=
          //       params[i].marker +
          //       name +
          //       ": " +
          //       params[i].value +
          //       unit +
          //       "<br/>";
          //   }
          //   return relVal;
          // }
        },
        grid: {
          top: '15%',
          left: '5%',
          // right: '15%',
          bottom: '8%',
          containLabel: true,
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#00A0E9'
            },
          },
          axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
              color: '#CDDCFF',
              margin: 12,
            },
          },
          axisTick: { show: false, },
          data: mounthList,
        }],
        yAxis: [
          {
            name: colorsObj.title1, //y轴上方的单位
            nameLocation: 'end',
            nameTextStyle: {
              //y轴上方单位的颜色
              color: '#CDDCFF'
            },
            type: 'value',
            // min: 0,
            splitNumber: 5,  // 设置y轴刻度间隔个数
            splitLine: {
              show: true,
              lineStyle: {
                color: '#144088'
              }
            },
            axisLine: { show: false, },
            axisLabel: {
              margin: 20,
              textStyle: {
                color: '#CDDCFF',
              },
            },
            axisTick: { show: false, },
          },
          {
            name: colorsObj.title2, //y轴上方的单位
            nameLocation: 'end',
            nameTextStyle: {
              //y轴上方单位的颜色
              color: '#CDDCFF'
            },
            type: 'value',
            // min: 0,
            splitNumber: 5,  // 设置y轴刻度间隔个数
            splitLine: {
              show: true,
              lineStyle: {
                color: '#144088'
              }
            },
            axisLine: { show: false, },
            axisLabel: {
              margin: 20,
              textStyle: {
                color: '#CDDCFF',
              },
            },
            axisTick: { show: false, },
          }
        ],
        series: [
          {
            name: colorsObj.name1,
            type: 'line',
            smooth: true, //是否平滑曲线显示
            symbol: 'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            color: colorsObj.lineColor1,
            lineStyle: {
              normal: {
                color: colorsObj.lineColor1   // 线条颜色
              }
            },
            data: valueList1,
            yAxisIndex: 0,
          },
          {
            name: colorsObj.name2,
            type: 'line',
            smooth: true, //是否平滑曲线显示
            symbol: 'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            color: colorsObj.lineColor2,
            lineStyle: {
              normal: {
                color: colorsObj.lineColor2   // 线条颜色
              }
            },
            data: valueList2,
            yAxisIndex: 1,
          }
        ],
        legend: {
          data: [colorsObj.name1, colorsObj.name2],
          textStyle: { color: "#ffffff" }
        },
      }
    }
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
    chart.setOption(createOption());
  };

  useEffect(() => {
    update();
  }, [mounthList, valueList1, valueList2]);

  return (
    <div ref={echartsRef} className="polyline-chart"></div>
  );
};

export default PolylineChart;
