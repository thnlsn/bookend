// DEPENDENCIES
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/style.css';

// IMAGES
import logo from './images/logo.png';
import userImage from './images/user.jpg';

// COMPONENTS
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// Views
import HotelView from './components/Views/HotelView';
import FlightView from './components/Views/FlightView';
import CarRentalView from './components/Views/CarRentalView';
import ToursView from './components/Views/ToursView';

const routes = [
  {
    path: '/hotels',
    exact: true,
    main: () => <HotelView />,
  },
  {
    path: '/flights',
    exact: true,
    main: () => <FlightView />,
  },
  {
    path: '/cars',
    exact: true,
    main: () => <CarRentalView />,
  },
  {
    path: '/tours',
    exact: true,
    main: () => <ToursView />,
  },
];

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
        <Router>
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
        </Router>
        <main className='main-view'></main>
        {/*         <HotelView /> */}
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
z-index (and how it only works with position)
transition-origin (change where an animation begins)
*/
