import React, { useEffect,useState } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import * as echarts from 'echarts';

import png0 from 'style/images/component/map-item-right.png';
import png1 from 'style/images/component/1.png';
import png2 from 'style/images/component/2.png';
import png3 from 'style/images/component/3.png';
import png4 from 'style/images/component/4.png';

import png5 from 'style/images/component/5.png';
import png6 from 'style/images/component/6.png';
import png7 from 'style/images/component/7.png';
import png8 from 'style/images/component/8.png';
import './MapItem2.scss';

const MapItem = (props) => {
  const {
    handleMapClick
  } = props;
  const [idx, setindex] = useState(0);

  const list = [
    {
      pic: png5,
      title: '卫星图',
    },
    {
      pic: png7,
      title: '行政区划图',
    },
    {
      pic: png6,
      title: '地形图',
    }
  ];

  const handleacitive = (index) => {
    setindex(index);
    handleMapClick(index);
  };

  // const { title } = this.props;
  return (
    <div className="map-item2">
        {
          list.map((item, index) => {
            return (
              <div onClick={() => handleacitive(index)} className={idx === index ? 'map-item2-big map-item2-big-active' : 'map-item2-big'}>
                <div className="map-item2-small" style={{background: `url(${item.pic})`}}>
                  <div className="map-item2-text">{item.title}</div>
                </div>
              </div>
            );
          })
        }
    </div>
  );
};

export default MapItem;
