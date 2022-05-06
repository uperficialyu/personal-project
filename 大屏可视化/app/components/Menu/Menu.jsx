import React, { useState } from 'react';
import classnames from 'classnames';
import './Menu.scss';

const Menu = () => {
  const [active, setActive] = useState(0);

  const list = [
    {title: '折线图', url: 'lineChart'},
    {title: '柱形图', url: 'columnChart'},
  ];

  return (
    <ul className='menu'>
      {
        list.map((item, index) => {
          return (
            <li className={classnames('menu-li', active === index ? 'menu-li-active' : '')}>{item.title}</li>
          )
        })
      }
    </ul>
  )
}

export default Menu;
