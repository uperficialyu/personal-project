
import { useState, useEffect, useRef } from 'react';

const useClock = () => {
  let now = new Date();
  let task;
  const [state, setstate] = useState(0);

  const dateFilter = (v) => {
    let m = v.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = v.getDate();
    d = d < 10 ? '0' + d : d;
    return v.getFullYear() + '-' + m + '-' + d;
  };

  const timeFilter = (v) => {
    let h = v.getHours();
    h = h < 10 ? '0' + h : h;
    let m = v.getMinutes();
    m = m < 10 ? '0' + m : m;
    let s = v.getSeconds();
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
  };

  const date = useRef(dateFilter(now));
  const time = useRef(timeFilter(now));

  const start = () => {
    task = setInterval(() => {
      now = new Date()
      date.current = dateFilter(now);
      time.current = timeFilter(now);
      setstate(now);
    }, 1000);
  };

  useEffect(() => {
    start();
    return () => {
      cleantask && clearInterval(task);
    }
  }, []);

  return {
    date: date.current,
    time: time.current,
    start
  };
}

export default useClock;
