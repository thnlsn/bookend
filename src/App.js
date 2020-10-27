import React from 'react';
import './css/style.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HotelView from './components/MainView';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <nav className='sidebar'>Navigation</nav>
        <main className='hotel-view'>Hotel view</main>
      </div>
    </div>
  );
}

export default App;
