/**
 * @Description 首页
 * @Author: yushunping
 * @Date: 2020-08-21 18:47:17
 * @Last Modified by:   yushunping
 * @Last Modified time: 2021-05-02 11:09:07
 */

import React, { Component, Fragment } from 'react';
import Ajax from 'lib/ajax';
import { sessionSet, sessionGet } from 'storage';
import { FormattedMessage, injectIntl } from 'react-intl';
import Container from 'components/Container/Container';
import TopHeader from 'components/TopHeader/TopHeader';
import TotalUser from 'components/TotalUser/TotalUser';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';
import './Home.scss';

@inject('langStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
    } = this.state;
    return (
      <React.Fragment>
        <Container options={{width: 3840, height: 2160}}>
          <TopHeader />
          <TotalUser />
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br />
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default injectIntl(Home);
