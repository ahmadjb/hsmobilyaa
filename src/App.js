import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './app.css';
import { useSelector } from 'react-redux';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import LastWorks from './components/MiraLastWork/LastWorkOfMira';
import Certifications from './components/Certifications/Certifications';
import AboutUs from './components/AboutUs/Aboutus';
import AboutMe from './components/About Me/AboutMe';
import Admin from './components/Admin/Admin';
import DoorPage from './components/Top menu/DoorPage';
import Kitchen from './components/Top menu/KitchenPage';
import BedRooms from './components/Top menu/BedRoomsPage';
import Cloakroom from './components/Top menu/Cloakroom';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const theme = useSelector((state) => state.theme);

  // Adjust 'your-repo-name' with the actual name of your GitHub repository
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/hsmobilyaa';

  return (
    <Router basename={basename}>
      <div className="App" style={theme}>
        <Navbar />
        <div className="app-content">
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/lastWorks" component={LastWorks} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/projects" component={AboutUs} />
          <Route path="/admin" component={Admin} />
          <Route path="/doorPage" component={DoorPage} />
          <Route path="/kitchenPage" component={Kitchen} />
          <Route path="/bedRoomsPage" component={BedRooms} />
          <Route path="/cloakroom" component={Cloakroom} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
