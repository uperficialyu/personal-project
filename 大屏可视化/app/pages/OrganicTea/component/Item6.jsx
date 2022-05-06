import React, { useEffect, useState, useRef } from 'react';
import ItemHeader from 'components/ItemHeader/ItemHeader';
import PolylineChart from 'components/PolylineChart/PolylineChart';
import png from 'style/images/component/itemheadericon7.png';
import png1 from 'style/images/home/home7.png';
import png2 from 'style/images/home/home8.png';
import png3 from 'style/images/home/home9.png';
import png4 from 'style/images/home/home10.png';

const Item6 = () => {
  const list = [
    {title: '品牌打造',png: png1},
    {title: '金融服务',png: png2},
    {title: '企业开办',png: png3},
    {title: '民宿开办',png: png4},
  ];

  const timestamp = Date.parse(new Date());

  useEffect(() => {
    const myPlayer = videojs(`my-video${timestamp}`)
    const url = 'https://iotservice.jgwcjm.com/iot/monitor/url?uuid=a9T82ZTfps2r6MmB1xGmsIbS25ZxY%2FTeCi0Toe2mwYYuWTAA3HxdQuc%2F1WCnWkhbxx%2FtGdKpAS9lllI89nXa02yexOhqVl8oLFyF2JXudDC6X7rJphrB1CEbLCGyqpraUNrotbVfC%2BSXYhJSHhbedvR399cwdhk3%2BCwp6STzVwGkNodHjwRwFKdlyH9x1KKFjTuIa802%2FmOIPFihIVNAVTZnXRfLz8tsHzJOlo4ldRA%3D'
    myPlayer.src([
      { type: "application/x-mpegURL", src: url }
    ])
    let playPromise = myPlayer.play(url)
    if (playPromise !== undefined) {
      playPromise.then(() => {
        myPlayer.play(url)
      }).catch(() => {
        this.$emit('getMsg','视频无法播放')
      })
    }
  }, [])

  return (
    <div className="organic-tea-item6">
      <ItemHeader png={png} title="实时监控" />
      <div className="organic-tea-item6-content">
        <div className="organic-tea-item6-content-video">
          <video id={`my-video${timestamp}`} className="video-js" width="432" height="205" controls preload="auto" poster="MY_VIDEO_POSTER.jpg" autoPlay muted>
            <source src="" type="application/x-mpegURL" />
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Item6;
