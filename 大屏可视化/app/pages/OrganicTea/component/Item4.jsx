import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import png from 'style/images/component/itemheadericon10.png';
import png1 from 'style/images/home/home12.png';
import png2 from 'style/images/home/home11.png';
import png3 from 'style/images/organicTea/organicTea5.png';

const Item1 = () => {

  return (
    <div className="organic-tea-item4">
      <ItemHeader png={png} title="加工企业" />
      <div className="organic-tea-item4-content">
        <img className="organic-tea-item4-content-left" src={png1} alt="" />
        <img  className="organic-tea-item4-content-right" src={png2} alt="" />
        <div className="organic-tea-item4-content-img">
          <img className="organic-tea-item4-content-img-child" src={png3} alt="" />
        </div>
      <p className='companyText'>浙江悠谷春农业开发有限公司</p>  
      </div>
    </div>
  );
};

export default Item1;
