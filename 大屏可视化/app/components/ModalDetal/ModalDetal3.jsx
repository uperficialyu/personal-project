/* @Description 种植适宜性分析 模型详情
 * @Author: yushunping 
 * @Date: 2021-12-16 15:05:17 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-12-16 15:32:47
 */

import React, { Component } from 'react';
import png1 from 'style/images/component/formula8.png';
import png2 from 'style/images/component/formula9.png';
import png3 from 'style/images/component/formula10.png';
import png4 from 'style/images/component/formula11.png';
import png5 from 'style/images/component/formula12.png';
import './ModalDetal3.scss';

const ModalDetal = (prosp) => {
  const {
    handleClose
  } = prosp;

  return (
    <div className="modal-detail3">
      <div className="modal-detail-title">秭归县脐橙种植适宜性分析</div>
      <div className="modal-detail-content">
        <p style={{fontWeight: 'bold'}} className="modal-detail-content-p1">一、建立评价因子及层次结构</p>
        <p className="modal-detail-content-p">根据调查影响脐橙生长的因素和数据获取情况，确定了脐橙种植评价因子，并建立了层次结构。</p>
        <div className="modal-detail-content-png"><img src={png1} alt="" /></div>
        <p className="modal-detail-content-p">目标层是脐橙种植适宜性分析，影响种植适宜性分析的因子层包括地形因子、热量因子、供水因子、土壤因子4个大类，在因子层下，又包含8个子因子层，其中地形因子包含海拔、坡度、坡向3个具体指标，热量因子包含年平均气温、1月平均温度、1月绝对最低温度3个指标，供水因子包含年降雨量1个指标，土壤因子包含土壤类型1个指标。</p>

        <p style={{fontWeight: 'bold'}} className="modal-detail-content-p1">二、确定评价因子的权重</p>
        <p className="modal-detail-content-p">由于每个影响因子对评价对象的贡献大小和适宜程度不同，需对每个因子数据赋予各自权重值，为此我们采用层次分析法（AnalyticHierarchyprocess,简记AHP)来计算各因子的权重值。</p>
        <div className="modal-detail-content-png"><img src={png2} alt="" /></div>
        
        <p style={{fontWeight: 'bold'}} className="modal-detail-content-p1">三、确定每个子因子的阈值范围</p>
        <p className="modal-detail-content-p">为了将每个指标的值统一到同一量纲，将每个指标重分类，按照阈值来确定重分类的等级。</p>
        <div className="modal-detail-content-png"><img src={png3} alt="" /></div>

        <p style={{fontWeight: 'bold'}} className="modal-detail-content-p1">四、种植适宜性计算</p>
        <p className="modal-detail-content-p">通过将不同评价指标数据统一重分类为具有相同等级数据，并与各自权重值进行加权叠加，得到最终的适宜性数值，其数学基础为式：</p>
        <div className="modal-detail-content-png"><img src={png4} alt="" /></div>
        <p className="modal-detail-content-p1">式中，C为适宜性总和，为第i个影响因子的分值，为第i个影响因子的权重，n为影响因子总个数。</p>

        <p style={{fontWeight: 'bold'}} className="modal-detail-content-p1">五、种植适宜性分级</p>
        <p className="modal-detail-content-p">将种植土地适宜性分析获得的数值，按从大到小的阈值分为最适宜、适宜、不适宜3个等级，绘制出种植土地适宜性等级分布图.</p>
        <div className="modal-detail-content-png"><img src={png5} alt="" /></div>
        <p className="modal-detail-content-p">特别说明：以上是针对伦晚脐橙的种植适宜性分析，但是由于缺乏历史全县范围内气象相关的数据，以及对秭归脐橙具体品种影响的每个因子的具体值无法一一确定，分析结果可能存在争议，敬请专家指正。</p>
       
      </div>

      <div onClick={handleClose} className="modal-detail-close"></div>
    </div>
  );
};

export default ModalDetal;
