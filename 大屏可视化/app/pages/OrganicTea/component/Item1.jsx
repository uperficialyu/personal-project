import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import png from 'style/images/component/itemheadericon8.png';
import png1 from 'style/images/organicTea/organicTea1.png';
import png2 from 'style/images/organicTea/organicTea2.png';
import png3 from 'style/images/organicTea/organicTea3.png';

const Item1 = () => {
  const list = [
    {title: '认证通过（亩）', value: 1070, png: png1},
    {title: '转换中（亩）', value: 2353.5, png: png2},
    {title: '5年发展目标（亩）', value: 10000, png: png3},
  ]

  return (
    <div className="organic-tea-item1">
      <ItemHeader png={png} title="有机茶面积" />
      <div className="organic-tea-item1-content">
        {
          list.map((item, index) => {
            return (
              <div className="organic-tea-item1-content-item">
                <div className="organic-tea-item1-content-item-top" style={{background: `url(${item.png}) no-repeat`}}>{item.value}</div>
                <div className="organic-tea-item1-content-item-bottom">{item.title}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Item1;
