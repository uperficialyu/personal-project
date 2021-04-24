import React, { Component } from 'react'
import './modal.css'

export default class modal extends Component {
  render() {
    return (
      <div>
        <div class="tt-modal show">
          <div class="tt-mask"></div>
          <div class="tt-modal-wrap">
            <div class="tt-modal-body">
              <p>您的会员即将到期，请及时续费，以免影响您的权益。</p>
            </div>
            <div class="tt-modal-footer">
              <a class="tt-btn">下次再说</a>
              <a class="tt-btn">立即续费</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
