import React from 'react';
import CountTo from 'components/CountTo/CountTo';
import './TotalUser.scss';

const TopHeader = (props) => {

  return (
    <div className="total-user">
      <div class="title">Emily外卖用户总数</div>
      <div class="sub-title">User Total Count</div>
      <CountTo />
    </div>
  )
}

export default TopHeader;