import React, { useRef, useState, useEffect } from 'react';
import { debounce, observerDomResize } from './util';
import './Container.scss';

const Container = (props) => {
  const {
    children,
    options // 默认传进来的对象 例如 options = { width: 3840, height: 2160 }
  } = props;

  const widthRef = useRef(0); // 定义宽度
  const heightRef = useRef(0); // 定义高度
  const originalWidthRef = useRef(0); // 视口宽度
  const originalHeightRef = useRef(0); // 视口高度
  const refComponent = useRef(); // 获取容器的dom

  // 初始化宽高
  const initWH = (resize = true) => {
    const dom = refComponent.current;
    const originalWidth = originalWidthRef.current;
    const originalHeight = originalHeightRef.current;
    // 获取大屏真实尺寸
    if (options) {
      const { width, height } = options;
      if (width && height) {
        widthRef.current = width;
        heightRef.current = height;
      } else {
        widthRef.current = dom.clientWidth;
        heightRef.current = dom.clientHeight;
      }
    }
    // 获取画布尺寸
    if (!originalWidth || !originalHeight) {
      const { width, height } = window.screen;
      originalWidthRef.current = width;
      originalHeightRef.current = height;
    }
  };

  // 更新尺寸
  const updateSize = () => {
    const dom = refComponent.current;
    const width = widthRef.current;
    const height = heightRef.current;
    const originalWidth = originalWidthRef.current;
    const originalHeight = originalHeightRef.current;
    if (width && height) {
      dom.style.width = `${width}px`;
      dom.style.height = `${height}px`;
    } else {
      dom.style.width = `${originalWidth}px`;
      dom.style.height = `${originalHeight}px`;
    }
  }

  // 设置缩放比
  const setAppScale = () => {
    const dom = refComponent.current;
    const width = widthRef.current;
    const height = heightRef.current;
    const originalWidth = originalWidthRef.current;
    const originalHeight = originalHeightRef.current;
    // 获取真实的视口尺寸
    const currentWidth = document.body.clientWidth;
    const currentHeight = document.body.clientHeight;
    // 获取大屏最终的宽高
    const realWidth = width || originalWidth;
    const realHeight = height || originalHeight;
    const widthScale = currentWidth / realWidth;
    const heightScale = currentHeight / realHeight;
    dom.style.transform = `scale(${widthScale}, ${heightScale})`;
  }

  const onResize = () => {
    console.log('1111')
    initWH();
    updateSize();
    setAppScale();
  }

  useEffect(() => {
    initWH();
    updateSize();
    setAppScale();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return (
    <div ref={refComponent} id="Container" className="Container">
      {children}
    </div>
  )
}

export default Container;