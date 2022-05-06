import React, { useEffect } from 'react';
import './ItemHeader.scss';

const ItemHeader = (props) => {
  const { title, png, children } = props;
  return (
    <div className="item-header">
      <div className="item-header-left">
        <img className="item-header-left-png" src={png} alt=""/>
        <div className="item-header-left-title">{title}</div>
      </div>
      {
        children ? 
        <div className="item-header-right">
          {children}
        </div> : ''
      }
    </div>
  );
};

export default ItemHeader;
