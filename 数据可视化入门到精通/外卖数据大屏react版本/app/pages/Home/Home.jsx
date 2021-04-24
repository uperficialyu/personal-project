/**
 * @Description 首页
 * @Author: yushunping
 * @Date: 2020-08-21 18:47:17
 * @Last Modified by:   yushunping
 * @Last Modified time: 2021-04-24 21:53:10
 */

import React, { Component, Fragment } from 'react';
import Ajax from 'lib/ajax';
import { sessionSet, sessionGet } from 'storage';
import { FormattedMessage, injectIntl } from 'react-intl';
import Container from 'components/Container/Container';
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
        <Container>
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
