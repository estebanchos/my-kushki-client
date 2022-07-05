import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import NewUser from './components/NewUser/NewUser';
import DashboardPage from './pages/DashboardPage/DashboardPage'
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Login from './components/LogIn/Login';
import LearnPage from './pages/LearnPage/LearnPage';
import Footer from './components/Footer/Footer';
import PlaceholderPage from './pages/PlaceholderPage/PlaceholderPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

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
        <Header isAuth={isAuth} userLoggedOut={userLoggedOut} />
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/register' component={NewUser} />
            <Route path='/login' render={(props) => <Login userLoggedIn={userLoggedIn} {...props} />} />
            <Route exact path='/learn' component={LearnPage} />
            <Route path='/contactus' render={(props) => <ContactPage isAuth={isAuth} {...props} />} />
            <Route path='/dashboard' render={(props) => <DashboardPage isAuth={isAuth} userLoggedIn={userLoggedIn} {...props} />} />
            <Route path='/learn/placeholder' component={PlaceholderPage} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
