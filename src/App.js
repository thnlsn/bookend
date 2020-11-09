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
//// Hotel view
import hotelImage1 from './images/hotel-1.jpg';
import hotelImage2 from './images/hotel-2.jpg';
import hotelImage3 from './images/hotel-3.jpg';
import user3 from './images/user-3.jpg';
import user4 from './images/user-4.jpg';
import user5 from './images/user-5.jpg';
import user6 from './images/user-6.jpg';
import hotelReviewPhoto1 from './images/user-1.jpg';
import hotelReviewPhoto2 from './images/user-2.jpg';

// COMPONENTS
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// Views
import HotelView from './components/Views/HotelView';
import FlightView from './components/Views/FlightView';
import CarRentalView from './components/Views/CarRentalView';
import ToursView from './components/Views/ToursView';

////// HOTEL REVIEWS
const hotelReviews = [
  {
    quote:
      'Itaque quas, culpa rem perspiciatis obcaecati illo eligendi minima, necessitatibus architecto distinctio similique quis.',
    photo: hotelReviewPhoto1,
    name: 'Darek Adelsen',
    date: 'Sept 22nd, 2019',
    rating: 7.8,
  },
  {
    quote:
      'Adipisci inventore ab distinctio itaque quia tenetur aliquid amet, autem quidem accusamus hic facilis eaque dignissimos sint!',
    photo: hotelReviewPhoto2,
    name: 'Szófia Katona',
    date: 'Jan 24th, 2018',
    rating: 9.1,
  },
];

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
          { name: 'Gerardo', photo: user5 },
          { name: 'Marilyn', photo: user6 },
        ]}
        reviews={hotelReviews}
        availabilities={2}
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
  // This has to come first because it is used in the generation of the initial currentTab state
  const checkIfTabExists = () => {
    // Save the current path in the url, but only the part after the first / and before the second /
    const currentPath = window.location.pathname.split('/')[1];
    for (let i = 0; i < routes.length; i++) {
      // If we have a primary route that is equal to the above variable, return true and currentTab will be set to whatever that route is (top be displayed in the searchbar)
      if (routes[i].path.split('/')[1] === currentPath) {
        return true;
        // We only compare the value within the /'s because we want the search placeholder value to remain if we move into a secondary url path, like /hotels/hilton, in which case it will still say "Search hotels"
      }
    }
    // Else return an empty string so that the searchbar will just say "Search" instead of "Search hotels" or "Search flights" etc.
    return '';
  };

  // STATE
  const [searchValue, setSearchValue] = useState(
    // First check if what is currently in the url before and after the initial /'s is an actual primary route (checkIfTabExists does this, since tabs determine primary routes in this app)
    // Then, if it does, it will return true and move to the second part after the &&, which will simply set currentTab state to whatever that string between the /'s was
    // This prevents any strange url's, either input by user or by some glitch, from being the Tab state value
    checkIfTabExists() && window.location.pathname.split('/')[1]
  );
  const [username /* setUsername */] = useState('Thomas');
  const [bookmarks /* setBookmarks */] = useState(11);
  const [chats /* setChats */] = useState(3);

  const handleTabClick = () => {
    // Look at what the url says after it has been clicked, and the tab will apply the style of being active accordingly
    /* if () */
    setSearchValue(window.location.pathname.split('/')[1]);
  };

  return (
    <div className='container'>
      <Header
        logo={logo}
        name='bookend'
        bookmarks={bookmarks}
        chats={chats}
        userImage={userImage}
        username={username}
        currentPage={searchValue}
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
            func={handleTabClick}
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
flex-basis
When to utilize inheritance (parent elements etc.)
::before & :after? When and why? (not in css just in html)





if else in JSX? Why doesn't it work?
*/
