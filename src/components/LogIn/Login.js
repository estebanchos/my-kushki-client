import './Login.scss';
import { useState } from 'react';
import hideIcon from '../../assets/icons/hide.svg';
import showIcon from '../../assets/icons/show.svg';
import InvalidInput from '../InvalidInput/InvalidInput';
import axios from 'axios';
import { apiUrl } from '../../utils/api'
import { Link, useHistory } from 'react-router-dom';

function Login({ userLoggedIn }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isValidLogin, setValidLogin] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    let history = useHistory()

    const redirectToDashboard = () => history.push('/dashboard')

    const handleSubmit = () => {
        if (email && password) {
            axios.post(`${apiUrl}/users/login`, {
                email,
                password
            })
                .then(res => {
                    setEmail('')
                    setPassword('')
                    sessionStorage.setItem('token', res.data.token)
                    userLoggedIn()
                    redirectToDashboard()
                })
                .catch(err => {
                    console.log(err)
                    setValidLogin(err.response.data.validLogin)
                    setErrorMessage(err.response.data.message)
                })
        }
    }

    return (
        <main className='login'>
            <h1 className='login__title'>Log in</h1>
            <p className='login__copy'>Sign in to access your tools.</p>
            <div className='login__container'>
                <input
                    className='login__input'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoCapitalize='none'
                />
                <input
                    className='login__input'
                    placeholder='Password'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <div className='show-password'>
                    <img
                        className={`show-password__icon${!showPassword ? '--active' : '--hide'}`}
                        src={showIcon}
                        alt='show password icon'
                        onClick={() => setShowPassword(!showPassword)}
                    />
                    <img
                        className={`show-password__icon${showPassword ? '--active' : '--hide'}`}
                        src={hideIcon}
                        alt='hide password icon'
                        onClick={() => setShowPassword(!showPassword)}
                    />
                </div>
                <InvalidInput isValid={isValidLogin} message={errorMessage} />
                <button
                    className='login__button'
                    onClick={handleSubmit}
                >
                    Log in
                </button>
            </div>
            <div className='register-redirect'>
                <p className='register-redirect__copy'>Don't yet have an account?</p>
                <Link className='register-redirect__link' to='/register'>Sign Up</Link>
            </div>
        </main>
    );
}

export default Login;