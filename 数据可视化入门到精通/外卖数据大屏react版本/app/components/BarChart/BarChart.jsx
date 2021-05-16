import React, { useEffect} from 'react';
import useClock from '../TopHeader/Clock';
import * as echarts from 'echarts';
import './BarChart.scss';

const BarChart = (props) => {
  const { date, time, } = useClock();
  const {
    data
  } = props;

  let chart;

  const update = () => {
    function createOption() {
      const source = [
        ['指标', '国内', '海外'],
        ...data
      ]
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        color: ['rgb(29,248,138)', 'rgba(65,65,65,.5)'],
        grid: {
          left: 20,
          right: 0,
          bottom: 30,
          top: 20
        },
        dataset: {
          source
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
            lineStyle: {
              type: 'dotted'
            }
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: 'rgb(124,136,146)'
            }
          },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 16
          },
          axisTick: { show: false }
        },
        xAxis: {
          type: 'category',
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 16
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: 'rgb(124,136,146)'
            }
          }
        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            barWidth: 40
          },
          {
            type: 'bar',
            stack: 'total'
          }
        ]
      }
    }
    if (!chart) {
      chart = echarts.init(document.getElementById('average-age-chart3'))
    }
    chart.setOption(createOption());
  }

  useEffect(() => {
    update();
  }, []);
  
  return (
    <div className="bar-chart">
      <div className="title-wrapper">
        <div>
          <div className="title">当前热卖品类</div>
          <div className="sub-title">Hot Categories</div>
        </div>

        <div className="bar-chart-right">
          <div className="sub-title">最后更新时间：{date} {time}</div>
        </div>
      </div>

      <div id="average-age-chart3" />
    </div>
  )
}

export default BarChart;