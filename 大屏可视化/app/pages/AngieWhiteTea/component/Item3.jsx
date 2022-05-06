import React, { useEffect, useState, useRef } from 'react';
import png1 from 'style/images/home/home16.png';
import png2 from 'style/images/home/home17.png';
import png3 from 'style/images/home/home18.png';
import png4 from 'style/images/home/home19.png';

const Center = (props) => {
  const {
    type,
    handleTime
  } = props;
  return (
    <div className="bottom-loop">
      <img onClick={() => handleTime('left')} src={png3} alt="" />
      <img className='bottom-loop-img' onClick={() => handleTime('startEnd')} src={type ? png1 : png4} alt="" />
      <img onClick={() => handleTime('right')} src={png2} alt="" />
    </div>
  );
};

export default Center;
