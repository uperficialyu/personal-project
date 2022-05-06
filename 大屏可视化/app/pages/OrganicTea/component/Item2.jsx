import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import png from 'style/images/component/itemheadericon5.png';
import png1 from 'style/images/organicTea/organicTea-item2.png';

const Item1 = () => {

  return (
    <div className="organic-tea-item2">
      <ItemHeader png={png} title="溯源流程" />
      <div className="organic-tea-item2-pig"><img src={png1} alt="" /></div>
    </div>
  );
};

export default Item1;
