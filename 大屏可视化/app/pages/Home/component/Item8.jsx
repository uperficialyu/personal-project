import React, { useEffect, useState, useRef } from 'react';
import * as echarts from 'echarts';
import { message } from 'antd';
import Ajax from 'lib/ajax';
import api from 'api/api';


const Center = (props) => {
  const { obj, telescopic } = props;
  const echartsRef = useRef(null);
  let chart;

  const update = (dataX, dataY) => {
    // let option = {
    //   // backgroundColor: "#0e202d",
    //   tooltip: {},
    //   xAxis: {
    //     data: ["企业", "农专", "个体"],
    //     axisTick: {
    //       show: false,
    //     },
    //     axisLine: {
    //       show: false,
    //     },
    //     axisLabel: {
    //       show: false,
    //       textStyle: {
    //         color: "#e54035",
    //       },
    //     },
    //   },
    //   yAxis: {
    //     splitLine: {
    //       show: false,
    //     },
    //     axisTick: {
    //       show: false,
    //     },
    //     axisLine: {
    //       show: false,
    //     },
    //     axisLabel: {
    //       show: false,
    //     },
    //   },
    //   series: [
    //     {
    //       name: "年报上报率3",
    //       type: "pictorialBar",
    //       symbolSize: [100, 45],
    //       symbolOffset: [0, -20],
    //       z: 12,
    //       itemStyle: {
    //         normal: {
    //           color: "#14b1eb",
    //         },
    //       },
    //       data: [
    //         {
    //           value: 100,
    //           symbolPosition: "end",
    //         },
    //         {
    //           value: 50,
    //           symbolPosition: "end",
    //         },
    //         {
    //           value: 20,
    //           symbolPosition: "end",
    //         },
    //       ],
    //     },
    //     {
    //       name: "年报上报率2",
    //       type: "pictorialBar",
    //       symbolSize: [100, 45],
    //       symbolOffset: [0, 20],
    //       z: 12,
    //       itemStyle: {
    //         normal: {
    //           color: "#14b1eb",
    //         },
    //       },
    //       data: [100, 50, 20],
    //     },
    //     {
    //       name: "年报上报率1",
    //       type: "pictorialBar",
    //       symbolSize: [150, 75],
    //       symbolOffset: [0, 37],
    //       z: 11,
    //       itemStyle: {
    //         normal: {
    //           color: "transparent",
    //           borderColor: "#14b1eb",
    //           borderWidth: 5,
    //         },
    //       },
    //       data: [100, 50, 20],
    //     },
    //     {
    //       name: "年报上报率",
    //       type: "pictorialBar",
    //       symbolSize: [200, 100],
    //       symbolOffset: [0, 50],
    //       z: 10,
    //       itemStyle: {
    //         normal: {
    //           color: "transparent",
    //           borderColor: "#14b1eb",
    //           borderType: "dashed",
    //           borderWidth: 5,
    //         },
    //       },
    //       data: [100, 50, 20],
    //     },
    //     {
    //       type: "bar",
    //       itemStyle: {
    //         normal: {
    //           color: "#14b1eb",
    //           opacity: 0.7,
    //         },
    //       },
    //       silent: true,
    //       barWidth: 100,
    //       barGap: "-100%", // Make series be overlap
    //       data: [100, 50, 20],
    //     },
    //   ],
    // };
    

    let option = {
      // backgroundColor: "#00265f",
      title: {
        // text: "政策补贴额度",
        x: "center",
        y: "4%",
        textStyle: {
          color: "#fff",
          fontSize: "22",
        },
        subtextStyle: {
          color: "#90979c",
          fontSize: "16",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        // top: "15%",
        // right: "3%",
        // left: "25%",
        // bottom: "12%",
      },
      xAxis: [
        {
          type: "category",
          data: dataX,
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.12)",
            },
          },
          axisLabel: {
            margin: 10,
            color: "#e2e9ff",
            textStyle: {
              fontSize: 12,
            },
          },
        },
      ],
      yAxis: [
        {
          // name: "单位：万元",
          axisLabel: {
            formatter: "{value}",
            color: "#e2e9ff",
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgba(255,255,255,1)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.12)",
            },
          },
        },
      ],
      series: [
        {
          type: "bar",
          data: dataY,
          barWidth: "20px",
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0,244,255,1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0,77,167,1)", // 100% 处的颜色
                  },
                ],
                false
              ),
              barBorderRadius: [30, 30, 30, 30],
              shadowColor: "rgba(0,160,221,1)",
              shadowBlur: 4,
            },
          },
          label: {
            normal: {
              show: true,
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: "rgba(0,160,221,0.1)",
              borderRadius: 200,
              position: ["-8", "-60"],
              distance: 1,
              formatter: ["    {d|●}", " {a|{c}}     \n", "    {b|}"].join(","),
              rich: {
                d: {
                  color: "#3CDDCF",
                },
                a: {
                  color: "#fff",
                  align: "center",
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: "#234e6c",
                  align: "left",
                },
              },
            },
          },
        },
      ],
    };
    if (!chart) {
      chart = echarts.init(echartsRef.current);
    }
    chart.setOption(option);
  }

  useEffect(() => {
    if(!obj.leaderName || !obj.leaderId) return;
    const params = {
      pageSize: 100,
      current: 1,
      leaderName: obj.leaderName,
      leaderId: obj.leaderId,
    }
    Ajax('get', api.home.words, params).then((res)=> {
      if(res.state === 200) {
        const list = res.results.list || [];
        const dataX = [];
        const dataY = [];
        list.forEach((item, index) => {
          dataX.push(item.word);
          dataY.push(item.count);
        });
        update(dataX, dataY);
      } else {
        message.error(res.msg);
      }
    }).catch(err=> {
      console.log(err);
    });
  }, [obj, telescopic]);

  return (
    <div className="home-item8">
      <div className='home-item-title'>热点词频</div>
      <div ref={echartsRef} className='home-item8-chart'></div>
    </div>
  );
};

export default Center;
