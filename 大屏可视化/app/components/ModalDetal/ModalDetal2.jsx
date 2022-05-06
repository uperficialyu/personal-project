/* @Description 长势监测 模型详情
 * @Author: yushunping 
 * @Date: 2021-12-16 15:05:17 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-12-16 15:05:51
 */

import React, { Component } from 'react';
import png1 from 'style/images/component/formula1.png';
import png2 from 'style/images/component/formula2.png';
import png3 from 'style/images/component/formula3.png';
import './ModalDetal2.scss';

const ModalDetal = (prosp) => {
  const {
    handleClose
  } = prosp;

  return (
    <div className="modal-detail2">
      <div className="modal-detail-title">作物长势遥感监测模型</div>
      <div className="modal-detail-content">
        <p className="modal-detail-content-p">农作物长势遥感监测作物长势信息反映作物生长的状况和趋势，是农情信息的重要组成部分。遥感技术具有宏观、适时和动态等特点，利用遥感数据动态监测区域作物长势具有无可比拟的优势。遥感影像可以记录作物不同阶段的生长状况，构造出与农作物生长情况密切相关的指标，获得同一地点时间序列的图像了解不同生育阶段的作物长势，实现对农作物长势的连续监测。作物长势监测的目的是为了掌握作物长势好坏，指导农业生产。</p>
        <p style={{fontWeight: 'bold'}} className="modal-detail-content-p1">1、NDVI时间序列变化趋势（生长过程曲线）</p>
        <p className="modal-detail-content-p">归一化植被指数植被生长状况、生物量及植被覆盖度的最佳指示因子，其范围为[-1~1]，负值表示地面覆盖云、水、雪等，正值表示有植被覆盖，且随覆盖度增大而增大。其计算公式为：</p>
        <div className="modal-detail-content-png"><img src={png1} alt="" /></div>
        <p className="modal-detail-content-p1">式中：NIR为近红外波段处的反射率值；R为红波段处的反射率值。</p>
        <p className="modal-detail-content-p">NDVI随不同时期脐橙的长势，其值会发生变化，根据NDVI变化的趋势，能够判断脐橙生长的变化趋势，进而反映脐橙生长过程中的变化情况，展示出脐橙空间和时间上的动态变化规律</p>
        <p style={{fontWeight: 'bold'}} className="modal-detail-content-p1">2、与去年对比模型：</p>
        <div className="modal-detail-content-png"><img src={png2} alt="" /></div>
        <p className="modal-detail-content-p1">式中，为今年的NDVI月平均值，为去年同期值；根据与0的关系来初步判断当年的长势与前一年相比是好还是差或者与前一年长势相当。大于0表示植被长势活力好，小于0表示指标长势活力差，在0值附近表示持平状态。</p>
        <p style={{fontWeight: 'bold'}} className="modal-detail-content-p1">3、与历史多年平均对比（距平模型）：</p>
        <div className="modal-detail-content-png"><img src={png3} alt="" /></div>
        <p className="modal-detail-content-p1">式中，为多年平均值，为当年值。AVI大于0表示植被长势活力旺盛，AVI小于0表示植被长势活力弱，AVI在0值附近表示持平状态。</p>
      </div>

      <div onClick={handleClose} className="modal-detail-close"></div>
    </div>
  );
};

export default ModalDetal;
