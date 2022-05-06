import React, { Component } from 'react';
import png1 from 'style/images/home/item1.png';
// import './Header.scss';

const Item1 = () => {
  // const { title } = this.props;
  return (
    <div className="item4">
      {/* <div className="item1-content"> */}
        <span className="item1-span1">本批次问题数量</span>
        <span className="item1-span2">
          <span>3337</span>
          <span className="item1-span3">个</span>
        </span>
        
      {/* </div> */}
    </div>
  );
};

export default Item1;
