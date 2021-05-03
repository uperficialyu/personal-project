import React, { useState, useEffect } from 'react';
import { requestAnimationFrame, cancelAnimationFrame } from './requestAnimationFrame.js'
import PropTypes from 'prop-types';
import './CountTo.scss';

const CountTo = (props) => {
  const {
    startVal, // 开始值
    endVal, // 结束值
    duration, // 持续时间，以毫秒为单位
    autoplay, // 自动播放
    decimals, // 要显示的小数位数
    decimal, // 十进制分割
    separator, // 分隔符
    prefix, // 前缀
    suffix, // 后缀
    useEasing, // 使用缓和功能
    easingFn // 缓和回调
  } = props;

  const isNumber = (val) => {
    return !isNaN(parseFloat(val));
  }

  const formatNumber = (num) => {
    num = num.toFixed(decimals);
    num += '';
    const x = num.split('.');
    let x1 = x[0];
    const x2 = x.length > 1 ? decimal + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    if (separator && !isNumber(separator)) {
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + separator + '$2');
      }
    }
    return prefix + x1 + x2 + suffix;
  }

  const [localStartVal, setlocalStartVal] = useState(startVal);
  const [displayValue, setdisplayValue] = useState(formatNumber(startVal));
  const [printVal, setprintVal] = useState(null);
  const [paused, setpaused] = useState(false);
  const [localDuration, setlocalDuration] = useState(duration);
  const [remaining, setremaining] = useState(null);
  const [timestamp, settimestamp] = useState(null);
  const [startTime, setstartTime] = useState(null);
  const [rAF, setrAF] = useState(null);

  const start = () => {
    setlocalStartVal(startVal);
    setstartTime(null);
    setlocalDuration(duration);
    setpaused(false);
    setrAF(requestAnimationFrame(count));
    console.log(requestAnimationFrame(count),'ssss')
  }

  const pauseResume = () => {
    if (paused) {
      resume();
      setpaused(false);
    } else {
      pause();
      setpaused(true);
    }
  }

  const pause = () => {
    cancelAnimationFrame(rAF);
  }

  const resume = () => {
    setstartTime(null);
    setlocalDuration(+remaining);
    setlocalStartVal(printVal);
    requestAnimationFrame(count);
  }

  const reset = () => {
    setstartTime(null);
    cancelAnimationFrame(rAF);
    setdisplayValue(formatNumber(startVal));
  }

  const count = () => {
    let printVal;
    if (!startTime) {
      setstartTime(timestamp);
    }
    const progress = timestamp - startTime;
    setremaining(localDuration - progress)
    if (useEasing) {
      if (startVal > endVal) {
        printVal = localStartVal - easingFn(progress, 0, localStartVal - endVal, localDuration);
        setprintVal(printVal);
      } else {
        printVal = easingFn(progress, localStartVal, endVal - localStartVal, localDuration);
        setprintVal(printVal);
      }
    } else {
      if (startVal > endVal) {
        printVal = localStartVal - ((localStartVal - endVal) * (progress / tlocalDuration));
        setprintVal(printVal);
      } else {
        printVal = localStartVal + (endVal - localStartVal) * (progress / localDuration);
        setprintVal(printVal);
      }
    }
    if (startVal > endVal) {
      printVal = printVal < endVal ? endVal : printVal;
      setprintVal(printVal);
    } else {
      printVal = printVal > endVal ? endVal : printVal;
      setprintVal(printVal);
    }
    setdisplayValue(formatNumber(printVal));
    if (progress < localDuration) {
      setrAF(requestAnimationFrame(count));
    } else {
      this.$emit('callback');
    }
  }

  useEffect(() => {
    if (autoplay) {
      start();
    }
    // this.$emit('mountedCallback')
    return () => {
      cancelAnimationFrame(rAF)
    }
  }, [])


  return (
    <div className="total-user">
      {displayValue}
    </div>
  )
}

CountTo.defaultProps = {
  startVal: 0, // 开始值
  endVal: 2021, // 结束值
  duration: 3000, // 持续时间，以毫秒为单位
  autoplay: true, // 自动播放
  decimals: true, // 要显示的小数位数
  decimal: 0, // 十进制分割
  separator: '.', // 分隔符
  prefix: '', // 前缀 
  suffix: '', // 后缀
  useEasing: true, // 使用缓和功能
  easingFn: (t, b, c, d) => {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
  } // 缓和回调
}

export default CountTo;