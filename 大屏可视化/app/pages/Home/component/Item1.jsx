import React, { useEffect, useState, useRef } from 'react';
import png from 'style/images/home/home34.png';

const Item1 = (props) => {
  const {
    leaderList,
    activeIndex,
    // handleSearch,
  } = props;

  // const [searchValue, setSearchValue ] = useState('');

  // const handleChangeValue = (e) => {
  //   const value = e.target.value;
  //   setSearchValue(value)
  // }

  return (
    <div className="home-item1">
      {/* <div className='home-item1-top'>
        <input onChange={handleChangeValue} searchValue={searchValue} placeholder='请输入搜索内容' className='home-item1-top-input' type="text" />
        <img onClick={() => handleSearch(searchValue)} className='home-item1-top-search' src={png} alt="" />
      </div> */}
      <div className='home-item1-bottom'>
        {
          leaderList.map((item, index) => {
            return (
              <div className={activeIndex === index ? 'home-item1-bottom-item home-item1-bottom-item-active' : 'home-item1-bottom-item'}>
                <img className='home-item1-bottom-item-pic' src={item.leaderHeadPicture || png} alt="" />
                <span className='home-item1-bottom-item-title'>{item.leaderName}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Item1;
