import React from 'react';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Player from './src/player/containers/player';

const App: () => React$Node = () => {
  return (
    <>
      <Home>
        <Header />
        <Player />
      </Home>
    </>
  );
};

export default App;
