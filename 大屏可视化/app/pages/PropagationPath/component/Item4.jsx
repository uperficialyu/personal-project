import React, { useEffect, useState, useRef } from 'react';
import * as echarts from 'echarts';
import Ajax from 'lib/ajax';
import api from 'api/api';


const Item1 = (props) => {
  const { obj } = props;
  const echartsRef = useRef(null);
  let chart;

  const update = (results) => {
    const size = 60;
    const size1 = 30;
    const yy = 200;
    const yy1 = 250;

    let data = [
      // {
      //   name: "中国传媒大学",
      //   x: 0,
      //   y: yy,
      //   symbolSize: 100,
      //   category: "中国传媒大学",
      //   draggable: "true",
      // },
      // {
      //   name: "经管学部",
      //   x: 10,
      //   y: yy1,
      //   symbolSize: size,
      //   category: "经管学部",
      //   draggable: "true",
      // },
      // {
      //   name: "商学院",
      //   x: 20,
      //   y: yy,
      //   symbolSize: size1,
      //   category: "经管学部",
      //   draggable: "true",
      // },
      // {
      //   x: 30,
      //   y: yy1,
      //   name: "文化发展研究所",
      //   symbolSize: size1,
      //   category: "经管学部",
      //   draggable: "true",
      // },
      // {
      //   x: 40,
      //   y: yy,
      //   name: "经济与管理学院",
      //   symbolSize: size1,
      //   category: "经管学部",
      //   draggable: "true",
      //   value: 1,
      // },
      // {
      //   x: 50,
      //   y: yy1,
      //   name: "雄安新区发展研究院",
      //   symbolSize: size1,
      //   category: "雄安新区发展研究院",
      //   draggable: "true",
      // },
      // {
      //   x: 80,
      //   y: yy,
      //   name: "文法学部",
      //   symbolSize: size,
      //   category: "文法学部",
      //   draggable: "true",
      // },
      // {
      //   x: 90,
      //   y: yy1,
      //   name: "汉语国际教育专业",
      //   symbolSize: size1,
      //   category: "文法学部",
      //   draggable: "true",
      // },
      // {
      //   x: 100,
      //   y: yy,
      //   name: "文学院",
      //   symbolSize: size1,
      //   category: "文法学部",
      //   draggable: "true",
      // },
      // {
      //   x: 110,
      //   y: yy1,
      //   name: "政治与法律学院",
      //   symbolSize: size1,
      //   category: "文法学部",
      //   draggable: "true",
      // },
      // {
      //   x: 120,
      //   y: yy,
      //   name: "直属学院（机构）",
      //   symbolSize: size,
      //   category: "直属学院（机构）",
      //   draggable: "true",
      // },
      // {
      //   x: 130,
      //   y: yy1,
      //   name: "协同创新中心",
      //   symbolSize: size,
      //   category: "协同创新中心",
      //   draggable: "true",
      // },
      // {
      //   x: 140,
      //   y: yy,
      //   name: "新媒体研究院",
      //   symbolSize: size1,
      //   category: "协同创新中心",
      //   draggable: "true",
      // },
      // {
      //   x: 150,
      //   y: yy1,
      //   name: "传媒科学研究所",
      //   symbolSize: size1,
      //   category: "协同创新中心",
      //   draggable: "true",
      // },
      // {
      //   x: 170,
      //   y: yy1,
      //   name: "新闻传播学部",
      //   symbolSize: size,
      //   category: "新闻传播学部",
      //   draggable: "true",
      // },
      // {
      //   x: 180,
      //   y: yy,
      //   name: "新闻学院",
      //   symbolSize: size1,
      //   category: "新闻传播学部",
      //   draggable: "true",
      // },
      // {
      //   x: 190,
      //   y: yy1,
      //   name: "传播研究院",
      //   symbolSize: size1,
      //   category: "新闻传播学部",
      //   draggable: "true",
      // },
      // {
      //   x: 200,
      //   y: yy,
      //   name: "电视学院",
      //   symbolSize: size1,
      //   category: "新闻传播学部",
      //   draggable: "true",
      // },
      // {
      //   x: 210,
      //   y: yy1,
      //   name: "理工学部",
      //   symbolSize: size,
      //   category: "理工学部",
      //   draggable: "true",
      // },
      // {
      //   x: 220,
      //   y: yy,
      //   name: "信息工程学院",
      //   symbolSize: size1,
      //   category: "理工学部",
      //   draggable: "true",
      // },
      // {
      //   x: 230,
      //   y: yy1,
      //   name: "实验教学中心",
      //   symbolSize: size1,
      //   category: "理工学部",
      //   draggable: "true",
      // },
      // {
      //   x: 240,
      //   y: yy,
      //   name: "理学院",
      //   symbolSize: size1,
      //   category: "理工学部",
      //   draggable: "true",
      // },
      // {
      //   x: 250,
      //   y: yy1,
      //   name: "计算机学院",
      //   symbolSize: size1,
      //   category: "理工学部",
      //   draggable: "true",
      // },
      // {
      //   x: 260,
      //   y: yy,
      //   name: "艺术学部",
      //   symbolSize: size,
      //   category: "艺术学部",
      //   draggable: "true",
      // },
      // {
      //   x: 280,
      //   y: yy,
      //   name: "戏剧影视学院",
      //   symbolSize: size1,
      //   category: "艺术学部",
      //   draggable: "true",
      // },
      // {
      //   x: 290,
      //   y: yy1,
      //   name: "艺术教育中心",
      //   symbolSize: size1,
      //   category: "艺术学部",
      //   draggable: "true",
      // },
      // {
      //   x: 300,
      //   y: yy,
      //   name: "动画与艺术学院",
      //   symbolSize: size1,
      //   category: "艺术学部",
      //   draggable: "true",
      // },
      // {
      //   x: 310,
      //   y: yy1,
      //   name: "艺术研究院",
      //   symbolSize: size1,
      //   category: "艺术学部",
      //   draggable: "true",
      // },
      // {
      //   x: 320,
      //   y: yy,
      //   name: "音乐与录音艺术学院",
      //   symbolSize: size1,
      //   category: "艺术学部",
      //   draggable: "true",
      // },
    ]

    let links = [
      {
        source: "中国传媒大学",
        target: "经管学部",
      },
      {
        source: "中国传媒大学",
        target: "文法学部",
      },
      {
        source: "中国传媒大学",
        target: "直属学院（机构）",
      },
      {
        source: "中国传媒大学",
        target: "协同创新中心",
      },
      {
        source: "中国传媒大学",
        target: "新闻传播学部",
      },
      {
        source: "中国传媒大学",
        target: "理工学部",
      },
      {
        source: "中国传媒大学",
        target: "艺术学部",
      },
      {
        source: "经管学部",
        target: "商学院",
      },
      {
        source: "经管学部",
        target: "经济与管理学院",
      },
      {
        source: "经管学部",
        target: "文化发展研究所",
      },
      {
        source: "经管学部",
        target: "雄安新区发展研究院",
      },
      {
        source: "文法学部",
        target: "汉语国际教育专业",
      },
      {
        source: "文法学部",
        target: "文学院",
      },
      {
        source: "文法学部",
        target: "政治与法律学院",
      },
      {
        source: "协同创新中心",
        target: "新媒体研究院",
      },
      {
        source: "协同创新中心",
        target: "传媒科学研究所",
      },
      {
        source: "新闻传播学部",
        target: "新闻学院",
      },
      {
        source: "新闻传播学部",
        target: "传播研究院",
      },
      {
        source: "新闻传播学部",
        target: "电视学院",
      },
      {
        source: "理工学部",
        target: "信息工程学院",
      },
      {
        source: "理工学部",
        target: "实验教学中心",
      },
      {
        source: "理工学部",
        target: "理学院",
      },
      {
        source: "理工学部",
        target: "计算机学院",
      },
      {
        source: "艺术学部",
        target: "戏剧影视学院",
      },
      {
        source: "艺术学部",
        target: "艺术教育中心",
      },
      {
        source: "艺术学部",
        target: "动画与艺术学院",
      },
      {
        source: "艺术学部",
        target: "艺术研究院",
      },
      {
        source: "艺术学部",
        target: "音乐与录音艺术学院",
      },
    ]

    let categories = [
      // {
      //   name: "中国传媒大学",
      // },
      // {
      //   name: "经管学部",
      // },
      // {
      //   name: "雄安新区发展研究院",
      // },
      // {
      //   name: "文法学部",
      // },
      // {
      //   name: "直属学院（机构）",
      // },
      // {
      //   name: "协同创新中心",
      // },
      // {
      //   name: "新闻传播学部",
      // },
      // {
      //   name: "理工学部",
      // },
      // {
      //   name: "艺术学部",
      // },
    ]

    data.push({
      name: results.title,
      x: 0,
      y: yy,
      symbolSize: 100,
      category: results.title,
      draggable: "true",
    });
    categories.push(results.title);
    const pathDTOS = results?.pathDTOS || [];
    pathDTOS.forEach(item => {
      data.push({
        name: item.type,
        x: 10,
        y: yy1,
        symbolSize: size,
        category: item.type,
        draggable: "true",
      });
      links.push({
        source: results.title,
        target: item.type,
      });
      categories.push(item.type);
      const siteNames = item?.siteNames || [];
      siteNames.forEach(it => {
        data.push({
          x: 320,
          y: yy,
          name: it,
          symbolSize: size1,
          category: item.type,
          draggable: "true",
        });
        links.push({
          source: item.type,
          target: it,
        });
      })
    })

  

    let option = {
      title: {
        // text: "中国传媒大学教学单位分支图（制作人：展浩博201501213011）",
        top: "top",
        left: "left",
        textStyle: {
          color: "#f7f7f7",
        },
      },
      tooltip: {
        formatter: "{b}",
      },
      toolbox: {
        show: true,
        feature: {
          restore: {
            show: true,
          },
          saveAsImage: {
            show: true,
          },
        },
      },
      // backgroundColor: "#337ab7",
      animationDuration: 1000,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          name: "知识体系",
          type: "graph",
          layout: "force",
          force: {
            repulsion: 60,
            gravity: 0.1,
            edgeLength: 30,
            layoutAnimation: true,
          },
          data: data,
          links: links,
          categories: categories,
          roam: false,
          label: {
            normal: {
              show: true,
              position: "inside",
              formatter: "{b}",
              fontSize: 16,
              fontStyle: "600",
            },
          },
          lineStyle: {
            normal: {
              width: 6,
              color: "source",
              curveness: 0,
              type: "solid",
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
    if(!obj.docSource || !obj.docTitle) return;
    const params = {
      docSource: obj.docSource,
      newsTitle: obj.docTitle,
      publishTime: obj.docTime
    }
    Ajax('get', api.propagationPath.path, params).then((res) => {
      if (res.state === 200) {
        const results = res?.results;
        update(results)
      } else {
        message.error(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  }, [obj]);
  
  return (
    <div className="propagation-path-item4">
      <div className='propagation-path-item-title'>传播路径</div>
      <div ref={echartsRef} className='propagation-path-item4-chart'></div>
    </div>
  );
};

export default Item1;
