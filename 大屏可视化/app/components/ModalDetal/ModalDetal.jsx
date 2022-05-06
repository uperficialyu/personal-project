import React, { Component } from 'react';
import process from 'style/images/component/process.png';
import text from 'style/images/component/text.png';
import formula5 from 'style/images/component/formula5.png';
import formula6 from 'style/images/component/formula6.png';
import formula7 from 'style/images/component/formula7.png';
import formula13 from 'style/images/component/formula13.png';
import formula14 from 'style/images/component/formula14.png';
import './ModalDetal.scss';

const ModalDetal = (prosp) => {
  const {
    handleClose
  } = prosp;

  return (
    <div className="modal-detail">
      <div className="modal-detail-title">植被干旱指数TVDI模型</div>
      <div className="modal-detail-content">
        <div className="modal-detail-content-pic"><img src={process} alt="" /></div>
        <div className="modal-detail-content-pic2">
          <div className="modal-detail-content-title">TVDI模型流程图</div>
          <div className="modal-detail-content-title2">二、理论依据</div>
          <div className="modal-detail-content-title3">1、NDVI-TS空间</div>
          <p className="modal-detail-content-p">研究表明，归一化植被指数(NDVI)和陆面地表温度(Ts)之间存在明显的负相关关系，并且与土壤湿度密切相关。以遥感资料得到的NDVI和Ts为横纵坐标得到的散点图呈三角形，这就是所谓的 NDVI-TS 空间。</p>
          <div className="modal-detail-content-img"><img src={formula5} alt="" /></div>
          <div className="modal-detail-content-center">温度植被干旱指数原理示意图</div>

          <p className="modal-detail-content-p">纵轴表示不同湿度的裸土温度，随着湿度的降低，温度升高，横轴表示植被指数 由裸地到最大(接近于1)，斜线表示在一定的土壤湿度下，地表温度随植被指数增加而下降。在NDVI-Ts特征空间中，不同的等值线代表不同的干旱程度。由NDVI-Ts空间提取湿边和干边方程分别为:</p>

          <div className="modal-detail-content-p1">
            <span>湿边方程：</span>
            <img src={formula6} alt="" />
          </div>
          <div className="modal-detail-content-p1">
            <span>干边方程：</span>
            <img src={formula7} alt="" />
          </div>

          <p className="modal-detail-content-p">式中，Ts_min为相应NVDI的最低陆地表面温度，亦即湿边温度，Ts_max为在相应NDVI下的最高陆地表面温度，亦即干边温度：a1，b1，a2，b2，为回归系数，分别代表湿边和干边方程截距和斜率。</p>

          <div className="modal-detail-content-title3">2、植被干旱指数TVDI计算</div>
          <p className="modal-detail-content-p">根据上述植被指数和地表温度的关系，由干边和湿边方程建立温度植被干旱指数(TVDI)计算式，估测土壤表层水分状况： </p>
          <div className="modal-detail-content-img"><img src={formula13} alt="" /></div>
          <p className="modal-detail-content-p">式中TVDI的取值区间是[0，1],TVDI值越大，土壤湿度越低，反之土壤湿度越高。</p>

          <div className="modal-detail-content-title3">3、等级划分 </div>
          <p className="modal-detail-content-p">根据TVDI的值，干旱等级分为湿润、正常、轻旱、中旱、重旱、特旱6个级别。</p>
          <div className="modal-detail-content-img"><img src={formula14} alt="" /></div>
        </div>
      </div>

      <div onClick={handleClose} className="modal-detail-close"></div>
    </div>
  );
};

export default ModalDetal;
