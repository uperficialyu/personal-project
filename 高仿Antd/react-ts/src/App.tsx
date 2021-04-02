import React, { useState, Fragment } from 'react';
import './App.css';
import LikeButton from './components/LikeButton';
import Hello from './components/Hello';
import WithLoader from './components/withLoader';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';

interface IShowResult {
  message: string;
  status: string;
}
const DogShow: React.FC<{data: IShowResult}> = ({data}) => {
  return <div style={{ height: 100,width: 100 }}>
    <h2>Dog show:{data.status}</h2>
    <img src={data.message} alt=""/>
  </div>
}

interface IThemeProps {
  [key: string]: {color: string; background: string;}
}
const themes: IThemeProps = {
 'light': {
   color: '#000',
   background: '#eee',
 },
 'dark': {
    color: '#fff',
    background: '#222',
  }
}
export const ThemeContext = React.createContext(themes.light)
const App: React.FC = () => {
  const [ show, setShow ] = useState(true);
  const WreappendDogShow = WithLoader(DogShow, 'https://dog.ceo/api/breeds/image/random');
  const positions = useMousePosition();
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random');
  const dogShow = data as IShowResult;
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        <LikeButton />
        <Hello />
        <p><button onClick={() => {setShow(!show)}}>Refresh dog photo</button></p>
        {/* 坐标 */}
        <MouseTracker />
        {/* 自定义坐标 */}
        <p>X: {positions.x}, Y : {positions.y}</p>
        {/* 显示小狗 */}
        <WreappendDogShow />
        {loading ? <p>dog</p>: <img src={dogShow && dogShow.message} alt=""/>}
      </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
