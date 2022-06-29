import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import NewUser from './components/NewUser/NewUser';
import DoPage from './pages/DoPage/DoPage'

function App() {

  return (
    <div className="App">
      Home
      <BrowserRouter>
        <Switch>
          <Route path='/contactus' component={ContactPage} />
          <Route path='/register' component={NewUser} />
          <Route path='/do' component={DoPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
