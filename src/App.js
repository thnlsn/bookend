// DEPENDENCIES
import React from 'react';
import './css/style.css';

// IMAGES
import logo from './images/logo.png';

// COMPONENTS
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HotelView from './components/MainView';

// LAYOUT
function App() {
  return (
    <div className='container'>
      <Header logo={logo} />
      <div className='content'>
        <Sidebar />
        <HotelView />
      </div>
    </div>
  );
}

export default App;
