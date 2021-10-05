import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Teach from './components/Teach/Teach';
import NotFound from './components/NotFound/NotFount';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services  showAll={true}></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/teach">
            <Teach></Teach>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
    </div>
  );
}

export default App;
