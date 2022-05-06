import React, { useEffect } from 'react';
import png from 'style/images/component/itemheadericon3.png';
import './ItemList.scss';

const ItemList = (props) => {
  const { list } = props;
  return (
    <div className="item-list">
      {
        list.map((item, index) => {
          return (
            <div className="item-list-item">
              <div className="item-list-item-top">{item.title}{item.unit}</div>
              <div className="item-list-item-middle"><img src={png} alt="" /></div>
              <div className="item-list-item-bottom">{item.value}</div>
            </div>
          )
        })
      }
    </div>
  );
};

export default ItemList;
