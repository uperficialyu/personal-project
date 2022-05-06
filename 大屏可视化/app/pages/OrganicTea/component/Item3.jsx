import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import ItemList from 'components/ItemList/ItemList';
import PolylineChart from 'components/PolylineChart/PolylineChart';
import Modal from 'components/Modal/Modal';
import png from 'style/images/component/itemheadericon9.png';
import png2 from 'style/images/organicTea/organicTea15.jpg';
import png3 from 'style/images/organicTea/organicTea16.jpg';
import png4 from 'style/images/organicTea/organicTea17.jpg';
import png5 from 'style/images/organicTea/organicTea18.jpg';
import png6 from 'style/images/organicTea/organicTea19.jpg';
import png7 from 'style/images/organicTea/organicTea20.jpg';
import png8 from 'style/images/organicTea/organicTea21.jpg';
import png9 from 'style/images/organicTea/organicTea22.jpg';
import png10 from 'style/images/organicTea/organicTea23.jpg';
import png11 from 'style/images/organicTea/organicTea24.jpg';
import png12 from 'style/images/organicTea/organicTea25.jpg';
import png13 from 'style/images/organicTea/organicTea26.jpg';
import png14 from 'style/images/organicTea/organicTea27.jpg';
import png15 from 'style/images/organicTea/organicTea28.jpg';

const Item1 = () => {
  const [visible, setvisible] = useState(false);
  const [imgurl, setimgurl] = useState([]);
  const titleList = ['检测主体', '检测项', '检测时间', '检测结果', '检测报告'];
  const contentList = [
    {title1: '浙江悠谷春农业开发有限公司', title2: '农残检测', title3: '2022-03-10', title4: '合格', title5: '查看', arr: [png2, png3, png4, png5]},
    {title1: '浙江卧龙湾农业开发有限公司', title2: '农残检测', title3: '2022-03-10', title4: '合格', title5: '查看', arr: [png6, png7, png8, png9]},
    {title1: '松阳县绿茗峰茶业有限公司', title2: '农残检测', title3: '2022-03-10', title4: '合格', title5: '查看', arr: [png10, png11, png12, png13, png14, png15]},
  ]

  const onClose = () => {
    setvisible(false);
  }

  const handleOpenModel = (item) => {
    setimgurl(item.arr);
    setvisible(true);
  }

  return (
    <div className="organic-tea-item3">
      <ItemHeader png={png} title="质量检测" />
      <div className="organic-tea-item3-content">
        <div className="organic-tea-item3-content-title">
          {
            titleList.map((item, index) => {
              return (
                <div className="organic-tea-item3-content-title-div">{item}</div>
              )
            })
          }
        </div>
        <div className="organic-tea-item3-content-bottom">
          {
            contentList.map((item, index) => {
              return (
                <div onClick={() => handleOpenModel(item)} className="organic-tea-item3-content-bottom-col">
                  <div title={item.title1} className="organic-tea-item3-content-bottom-row">{item.title1.slice(0, 5)}</div>
                  <div className="organic-tea-item3-content-bottom-row">{item.title2}</div>
                  <div className="organic-tea-item3-content-bottom-row">{item.title3}</div>
                  <div className="organic-tea-item3-content-bottom-row">{item.title4}</div>
                  <div className="organic-tea-item3-content-bottom-row">{item.title5}</div>
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
        <div style={{overflowY: 'auto', height: 350}} className="organicTea-model-div">
          {
            imgurl.map((item, index) => {
              return (
                <div><img style={{width: 250,height: 350}} src={item} alt="" /></div>
              )
            })
          }
        </div>
      </Modal>
    </div>
  );
};

export default Item1;
