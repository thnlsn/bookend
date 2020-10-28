// DEPENDENCIES
import React, { useState } from 'react';
import './css/style.css';

// IMAGES
import logo from './images/logo.png';
import userImage from './images/user.jpg';

// COMPONENTS
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HotelView from './components/MainView';

// APP
function App() {
  // STATE
  const [username, setUsername] = useState('Thomas');
  const [bookmarks, setBookmarks] = useState(11);
  const [chats, setChats] = useState(3);

  return (
    <div className='container'>
      <Header
        logo={logo}
        name='bookend'
        bookmarks={bookmarks}
        chats={chats}
        userImage={userImage}
        username={username}
      />
      <div className='content'>
        <Sidebar />
        <HotelView />
      </div>
    </div>
  );
}

export default App;

/* 
SVGs
symbol-defs

*/
