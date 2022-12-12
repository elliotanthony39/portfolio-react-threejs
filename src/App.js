import React, { useState } from 'react';
import './App.css';
import { Scene } from './components';
import Home from './components/Home/Home';
import Loading from './components/Loading/Loading';
import { moveIsland } from './components/Scene/Script';

function App () {

  const [load, setLoad] = useState(true);

  const handleLoad = (e) => {
    e.preventDefault();
    setLoad(false);
    moveIsland();
  }

  return (
    <>
      <Scene />
      {
        load ? <Loading handleLoad={handleLoad}/> : <Home />
      }
    </>
  )
}

export default App;
