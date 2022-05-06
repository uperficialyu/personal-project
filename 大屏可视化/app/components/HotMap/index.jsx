import React, {
  useEffect,
  useCallback,
  useRef,
  useState,
  useMemo,
} from "react";
import * as echarts from 'echarts';
import chinaJson from "./china.json";
import chinaJson1 from "./china1.json";
export default (props) => {
  const { width = "380px", height = "350px", data = [] } = props;
  const areaRef = useRef(null);
  const [geoCoordMap, setgeoCoordMap] = useState({});
  let timeTicket = null;
  let count = 0;
  let dataLength = data.length;
  const wordsEcharts = () => {
    echarts.registerMap("china", chinaJson1);
    let myCharts = echarts.init(areaRef.current);
    let option = {
      visualMap: {
        //图例值控制
        min: 1,
        max: 5000,
        calculable: false,
        show: true,
        top: 175,
        left: 5,
        text: ["高", "低"],
        itemWidth: 10, //图形的宽度，即长条的宽度。
        itemHeight: 80,
        color: ["#FF00FF", "#0000FF", "#00FF7F"], //---->大到小
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        enterable: true,
        transitionDuration: 1,
        formatter: (e) => {
          if (e.data) {
            return `${e.data.name}:${e.data.value}`;
          } else {
            return "";
          }
        },
        textStyle: {
          color: "#fff",
          decoration: "none",
        },
      },
      series: [
        {
          name: "",
          type: "map",
          zoom: 1.15,
          mapType: "china",
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },
          label: {
            normal: {
              //静态的时候展示样式
              show: false, //是否显示地图省份得名称
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
            emphasis: {
              //动态展示的样式
              color: "#fff",
            },
          },
          data: data,
        },
      ],
    };
    myCharts.setOption(option);
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function() {
      myCharts.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
      });
      myCharts.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: count % dataLength,
      });
      myCharts.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: count % dataLength,
      });
      count++;
    }, 1000);
    myCharts.on("mouseover", function(params) {
      clearInterval(timeTicket);
      myCharts.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
      });
      myCharts.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: params.dataIndex,
      });
      myCharts.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: params.dataIndex,
      });
    });
    myCharts.on("mouseout", function(params) {
      timeTicket && clearInterval(timeTicket);
      timeTicket = setInterval(function() {
        myCharts.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
        });
        myCharts.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: count % dataLength,
        });
        myCharts.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: count % dataLength,
        });
        count++;
      }, 1000);
    });
    window.addEventListener("resize", () => {
      myCharts.resize();
    });
  };
  useEffect(() => {
    (function() {
      const { features } = chinaJson1;
      let obj = {};
      if (chinaJson1) {
        features.map((item, index) => {
          obj[item.properties.name] = item.properties.center;
        });
      }
      setgeoCoordMap(obj);
    })();
  }, [chinaJson1, setgeoCoordMap]);

  useEffect(() => {
    if (data.length > 0) {
      clearInterval(timeTicket);
      wordsEcharts();
    }
  }, [data]);
  return (
    <>
      <div ref={areaRef} style={{ width: width, height: height }}></div>
    </>
  );
};
