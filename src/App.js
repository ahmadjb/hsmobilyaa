import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import './app.css';

//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import LastWorks from './components/MiraLastWork/LastWorkOfMira';
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";
import Admin from './components/Admin/Admin';
import DoorPage from './components/Top menu/DoorPage';
import Kitchen from './components/Top menu/KitchenPage';
import BedRooms from './components/Top menu/BedRoomsPage';
import 'bootstrap/dist/css/bootstrap.min.css';


import { useSelector } from "react-redux";

const App = () => {
    const location = useLocation();
    const theme = useSelector(state => state.theme);
    return (
        <div className="App" style={theme}>
            <Navbar />
            <div className="app-content">
                <TransitionGroup>
                    <CSSTransition timeout={300} classNames='fade' key={location.key}>
                        <Switch location={location}>
                            <Route path="/" exact>
                                <Redirect to="/home" />
                            </Route>
                            <Route path="/home">
                                <Home />
                            </Route>

                            <Route path="/about-me">
                                <AboutMe />
                            </Route>

                            <Route path="/lastWorks">
                                <LastWorks />
                            </Route>

                            <Route path="/certifications">
                                <Certifications />
                            </Route>

                            <Route path="/projects">
                                <Projects />
                            </Route>
                            <Route path="/admin">
                                <Admin />
                            </Route>
                            <Route path="/doorPage">
                                <DoorPage />
                            </Route>
                            <Route path="/kitchenPage">
                                <Kitchen />
                            </Route>
                            <Route path="/bedRoomsPage">
                                <BedRooms />
                            </Route>
                            <Route path="*">
                                <Redirect to="/" />
                            </Route>

                            {/* <ProgrammingSkills /> */}
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <Footer />
        </div>
    )
}

export default App;