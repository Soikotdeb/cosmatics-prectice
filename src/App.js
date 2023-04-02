import React from 'react';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './utilities/Shoes/Shoes';

const App = () => {
  return (
    <div className="App">
   <Cosmetics></Cosmetics>
   <Shoes></Shoes>

    </div>
  );
};

export default App;