import React from 'react';
import ReactDOM from 'react-dom';
import stores from 'store/index.js';
import { Provider } from 'mobx-react';
import 'antd/dist/antd.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import './app.scss';
import Main from './Main';

ReactDOM.render(
  <Provider {...stores}>
    <Main />
  </Provider>
  ,
  document.getElementById('root'),
)