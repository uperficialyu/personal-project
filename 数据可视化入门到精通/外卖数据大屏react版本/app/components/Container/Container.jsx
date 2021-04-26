import React, { useRef, useState, useEffect } from 'react';
import { debounce, observerDomResize } from './util';
import './Container.scss';

const Container = (props) => {
  const {
    children,
    options
  } = props;

  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const [originalWidth, setoriginalWidth] = useState(0);
  const [originalHeight, setoriginalHeight] = useState(0);
  const refComponent = useRef();

  const initWH = (resize = true) => {
    return new Promise((resolve, reject) => {
      if(options) {
        const { width, height } = options;
        if(width && height) {
          setwidth(width);
          setheight(height);
        }
      } else {
        setwidth(refComponent.current.width);
        setheight(refComponent.current.height);
      }
      if (!originalWidth || !originalHeight) {
        const { width, height } = window.screen;
        setoriginalWidth(width);
        setoriginalHeight(height);
      }
      if (typeof setAppScale === 'function' && resize) {
        setAppScale();
      }
      resolve();
    })
  };

  const initConfig =() => {
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

  // 设置缩放比
  const setAppScale = () => {
    const currentWidth = document.body.clientWidth;
    const currentHeight = document.body.clientHeight;
    // refComponent.current.style.transform = `scale(${currentWidth / this.allWidth}, ${currentHeight / this.allHeight})`
  }

  const getDebounceInitWHFun = () => {
    // this.debounceInitWHFun = debounce(100, this.initWH)
  }

  const bindDomResizeCallback = () => {
    // this.domObserver = observerDomResize(this.dom, this.debounceInitWHFun)
    // window.addEventListener('resize', this.debounceInitWHFun)
  }

  const unbindDomResizeCallback =() => {
    // this.domObserver.disconnect()
    // this.domObserver.takeRecords()
    // this.domObserver = null
    // window.removeEventListener('resize', this.debounceInitWHFun)
  }

  const autoResizeMixinInit = async () => {
    await initWH(false)
    // this.getDebounceInitWHFun()
    // this.bindDomResizeCallback()
    // if (typeof this.afterAutoResizeMixinInit === 'function') this.afterAutoResizeMixinInit()
  }

  useEffect(() => {
    autoResizeMixinInit();
    return () => {
      unbindDomResizeCallback();
    }
  }, [])




  console.log(refComponent,'refComponent')

  return (
    <div ref={refComponent} id="Container" className="Container">
      {children}
    </div>
  )
}

export default Container;