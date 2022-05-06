import React from 'react';
import './TotalGender.scss';

const TotalGender = (props) => {

  return (
    <div className="total-gender">
      <div className="title-wrapper">
        <div className="total-gender-left">
          <img src="http://img.alicdn.com/tfs/TB1p9Luq8v0gK0jSZKbXXbK2FXa-500-500.png" />
        </div>
        <div className="total-gender-right">
          <div className="title">男性用户人数</div>
          <div className="sub-title">Number of male users</div>
          <div className="age">
            {/* <count-to
              :startVal="startMale"
              :endVal="endMale"
              :duration="1000"
            /> */}
            <span className="age-unit">万人</span>
          </div>
        </div>
      </div>

      <div className="title-wrapper">
      <div className="total-gender-left">
        <img src="http://img.alicdn.com/tfs/TB1p9Luq8v0gK0jSZKbXXbK2FXa-500-500.png" />
      </div>
      <div className="total-gender-right">
        <div className="title">女性用户人数</div>
        <div className="sub-title">Number of female users</div>
        <div className="age">
          {/* <count-to
            :startVal="startFemale"
            :endVal="endFemale"
            :duration="1000"
          /> */}
          <span className="age-unit">万人</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TotalGender;