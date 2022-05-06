import React, { useEffect } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import * as echarts from 'echarts';

import png1 from 'style/images/home/item1.png';
// import './Header.scss';

const Item2 = () => {

  // const { title } = this.props;
  return (
    <div className="item2">
      <ItemHeader title="种植品类占比/各乡镇占比" />
      <div className="item2-chart"></div>
    </div>
  );
};

export default Item2;
