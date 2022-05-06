import React, { useEffect } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import * as echarts from 'echarts';

import png0 from 'style/images/component/map-item-right.png';
import png1 from 'style/images/component/1.png';
import png2 from 'style/images/component/2.png';
import png3 from 'style/images/component/3.png';
import png4 from 'style/images/component/4.png';
import './MapItem.scss';

const MapItem = () => {

  const list = [png1, png2, png3, png4];

  // const { title } = this.props;
  return (
    <div className="map-item">
      <div className="map-item-left">
        {
          list.map((item, index) => {
            return (
              <div><img src={item} alt=""/></div>
            )
          })
        }
      </div>
      <div className="map-item-right">
        <img src={png0} alt=""/>
      </div>
    </div>
  );
};

export default MapItem;
