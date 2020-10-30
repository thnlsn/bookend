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
        <Sidebar
          // Supply arrays of SVGs, titles, and hrefs, they will be matched by index, so the first icon will be with the first title and href, and so on
          icons={[
            '#icon-home',
            '#icon-aircraft-take-off',
            '#icon-key',
            '#icon-map',
          ]}
          titles={['Hotel', 'Flight', 'Car Rental', 'Tours']}
          hrefs={['#', '#', '#', '#']}
        />
        <HotelView />
      </div>
    </div>
  );
}

export default App;

/* 
SVGs
symbol-defs
>
*
~
currentColor
fill
*/
