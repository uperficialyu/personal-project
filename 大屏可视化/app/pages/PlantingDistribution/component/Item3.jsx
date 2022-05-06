import React, { useEffect } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import * as echarts from 'echarts';

const Item1 = () => {
  

  return (
    <div className="item3">
      <ItemHeader title="按地块种植面积排行TOP50" />
      <div className="item3-chart"></div>
    </div>
  );
};

export default Item1;
