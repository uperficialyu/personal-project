import React, { useEffect, useState, useRef } from 'react';
import * as echarts from 'echarts';
import './PolylineChart.scss';

const PolylineChart = (props) => {
  const {
    mounthList = ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
    valueList = [18, 19, 15, 19, 22, 24, 35],
    colorsObj = {
      lineColor: 'rgba(216, 103, 248, 1) ',
      title: '单位：w'
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
          }
        },
        grid: {
          top: '15%',
          left: '5%',
          // right: '%',
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
        yAxis: [{
          name: colorsObj.title, //y轴上方的单位
          nameLocation: 'end',
          nameTextStyle: {
            //y轴上方单位的颜色
            color: '#CDDCFF'
          },
          type: 'value',
          min: 0,
          // max: 1023.46,
          // splitNumber: 7,
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
        }],
        // formatter: '{a} <br/>{b}: {c}w',
        series: [{
          name: '数据显示',
          type: 'line',
          smooth: true, //是否平滑曲线显示
          symbol: 'circle',  // 默认是空心圆（中间是白色的），改成实心圆
          color: '#FFF',
          // color:'rgba(101, 60, 255, 0.3)',
          // symbolSize: 15,

          lineStyle: {
            normal: {
              color: colorsObj.lineColor   // 线条颜色
            }
          },
          areaStyle: { //区域填充样式
            normal: {
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(7, 27, 82, 1)' },
                { offset: 0.3, color: 'rgba(57, 81, 135, 0.91)' },
                { offset: 1, color: 'rgba(57, 81, 135, 0)' }
              ], false),

              // shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
          },
          data: valueList
        }
        ]
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
  }, [mounthList, valueList]);

  return (
    <div ref={echartsRef} className="polyline-chart"></div>
  );
};

export default PolylineChart;
