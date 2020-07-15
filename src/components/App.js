import React from 'react';
import '../css/App.scss';
import Header from './Header';
import Catalogue from './Catalogue';

const App = () => {
  return (
    <div className="container">
          <Header/>
          <Catalogue/>
    </div>
    );
}


export default App;
