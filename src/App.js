import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {Template} from './components/mainComponents';
function App() {
  return (
    <BrowserRouter>
    <Template>
      <Header />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>

              <Route>
                <NotFound />
              </Route>
          </Switch>
      <Footer />
      </Template>
    </BrowserRouter>
  );
}

export default App;
