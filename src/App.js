import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import NewUser from './components/NewUser/NewUser';
import DoPage from './pages/DoPage/DoPage'
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Login from './components/LogIn/Login';
import LearnPage from './pages/LearnPage/LearnPage';

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
          <Route exact path='/' component={HomePage} />
          <Route path='/register' component={NewUser} />
          <Route path='/login' component={Login} />
          <Route path='/learn' component={LearnPage} />
          <Route path='/contactus' render={(props) => <ContactPage isAuth={isAuth} {...props} />}/>
          <Route path='/do' render={(props) => <DoPage isAuth={isAuth} {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
