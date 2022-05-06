import React, { useEffect} from 'react';
import * as echarts from 'echarts';
import './LineChart.scss';

const LineChart = (props) => {
  const colors = ['rgb(209,248,139)', 'rgb(115,201,245)', 'rgb(124,136,146)'];
  let chart;

  const update = () => {
    function createOption() {
      const axisData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
      let legendData = []
      return {
        color: colors,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          top: 20,
          right: 40,
          icon: 'rect',
          textStyle: {
            fontSize: 16,
            color: colors[2]
          },
          data: legendData
        },
        grid: {
          top: 60,
          bottom: 30,
          left: 80,
          right: 40
        },
        xAxis: [{
          type: 'category',
          axisTick: { show: false },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[2]
            }
          },
          axisLabel: {
            fontSize: 16
          },
          data: axisData
        }, {
          type: 'category',
          axisTick: { show: false },
          axisLine: { show: false }
        }],
        yAxis: [{
          type: 'value',
          axisTick: { show: false },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[2]
            }
          },
          axisLabel: {
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              type: 'dotted'
            }
          }
        }],
        series: [{
          name: legendData[0],
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          lineStyle: {
            width: 2
          },
          symbol: 'none',
          data: [5, 100, 70, 120, 80, 15, 200, 300, 195, 150, 80, 103]
        }, {
          name: legendData[1],
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 2
          },
          symbol: 'none',
          data: [10, 50, 80, 4, 90, 50, 105, 160, 111, 54, 108, 50]
        }]
      }
    }

    if (!chart) {
      chart = echarts.init(document.getElementById('average-age-chart2'))
    }
    chart.setOption(createOption())
  }

  useEffect(() => {
    update();
  }, [])

  return (
    <div className="line-chart">
      <div class="title-wrapper">
        <div class="title">Emily外卖平台骑手概况</div>
        <div class="sub-title">Rider Growth rate</div>
      </div>
      <div id="average-age-chart2" />
    </div>
  )
}

export default LineChart;