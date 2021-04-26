
import React, { Component } from 'react';
import { debounce, observerDomResize } from './util';

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

    this.dom = document.getElementById('Container')
  }

  componentDidMount = () => {
    // document.getElementById('Container').style.background="red"
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

  async autoResizeMixinInit() {
    await this.initWH(false)
    this.getDebounceInitWHFun()
    this.bindDomResizeCallback()
    if (typeof this.afterAutoResizeMixinInit === 'function') this.afterAutoResizeMixinInit()
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

  initWH(resize = true) {
    const { $nextTick, onResize } = this

    return new Promise(resolve => {
      // $nextTick(e => {
        const dom = this.dom;
        if (this.options) {
          const { width, height } = this.options
          if (width && height) {
            this.width = width
            this.height = height
          }
        } else {
          this.width = dom.clientWidth
          this.height = dom.clientHeight
        }
        if (!this.originalWidth || !this.originalHeight) {
          const { width, height } = screen
          this.originalWidth = width
          this.originalHeight = height
        }
        if (typeof onResize === 'function' && resize) onResize()
        resolve()
      })
    // })
  }

  getDebounceInitWHFun() {
    this.debounceInitWHFun = debounce(100, this.initWH)
  }

  bindDomResizeCallback() {
    this.domObserver = observerDomResize(this.dom, this.debounceInitWHFun)
    window.addEventListener('resize', this.debounceInitWHFun)
  }

  unbindDomResizeCallback() {
    this.domObserver.disconnect()
    this.domObserver.takeRecords()
    this.domObserver = null
    window.removeEventListener('resize', this.debounceInitWHFun)
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={this.ref} id="Container" className="Container">
        {children}
      </div>
    )
  }
}

export default Container;