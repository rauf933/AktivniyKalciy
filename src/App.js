import React from 'react';


import Header from './components/Header';
import Footer from './components/Footer';
import Contain from './components//pages/Contain';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="main-content wrap-content">
    <BrowserRouter keyLength={12}>
      <Header />
      <Contain />
      <Footer />
    </BrowserRouter>
    </div>
  );
}


export default App;
