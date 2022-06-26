import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import NewUser from './pages/NewUser/NewUser';

function App() {

  return (
    <div className="App">
      Home
      <BrowserRouter>
        <Switch>
          <Route path='/contactus' component={ContactPage} />
          <Route path='/register' component={NewUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
