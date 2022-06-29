import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import NewUser from './components/NewUser/NewUser';
import DoPage from './pages/DoPage/DoPage'
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(false)

  const userLoggedIn = () => setIsAuth(true)
  const userLoggedOut = () => setIsAuth(false)

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (!token) userLoggedOut()
    if (!!token) userLoggedIn() 
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header isAuth={isAuth} />
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
