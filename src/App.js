import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router';
import  Header from "./pages/Header";
import Home from "./pages/Home"
import Sections from "./pages/Sections"
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/sections">
            <Sections />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
