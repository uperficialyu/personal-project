import React, { Component } from 'react';
import Menu from 'components/Menu/Menu';
import './Home.scss'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [1,1,1,1,1,1,1];
    return (
      <main className='home'>
        <div className='home-menu'>
          <Menu></Menu>
        </div>

        <ul className='home-content'>
          {
            list.map((item, index) => {
              return <li className='home-li'>{item}</li>
            })
          }
        </ul>
      </main>
    )
  }
}

