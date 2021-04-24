import React, { Component } from 'react'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: 'full-screen-container',
      allWidth: 0,
      allHeight: 0,
      scale: 0,
      datavRoot: '',
      ready: false,
      dom: '',
      width: 0,
      height: 0,
      originalWidth: 0,
      originalHeight: 0,
      debounceInitWHFun: '',
      domObserver: ''
    }
  }

  componentDidMount = () => {
    this.autoResizeMixinInit();
  }

  componentWillUnmount = () =>{
    const { unbindDomResizeCallback } = this;
    unbindDomResizeCallback()
  }

  afterAutoResizeMixinInit = () => {
    this.initConfig();
    this.setAppScale();
    this.setState({
      ready: true
    });
  }

  initConfig = () => {
    const {
      allWidth,
      allHeight,
      originalWidth,
      originalHeight
    } = this.state;

    const {
      width,
      height
    } = this.props;


    this.allWidth = this.width || this.originalWidth
    this.allHeight = this.height || this.originalHeight
    if (this.width && this.height) {
      this.dom.style.width = `${this.width}px`
      this.dom.style.height = `${this.height}px`
    } else {
      this.dom.style.width = `${this.originalWidth}px`
      this.dom.style.height = `${this.originalHeight}px`
    }
  }

  setAppScale =() => {
    const currentWidth = document.body.clientWidth
    const currentHeight = document.body.clientHeight
    this.dom.style.transform = `scale(${currentWidth / this.allWidth}, ${currentHeight / this.allHeight})`
  }

  onResize = () => {
    this.setAppScale();
  }

  render() {
    const { children } = this.props;
    return (
      <div className="Container">
        {children}
      </div>
    )
  }
}

export default Container;