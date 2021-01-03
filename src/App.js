import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkPage from './pages/Work';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={WorkPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
