import React, { Component } from 'react';
import png1 from 'style/images/component/9.png';


import './Select.scss';

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    const {
      value,
      list
    } = this.props;
    return (
      <div className="select">
        <div className="select-content">
          <div>{value}</div>
          <div className="select-content-img"><img src={png1} alt="" /></div>
        </div>

        <div className="select-modal">
          {
            list.map((item, index) => {
              return (
                <div>{item.label}</div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
