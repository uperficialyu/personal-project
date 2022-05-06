/*
 * @Author: yushunping 
 * @Date: 2021-12-02 15:10:17 
 * @Last Modified by: yushunping
 * @Last Modified time: 2021-12-02 18:06:21
*/

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      visible,
      onClose,
      children,
      title
    } = this.props;

    const content = visible ? <Fragment>
      <div className="modelMask"></div>
      <div className="modelContent">
        <div className="modelTitle">{title}</div>
        <div className="modelContent2">{children}</div>
        <div onClick={onClose} className="modelClose"></div>
      </div>
    </Fragment> : null;

    return (
      ReactDOM.createPortal(content, document.body)
    )
  }
}
