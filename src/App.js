// DEPENDENCIES
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  /*  Switch, */ Route /* , Link */,
} from 'react-router-dom';
import './css/style.css';

// IMAGES
import logo from './images/logo.png';
import userImage from './images/user.jpg';
// Hotel view
import hotelImage1 from './images/hotel-1.jpg';
import hotelImage2 from './images/hotel-2.jpg';
import hotelImage3 from './images/hotel-3.jpg';
import user3 from './images/user-3.jpg';
import user4 from './images/user-4.jpg';
import user5 from './images/user-5.jpg';
import user6 from './images/user-6.jpg';

// COMPONENTS
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// Views
import HotelView from './components/Views/HotelView';
import FlightView from './components/Views/FlightView';
import CarRentalView from './components/Views/CarRentalView';
import ToursView from './components/Views/ToursView';

// ROUTES
// Including their path, exact or not, and the component to display
const routes = [
  {
    path: '/hotels',
    exact: true,
    main: () => (
      <HotelView
        images={[hotelImage1, hotelImage2, hotelImage3]}
        hotelName={'Hotel Las Palmas'}
        hotelLocation={'Albufeira, Portugal'}
        stars={4}
        rating={8.4}
        votes={409}
        benefits={[
          'Close to the beach',
          'Breakfast included',
          'Free airport shuttle',
          'Free wifi in all rooms',
          'Air conditioning',
          'Pets allowed',
          'We speak all languages',
          'Perfect for families',
        ]}
        friends={[
          { name: 'Andy', photo: user3 },
          { name: 'Fernando', photo: user4 },
          { name: 'Ethan', photo: user5 },
          { name: 'Marilyn', photo: user6 },
        ]}
      />
    ),
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
  const [username /* setUsername */] = useState('Thomas');
  const [bookmarks /* setBookmarks */] = useState(11);
  const [chats /* setChats */] = useState(3);

  return (
    <div className='container'>
      <Header
        logo={logo}
        name='bookend'
        bookmarks={bookmarks}
        chats={chats}
        userImage={userImage}
        username={username}
        currentPage={''}
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
            hrefs={['/hotels', '/flights', '/cars', '/tours']}
          />
          <main className='main-view'>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </main>
        </Router>
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
display: block; on img elements specifically
margin-right/left: auto (specifically on flex items)
infinite
text-transform
flex-wrap
CSS Masks (mask-image, mask-size)
:last-of-type

*/
