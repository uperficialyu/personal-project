import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import ItemList from 'components/ItemList/ItemList';
import Modal from 'components/Modal/Modal';
import png from 'style/images/component/itemheadericon6.png';
import png1 from 'style/images/organicTea/organicTea4.png';

import png2 from 'style/images/organicTea/organicTea12.jpg';
import png3 from 'style/images/organicTea/organicTea13.jpg';
import png4 from 'style/images/organicTea/organicTea14.jpg';

import png5 from 'style/images/organicTea/organicTea10.jpg';
import png6 from 'style/images/organicTea/organicTea11.jpg';

const Item1 = () => {
  const [visible, setvisible] = useState(false);
  const [imgurl, setimgurl] = useState('');
  const titleList = ['企业名称', '操作'];
  const contentList = [
    {title1: '浙江悠谷春农业开发有限公司', title2: '查看证书', png: png2},
    {title1: '浙江卧龙湾农业开发有限公司', title2: '查看证书', png: png3},
    {title1: '松阳县绿茗峰茶业有限公司', title2: '查看证书', png: png4},
  ];


  const onClose = () => {
    setvisible(false);
  }

  const handleOpenModel = (item) => {
    setimgurl(item.png);
    setvisible(true);
  }


  return (
    <div className="organic-tea-item5">
      <ItemHeader png={png} title="认证证书" />
      <div className="organic-tea-item5-content">
        <div className="organic-tea-item5-content-title">
          {
            titleList.map((item, index) => {
              return (
                <div className="organic-tea-item5-content-title-div">{item}</div>
              )
            })
          }
        </div>
        <div className="organic-tea-item5-content-bottom">
          {
            contentList.map((item, index) => {
              return (
                <div onClick={() => handleOpenModel(item)} className="organic-tea-item5-content-bottom-col">
                  <div className="organic-tea-item5-content-bottom-row">{item.title1}</div>
                  <div className="organic-tea-item5-content-bottom-row">
                    <span>{item.title2}</span>&nbsp;
                    <img src={png1} alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Modal
        visible={visible}
        onClose={onClose}
      >
        <div >
          <img style={{width: 250,height: 350}} src={imgurl} alt="" />
        </div>
      </Modal>
    </div>
  );
};

export default Item1;
