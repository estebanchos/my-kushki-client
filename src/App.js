import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {

  return (
    <div className="App">
      Home
      <BrowserRouter>
        <Switch>
          <Route path='/contactus' component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
