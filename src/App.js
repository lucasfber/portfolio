import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import WorkPage from './pages/Work';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Router>
        <Header toggle={toggle} setToggle={setToggle} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home isBlur={toggle} setToggle={setToggle} />}
          />
          <Route path="/work" component={WorkPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
